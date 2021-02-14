import React, { createContext, FC, useContext } from 'react';
import useCollection, {
  Collection,
  CreateEntityFn,
  UpdateEntityFn,
} from '../hooks/useCollection';

const PokemonContext = createContext<{
  items: Collection;
  create: CreateEntityFn;
  update: UpdateEntityFn;
}>(undefined!);

export const PokemonProvider: FC = ({ children }) => {
  const [items, create, update] = useCollection('pokemons');

  return (
    <PokemonContext.Provider
      value={{
        items,
        create,
        update,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonState = () => {
  const context = useContext(PokemonContext);

  if (!context) {
    console.error(
      'usePokemonState should be used in pair with PokemonProvider',
    );
  }

  return context;
};
