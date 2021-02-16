import { Reducer } from 'react';
import { IGameBoardCell } from '../interfaces/game-board';

export type BoardState = {
  cells: IGameBoardCell[];
  yourTurn: boolean;
  isFill: boolean;
};

export type BoardAction =
  | { type: 'reset' }
  | { type: 'update_board'; board: IGameBoardCell[] }
  | { type: 'move'; board: IGameBoardCell[] };

export const initialBoardState: BoardState = {
  cells: [],
  yourTurn: true,
  isFill: false,
};

const boardReducer: Reducer<BoardState, BoardAction> = (state, action) => {
  switch (action.type) {
    case 'update_board':
      return {
        ...state,
        cells: [...action.board],
      };
    case 'move':
      return {
        ...state,
        cells: [...action.board],
        yourTurn: !state.yourTurn,
        isFill: action.board.every((cell) => cell.card),
      };
    case 'reset': {
      return {
        ...initialBoardState,
      };
    }
    default:
      return state;
  }
};

export default boardReducer;
