import classnames from 'classnames';
import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import BattleBg from '../../../../assets/img/battle-bg.png';
import Button from '../../../../components/Button';
import Layout from '../../../../components/Layout';
import PokemonCard from '../../../../components/PokemonCard';
import { usePokemonState } from '../../../../context/PokemonContext';
import styles from './style.module.css';

interface Props {}

const Start: FC<Props> = () => {
  const { items, select, selected } = usePokemonState();
  const history = useHistory();

  const handlePokemonClick = (entityId: string) => {
    select(entityId);
  };

  const navigateToBoard = () => {
    history.push('game/board');
  };

  useEffect(() => {}, [selected]);

  return (
    <Layout id="gameSection" title="Game" urlBg={BattleBg}>
      <div className={styles.gameToolbar}>
        <Button
          label="start"
          type="default"
          disabled={selected.length !== 5}
          onClick={navigateToBoard}
        ></Button>
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
              isSelected={isSelected}
              onCardClick={() => handlePokemonClick(objID)}
            />
          ),
        )}
      </div>
    </Layout>
  );
};

export default Start;
