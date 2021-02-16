import cn from 'classnames';
import React, { FC, useState } from 'react';
import PokemonCard from '../../../../../../components/PokemonCard';
import { IPokemon } from '../../../../../../interfaces/pokemon';
import styles from './style.module.css';

type Props = {
  deck: IPokemon[];
  position: 'left' | 'right';
  canMove?: boolean;
  onClick: (card: IPokemon) => void;
};

const Deck: FC<Props> = ({ deck, position, canMove, onClick }) => {
  const [selected, setSelected] = useState<number>(null!);

  const handleCardClick = (card: IPokemon) => {
    setSelected(card.id);
    onClick(card);
  };

  return (
    <div
      className={cn(styles.player, styles[position], {
        [styles.disabled]: !canMove,
      })}
    >
      {deck.map((card) => (
        <PokemonCard
          className={cn(styles.card, {
            [styles.selected]: card.id === selected,
          })}
          key={card.id}
          id={card.id}
          name={card.name}
          type={card.type}
          img={card.img}
          values={card.values}
          onCardClick={() => canMove && handleCardClick(card)}
          disabled={!canMove}
          minimize
        />
      ))}
    </div>
  );
};

export default Deck;
