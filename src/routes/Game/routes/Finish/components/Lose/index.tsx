import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../../../../components/Button';
import styles from './styles.module.css';

const Lose: FC = () => {
  const history = useHistory();

  const handlePlayAgainClick = () => {
    history.replace('/game');
  };

  return (
    <div className={styles.root}>
      <h1>You lose :(</h1>
      <Button
        label="play again"
        type="default"
        onClick={handlePlayAgainClick}
      />
    </div>
  );
};

export default Lose;
