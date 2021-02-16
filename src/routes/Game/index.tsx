import { FC } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { GameProvider } from '../../context/GameContext';
import { PokemonProvider } from '../../context/PokemonContext';
import Board from './routes/Board';
import Finish from './routes/Finish';
import Start from './routes/Start';

interface Props {}

const Game: FC<Props> = () => {
  const match = useRouteMatch();

  return (
    <PokemonProvider>
      <GameProvider>
        <Switch>
          <Route path={`${match?.path}`} exact component={Start} />
          <Route path={`${match?.path}/board`} component={Board} />
          <Route path={`${match?.path}/finish`} component={Finish} />
        </Switch>
      </GameProvider>
    </PokemonProvider>
  );
};

export default Game;
