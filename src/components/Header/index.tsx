import React, { FC, HTMLProps } from 'react';
import ButtonLink from '../ButtonLink';
import styles from './style.module.css';

interface Props extends HTMLProps<HTMLElement> {
  title: string;
  descr: string;
}

const Header: FC<Props> = ({
  title = 'pokemon game header',
  descr = 'pokemon game description',
  id,
}) => {
  return (
    <header id={id} className={styles.root}>
      <div className={styles.forest}></div>
      <div className={styles.silhouette}></div>
      <div className={styles.moon}></div>
      <div className={styles.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
        <ButtonLink label="start" link="/game" />
      </div>
    </header>
  );
};

export default Header;
