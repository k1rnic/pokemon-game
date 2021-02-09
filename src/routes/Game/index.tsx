import { FC } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Board from './Board';
import Finish from './FInish';
import Start from './Start';

interface Props {}

const GamePage: FC<Props> = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match?.path}`} exact component={Start} />
      <Route path={`${match?.path}/board`} component={Board} />
      <Route path={`${match?.path}/finish`} component={Finish} />
    </Switch>
  );
};

export default GamePage;
