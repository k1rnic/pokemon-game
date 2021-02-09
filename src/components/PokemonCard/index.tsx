import classnames from 'classnames';
import React, { FC } from 'react';
import { IPokemon } from '../../types/pokemon';
import styles from './style.module.css';

interface Props extends IPokemon {
  onCardClick: (id: number) => any;
  minimize: boolean;
  className: string;
}

const PokemonCard: FC<Props> = ({
  id,
  name,
  type,
  img,
  values,
  isActive,
  minimize,
  className,
  onCardClick,
}) => {
  return (
    <div
      className={classnames(styles[className], styles.pokemonCard, {
        [styles.active]: isActive,
      })}
    >
      <div className={styles.cardFront}>
        <div className={classnames(styles.wrap, styles.front)}>
          <div className={classnames(styles.pokemon, styles[type])}>
            <div className={styles.values}>
              <div className={classnames(styles.count, styles.top)}>
                {values.top}
              </div>
              <div className={classnames(styles.count, styles.right)}>
                {values.right}
              </div>
              <div className={classnames(styles.count, styles.bottom)}>
                {values.bottom}
              </div>
              <div className={classnames(styles.count, styles.left)}>
                {values.left}
              </div>
            </div>
            <div className={styles.imgContainer}>
              <img src={img} alt={name} />
            </div>
            {!minimize && (
              <div className={styles.info}>
                <span className={styles.number}>#{id}</span>
                <h3 className={styles.name}>{name}</h3>
                <small className={styles.type}>
                  Type: <span>{type}</span>
                </small>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.cardBack}>
        <div className={classnames(styles.wrap, styles.back)} />
      </div>
    </div>
  );
};

export default PokemonCard;
