import cn from 'classnames';
import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../../../../components/Button';
import PokemonCard from '../../../../../../components/PokemonCard';
import { useGameState } from '../../../../../../context/GameContext';
import { usePokemonState } from '../../../../../../context/PokemonContext';
import { IPokemon } from '../../../../../../interfaces/pokemon';
import styles from './styles.module.css';

const Win: FC = () => {
  const history = useHistory();
  const { create } = usePokemonState();
  const {
    state: {
      cards: { player, opponent },
    },
  } = useGameState();

  const [selectedOpponentCard, setSelectedOpponentCard] = useState<IPokemon>(
    null!,
  );

  const handleEndGameClick = () => {
    if (selectedOpponentCard) {
      create(selectedOpponentCard);
      history.replace('/game');
    }
  };

  const handleCardClick = (card: IPokemon) => {
    setSelectedOpponentCard(card);
  };

  return (
    <div className={styles.root}>
      <h2>Congratulations</h2>
      <div className={cn(styles.deck, styles.yourCards)}>
        {Object.values(player).map((card) => (
          <PokemonCard
            className={styles.card}
            key={card.id}
            id={card.id}
            name={card.name}
            type={card.type}
            img={card.img}
            values={card.values}
            minimize
          />
        ))}
      </div>
      <Button
        type="default"
        label="end game"
        disabled={!selectedOpponentCard}
        onClick={handleEndGameClick}
      ></Button>
      <div className={cn(styles.deck, styles.opponentCards)}>
        {Object.values(opponent).map((card) => (
          <PokemonCard
            className={cn(styles.card, {
              [styles.selected]: selectedOpponentCard?.id === card.id,
            })}
            key={card.id}
            id={card.id}
            name={card.name}
            type={card.type}
            img={card.img}
            values={card.values}
            isSelected={selectedOpponentCard?.id === card.id}
            minimize
            onCardClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Win;
