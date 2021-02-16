import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useGameState } from '../../../../context/GameContext';
import { IPokemon } from '../../../../interfaces/pokemon';
import Deck from './components/Deck';
import GameBoard from './components/GameBoard';
import styles from './style.module.css';

const Board: FC = () => {
  const history = useHistory();
  const [selectedCard, setSelectedCard] = useState<IPokemon | null>(null);

  const {
    state: {
      cards: { player, opponent },
      board,
    },
    start,
    move,
  } = useGameState();

  useEffect(() => {
    start?.();
  }, [start]);

  if (!Object.keys(player).length) {
    history.replace('/game');
  }

  const handleCellClick = (position: number) => {
    if (selectedCard) {
      move({ position, card: selectedCard });
      setSelectedCard(null);
    }
  };

  const handleCardClick = (card: IPokemon) => {
    setSelectedCard(card);
  };

  useEffect(() => {
    console.log(board.isFill);

    if (board.isFill) {
      history.push('/game/finish');
    }
  }, [board.isFill, history]);

  return (
    <div className={styles.root}>
      <Deck
        deck={Object.values(player).filter((card) => !card.used)}
        position="left"
        onClick={handleCardClick}
        canMove={board.yourTurn}
      />
      <GameBoard board={board} onCellClick={handleCellClick} />
      <Deck
        deck={Object.values(opponent).filter((card) => !card.used)}
        position="right"
        onClick={handleCardClick}
        canMove={!board.yourTurn}
      />
    </div>
  );
};

export default Board;
