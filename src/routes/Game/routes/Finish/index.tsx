import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useGameState } from '../../../../context/GameContext';
import Win from './components/Finish';
import Lose from './components/Lose';

const Finish: FC = () => {
  const { results } = useGameState();
  const history = useHistory();

  if (!results) {
    history.replace('/game');
  }

  return results === 'win' ? <Win /> : results === 'draw' ? <Lose /> : <Lose />;
};

export default Finish;
