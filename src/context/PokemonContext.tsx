import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import useCollection, {
  Collection,
  CreateEntityFn,
  UpdateEntityFn,
} from '../hooks/useCollection';
import { IPokemon } from '../types/pokemon';

const PokemonContext = createContext<{
  items: Collection;
  create: CreateEntityFn;
  update: UpdateEntityFn;
  select: (key: string) => any;
  selected: IPokemon[];
}>(undefined!);

export const PokemonProvider: FC = ({ children }) => {
  const [items, create, update, select] = useCollection('pokemons');
  const [selected, setSelected] = useState<IPokemon[]>([]);

  useEffect(() => {
    setSelected(Object.values(items).filter((pokemon) => pokemon.isSelected));
  }, [items]);

  return (
    <PokemonContext.Provider
      value={{
        items,
        create,
        update,
        select,
        selected,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonState = () => {
  const context = useContext(PokemonContext);

  if (context === undefined) {
    console.error(
      'usePokemonState should be used in pair with PokemonProvider',
    );
  }

  return context;
};
