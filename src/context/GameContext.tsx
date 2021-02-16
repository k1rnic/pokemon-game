import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import gameApi from '../api/game';
import { IGameBoardCell } from '../interfaces/game-board';
import { IPokemon } from '../interfaces/pokemon';
import boardReducer, {
  BoardAction,
  BoardState,
  initialBoardState,
} from '../reducers/board.reducer';
import cardReducer, {
  CardAction,
  CardState,
  initialCardState,
} from '../reducers/card.reducer';

type GameState = {
  cards: CardState;
  board: BoardState;
};

const gameReducer = (
  { cards, board }: GameState,
  action: CardAction | BoardAction,
) => ({
  cards: cardReducer(cards, action as CardAction),
  board: boardReducer(board, action as BoardAction),
});

const GameContext = createContext<{
  state: GameState;
  select: (id: number, card: IPokemon) => void;
  clearSelection: () => void;
  start: () => void;
  move: (move: { position: number; card: IPokemon }) => void;
  results: 'win' | 'lose' | 'draw';
}>(null!);

type GameProviderProps = {};

export const GameProvider: FC<GameProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, {
    cards: initialCardState,
    board: initialBoardState,
  });
  const [results, setResults] = useState<'win' | 'lose' | 'draw'>(null!);

  const select = (id: number, card: IPokemon) => {
    dispatch({ type: 'select', id, card });
  };

  const clearSelection = useCallback(() => {
    dispatch({ type: 'reset' });
  }, []);

  const loadBoard = useCallback(() => {
    gameApi
      .get<{ data: IGameBoardCell[] }>('/board')
      .then(({ data: { data } }) =>
        dispatch({ type: 'update_board', board: data }),
      );
  }, []);

  const loadOpponent = useCallback(() => {
    gameApi
      .get<{ data: IPokemon[] }>('/create-player')
      .then(({ data: { data } }) =>
        dispatch({ type: 'load_opponent', cards: data }),
      );
  }, []);

  const move = useCallback(
    (move: { position: number; card: IPokemon }) => {
      const { position, card } = move;
      const board = state.board.cells;

      gameApi
        .post<{ data: IGameBoardCell[] }>('/players-turn', {
          position,
          card,
          board,
        })
        .then(({ data: { data } }) => {
          state.board.yourTurn
            ? dispatch({ type: 'move_player', id: card.id })
            : dispatch({ type: 'move_opponent', id: card.id });

          dispatch({ type: 'move', board: data });
        });
    },
    [state.board],
  );

  const start = useCallback(() => {
    loadBoard();
    loadOpponent();
  }, [loadBoard, loadOpponent]);

  useEffect(() => {
    if (state.board.isFill) {
      const cardCounter = { red: 0, blue: 0 };

      state.board.cells.forEach((cell) => {
        if (cell.card && cell.card.possession) {
          cardCounter[cell.card.possession as keyof typeof cardCounter]++;
        }
      });

      cardCounter.red =
        cardCounter.red + Object.keys(state.cards.opponent).length;
      cardCounter.blue =
        cardCounter.blue + Object.keys(state.cards.player).length;

      if (cardCounter.blue === cardCounter.red) {
        setResults('draw');
      } else {
        cardCounter.blue > cardCounter.red
          ? setResults('win')
          : setResults('lose');
      }
    }
  }, [state]);

  return (
    <GameContext.Provider
      value={{ state, select, clearSelection, start, move, results }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameState = () => {
  const context = useContext(GameContext);

  if (!context) {
    console.error(`useGameState should be used in pair with GameProvider`);
  }

  return context;
};
