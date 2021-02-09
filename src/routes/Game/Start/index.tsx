import React, { FC } from 'react';
import BattleBg from '../../../assets/img/battle-bg.png';
import ButtonLink from '../../../components/ButtonLink';
import Layout from '../../../components/Layout';
import PokemonCard from '../../../components/PokemonCard';
import useCollection from '../../../hooks/useCollection';
import styles from './style.module.css';

interface Props {}

const Start: FC<Props> = () => {
  const [pokemons, createPokemon, updatePokemon] = useCollection('pokemons');

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
        <ButtonLink
          label="start"
          type="default"
          link="game/board"
          onClick={handlePokemonAddClick}
        ></ButtonLink>
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
              className=""
              minimize
            />
          ),
        )}
      </div>
    </Layout>
  );
};

export default Start;
