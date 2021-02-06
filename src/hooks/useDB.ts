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
  const collectionRef = database.child(collectionName);

  const [collection, setCollection] = useState<{
    [key: string]: T;
  }>({});

  const createEntity = (entity?: Partial<T>) => {
    const newItemObjID = collectionRef.push().key!;
    collectionRef.child(newItemObjID).set(entity);
  };

  const updateEntity = (objID: string, updateFn: (entity: T) => Partial<T>) => {
    const entity = {
      ...collection[objID],
      ...updateFn(collection[objID]),
    };

    collectionRef.child(objID).set(entity);
  };

  useEffect(() => {
    collectionRef?.on('value', (snapshot) => {
      setCollection(snapshot.val());
    });
    return () => collectionRef.off('value');
  }, [collectionRef]);

  return [collection, createEntity, updateEntity] as const;
};

export default useDB;
