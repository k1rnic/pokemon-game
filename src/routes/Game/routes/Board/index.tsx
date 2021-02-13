import classnames from 'classnames';
import React, { FC } from 'react';
import PokemonCard from '../../../../components/PokemonCard';
import { usePokemonState } from '../../../../context/PokemonContext';
import styles from './style.module.css';

const Board: FC = () => {
  const { selected } = usePokemonState();

  return (
    <div className={styles.root}>
      <div className={styles.playerOne}>
        {selected.map(
          ({ id, name, type, img, values, isActive, isSelected }) => (
            <PokemonCard
              className={classnames(styles.card)}
              key={id}
              id={id}
              name={name}
              type={type}
              img={img}
              values={values}
              onCardClick={() => {}}
              minimize
            />
          ),
        )}
      </div>
      <div className={styles.board}>
        <div className={styles.boardPlate}>1</div>
        <div className={styles.boardPlate}>2</div>
        <div className={styles.boardPlate}>3</div>
        <div className={styles.boardPlate}>4</div>
        <div className={styles.boardPlate}>5</div>
        <div className={styles.boardPlate}>6</div>
        <div className={styles.boardPlate}>7</div>
        <div className={styles.boardPlate}>8</div>
        <div className={styles.boardPlate}>9</div>
      </div>
    </div>
  );
};

export default Board;
