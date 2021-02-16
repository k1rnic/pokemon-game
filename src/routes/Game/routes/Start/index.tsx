import classnames from 'classnames';
import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import BattleBg from '../../../../assets/img/battle-bg.png';
import Button from '../../../../components/Button';
import Layout from '../../../../components/Layout';
import PokemonCard from '../../../../components/PokemonCard';
import { useGameState } from '../../../../context/GameContext';
import { usePokemonState } from '../../../../context/PokemonContext';
import { IPokemon } from '../../../../interfaces/pokemon';
import styles from './style.module.css';

interface Props {}

const Start: FC<Props> = () => {
  const { items } = usePokemonState();
  const {
    state: {
      cards: { player, ready },
    },
    select,
    clearSelection,
  } = useGameState();
  const history = useHistory();

  const handlePokemonClick = (card: IPokemon) => {
    select(card.id, card);
  };

  const navigateToBoard = () => {
    history.push('game/board');
  };

  useEffect(() => {
    clearSelection();
  }, [clearSelection]);

  return (
    <Layout id="gameSection" title="Game" urlBg={BattleBg}>
      <div className={styles.gameToolbar}>
        <Button
          label="play"
          type="default"
          disabled={!ready}
          onClick={navigateToBoard}
        ></Button>
        <p>choose 5 cards to start</p>
      </div>
      <div className={classnames(styles.wrap)}>
        {Object.entries(items).map(
          ([objID, { id, name, type, img, values, isActive, isSelected }]) => (
            <PokemonCard
              className={classnames(styles.card)}
              key={objID}
              id={id}
              name={name}
              type={type}
              img={img}
              values={values}
              isSelected={!!player[id]}
              onCardClick={handlePokemonClick}
            />
          ),
        )}
      </div>
    </Layout>
  );
};

export default Start;
