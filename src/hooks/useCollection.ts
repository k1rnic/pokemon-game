import { useEffect, useState } from 'react';
import database from '../services/database';
import { IPokemon } from '../types/pokemon';

export type CollectionMap = {
  pokemons: IPokemon;
};

export type CollectionKey = keyof CollectionMap;

export type Collection = {
  [key: string]: CollectionMap[CollectionKey];
};

export type SelectEntityFn = (entityId: string) => any;

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

  const updateEntity: UpdateEntityFn = (entityId, updateFn) => {
    const entity = {
      ...updateFn(collection[entityId]),
    };

    database.child(collectionName).child(entityId).update(entity);
  };

  const selectEntity: SelectEntityFn = (entityId) => {
    setCollection((state) => ({
      ...state,
      [entityId]: {
        ...state[entityId],
        isSelected: !state[entityId].isSelected,
      },
    }));
  };

  useEffect(() => {
    if (collectionName) {
      database.child(collectionName).on('value', (snapshot) => {
        setCollection(snapshot.val());
      });
      return () => database.child(collectionName).off('value');
    }
  }, [collectionName]);

  return [collection, createEntity, updateEntity, selectEntity] as const;
};

export default useCollection;
