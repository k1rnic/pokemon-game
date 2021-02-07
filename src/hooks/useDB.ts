import { useEffect, useState } from 'react';
import database from '../services/database';
import { IPokemon } from '../types/pokemon';

type Collection = {
  pokemons: IPokemon;
};

type CollectionKey = keyof Collection;

const useDB = <K extends CollectionKey, T extends Collection[K]>(
  collectionName: K,
) => {
  const [collection, setCollection] = useState<{
    [key: string]: T;
  }>({});

  const createEntity = (entity?: Partial<T>) => {
    database.child(collectionName).push(entity);
  };

  const updateEntity = (objID: string, updateFn: (entity: T) => Partial<T>) => {
    const entity = {
      ...collection[objID],
      ...updateFn(collection[objID]),
    };

    database.child(collectionName).child(objID).set(entity);
  };

  useEffect(() => {
    if (collectionName) {
      database.child(collectionName).on('value', (snapshot) => {
        setCollection(snapshot.val());
      });
      return () => database.child(collectionName).off('value');
    }
  }, [collectionName]);

  return [collection, createEntity, updateEntity] as const;
};

export default useDB;
