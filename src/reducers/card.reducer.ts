import { Reducer } from 'react';
import { IPokemon } from '../interfaces/pokemon';

const DECK_SIZE = 5;

export type CardState = {
  player: { [key: string]: IPokemon };
  opponent: { [key: number]: IPokemon };
  ready: boolean;
};

export type CardAction =
  | { type: 'select'; id: number; card: IPokemon }
  | { type: 'reset' }
  | { type: 'load_opponent'; cards: IPokemon[] }
  | { type: 'move_player'; id: number }
  | { type: 'move_opponent'; id: number };

export const initialCardState: CardState = {
  player: {},
  opponent: [],
  ready: false,
};

const cardReducer: Reducer<CardState, CardAction> = (state, action) => {
  switch (action.type) {
    case 'select': {
      let player = { ...state.player };

      if (player[action.id]) {
        delete player[action.id];
      } else {
        player = {
          ...player,
          [action.id]: {
            ...action.card,
            player: 1,
            possession: 'blue',
          },
        };
      }
      return {
        ...state,
        player: player,
        ready: Object.entries(player).length === DECK_SIZE,
      };
    }
    case 'reset': {
      return {
        ...initialCardState,
      };
    }
    case 'load_opponent':
      return {
        ...state,
        opponent: action.cards.reduce(
          (acc, curr) => ({
            ...acc,
            [curr.id]: { ...curr, player: 2, possession: 'red' },
          }),
          {} as { [key: number]: IPokemon },
        ),
      };
    case 'move_player': {
      return {
        ...state,
        player: {
          ...state.player,
          [action.id]: {
            ...state.player[action.id],
            used: true,
          },
        },
      };
    }
    case 'move_opponent': {
      return {
        ...state,
        opponent: {
          ...state.opponent,
          [action.id]: {
            ...state.opponent[action.id],
            used: true,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default cardReducer;
