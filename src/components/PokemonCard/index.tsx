import classnames from 'classnames';
import React, { FC } from 'react';
import PokemonCardFace from '../../assets/img/card-back-side.jpg';
import { IPokemon } from '../../types/pokemon';
import styles from './style.module.css';

interface Props extends IPokemon {
  onCardClick: (id: number) => any;
}

const PokemonCard: FC<Props> = ({
  id,
  name,
  type,
  img,
  values,
  isActive,
  onCardClick,
}) => {
  const handleCardClick = () => {
    onCardClick?.(id);
  };

  return (
    <div className={styles.root} onClick={handleCardClick}>
      <div
        className={classnames(styles.pokemonCard, {
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
              <div className={styles.info}>
                <span className={styles.number}>#{id}</span>
                <p className={styles.name}>{name}</p>
                <small className={styles[type]}>
                  Type: <span>{type}</span>
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cardBack}>
          <div className={classnames(styles.wrap, styles.back)}>
            <img src={PokemonCardFace} alt="Card Backed" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
