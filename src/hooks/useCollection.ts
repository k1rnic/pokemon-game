import { useEffect, useState } from 'react';
import { IPokemon } from '../interfaces/pokemon';
import database from '../services/database';

export type CollectionMap = {
  pokemons: IPokemon;
};

export type CollectionKey = keyof CollectionMap;

export type Collection = {
  [key: string]: CollectionMap[CollectionKey];
};

export type SelectEntityFn = (entityKey: string) => any;

export type CreateEntityFn = (
  entity: Partial<CollectionMap[CollectionKey]>,
) => any;

export type UpdateEntityFn = (
  id: string,
  updateFn: (
    entity: CollectionMap[CollectionKey],
  ) => Partial<CollectionMap[CollectionKey]>,
) => any;

const useCollection = <K extends CollectionKey, T extends CollectionMap[K]>(
  collectionName: K,
) => {
  const [collection, setCollection] = useState<{
    [key: string]: T;
  }>({});

  const createEntity: CreateEntityFn = (entity) => {
    database.child(collectionName).push(entity);
  };

  const updateEntity: UpdateEntityFn = (entityKey, updateFn) => {
    const entity = {
      ...updateFn(collection[entityKey]),
    };

    database.child(collectionName).child(entityKey).update(entity);
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

export default useCollection;
