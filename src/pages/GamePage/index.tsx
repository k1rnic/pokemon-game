import React, { FC } from 'react';
import BattleBg from '../../assets/img/battle-bg.png';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import useDB from '../../hooks/useDB';
import styles from './style.module.css';

interface Props {}

const GamePage: FC<Props> = () => {
  const [pokemons, createPokemon, updatePokemon] = useDB('pokemons');

  const handlePokemonClick = (objID: string) => {
    updatePokemon(objID, (state) => ({ isActive: !state.isActive }));
  };

  const handlePokemonAddClick = () => {
    const list = Object.values(pokemons);
    const newItem = list[Math.floor(Math.random() * list.length)];
    createPokemon({ ...newItem, isActive: false });
  };

  return (
    <Layout id="gameSection" title="Game" urlBg={BattleBg}>
      <div className={styles.gameToolbar}>
        <Button
          label="add pokemon"
          type="default"
          onClick={handlePokemonAddClick}
        ></Button>
      </div>
      <div className="flex">
        {Object.entries(pokemons).map(
          ([objID, { id, name, type, img, values, isActive }]) => (
            <PokemonCard
              key={objID}
              id={id}
              name={name}
              type={type}
              img={img}
              values={values}
              isActive={isActive}
              onCardClick={() => handlePokemonClick(objID)}
            />
          ),
        )}
      </div>
    </Layout>
  );
};

export default GamePage;
