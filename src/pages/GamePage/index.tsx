import React, { FC, useState } from 'react';
import BattleBg from '../../assets/img/battle-bg.png';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import pokemonCards from '../../data/pokemon-cards.json';
import { IPokemon } from '../../types/pokemon';

interface Props {}

const GamePage: FC<Props> = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>(pokemonCards);

  const handleCardClick = (id: number) => {
    setPokemons((state) => {
      const activePokemonIdx = state.findIndex((pokemon) => pokemon.id === id);

      if (!state[activePokemonIdx]) {
        return state;
      }

      return [
        ...state.slice(0, activePokemonIdx),
        {
          ...state[activePokemonIdx],
          isActive: !state[activePokemonIdx].isActive,
        },
        ...state.slice(activePokemonIdx + 1),
      ];
    });
  };

  return (
    <Layout id="gameSection" title="Game" urlBg={BattleBg}>
      <div className="flex">
        {pokemons.map(({ id, name, type, img, values, isActive }) => (
          <PokemonCard
            key={id}
            id={id}
            name={name}
            type={type}
            img={img}
            values={values}
            isActive={isActive}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
    </Layout>
  );
};

export default GamePage;
