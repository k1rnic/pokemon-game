import classnames from 'classnames';
import React, { FC } from 'react';
import { IPokemon } from '../../interfaces/pokemon';
import styles from './style.module.css';

interface Props extends IPokemon {
  onCardClick?: (card: IPokemon) => any;
  minimize?: boolean;
  className?: string;
  disabled?: boolean;
}

const PokemonCard: FC<Props> = ({
  minimize = false,
  className,
  onCardClick,
  disabled,
  ...card
}) => {
  const handleCardClick = () => {
    onCardClick?.(card);
  };

  return (
    <div
      className={classnames(className, styles.pokemonCard, {
        [styles.active]: true,
        [styles.selected]: card.isSelected,
        [styles.disabled]: disabled,
      })}
      onClick={handleCardClick}
    >
      <div className={styles.cardFront}>
        <div className={classnames(styles.wrap, styles.front)}>
          <div
            className={classnames(
              styles.pokemon,
              styles[card.type],
              styles[card.possession!],
            )}
          >
            <div className={styles.values}>
              <div className={classnames(styles.count, styles.top)}>
                {card.values.top}
              </div>
              <div className={classnames(styles.count, styles.right)}>
                {card.values.right}
              </div>
              <div className={classnames(styles.count, styles.bottom)}>
                {card.values.bottom}
              </div>
              <div className={classnames(styles.count, styles.left)}>
                {card.values.left}
              </div>
            </div>
            <div className={styles.imgContainer}>
              <img src={card.img} alt={card.name} />
            </div>
            {!minimize && (
              <div className={styles.info}>
                <span className={styles.number}>#{card.id}</span>
                <h3 className={styles.name}>{card.name}</h3>
                <small className={styles.type}>
                  Type: <span>{card.type}</span>
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
