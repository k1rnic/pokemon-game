import React, { FC } from 'react';
import Button from '../../components/Button';
import styles from './style.module.css';

interface Props {
  onRouteChange?: (route: string) => any;
}

const GamePage: FC<Props> = ({ onRouteChange }) => {
  const handleBackClick = () => {
    onRouteChange?.('home');
  };

  return (
    <div className={styles.header}>
      <Button label="back" onClick={handleBackClick} />
      <h3 className={styles.title}>Game</h3>
    </div>
  );
};

export default GamePage;
