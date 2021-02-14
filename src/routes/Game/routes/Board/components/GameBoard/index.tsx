import React, { FC } from 'react';
import PokemonCard from '../../../../../../components/PokemonCard';
import { BoardState } from '../../../../../../reducers/board.reducer';
import styles from './style.module.css';

type Props = {
  board: BoardState;
  onCellClick: (position: number) => void;
};

const GameBoard: FC<Props> = ({ board, onCellClick }) => {
  return (
    <div className={styles.board}>
      {board.cells.map(({ position, card }) => (
        <div
          key={position}
          className={styles.boardPlate}
          onClick={() => !card && onCellClick?.(position)}
        >
          {card ? <PokemonCard {...card} minimize /> : position}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
