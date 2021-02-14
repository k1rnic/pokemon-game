interface IPosition {
  top: string | number;
  right: string | number;
  bottom: string | number;
  left: string | number;
}

interface IStat {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export interface IPokemon {
  player?: number;
  possession?: string;
  abilities?: string[];
  stats?: IStat;
  type: string;
  img: string;
  name: string;
  baseExperience?: number;
  height?: number;
  id: number;
  values: IPosition;
  isActive?: boolean;
  isSelected?: boolean;
  used?: boolean;
}
