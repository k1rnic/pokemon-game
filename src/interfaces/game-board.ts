import { IPokemon } from './pokemon';

export interface IGameBoardCell {
  card: IPokemon | null;
  position: number;
}
