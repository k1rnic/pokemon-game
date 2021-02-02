import React, { FC, HTMLProps } from 'react';
import Button from '../Button';
import styles from './style.module.css';

interface Props extends HTMLProps<HTMLElement> {
  title: string;
  descr: string;
  onPlayClick?: () => any;
}

const Header: FC<Props> = ({
  title = 'pokemon game header',
  descr = 'pokemon game description',
  id,
  onPlayClick,
}) => {
  return (
    <header id={id} className={styles.root}>
      <div className={styles.forest}></div>
      <div className={styles.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
        <Button label="start" onClick={onPlayClick} />
      </div>
    </header>
  );
};

export default Header;
