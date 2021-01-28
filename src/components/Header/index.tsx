import React, { FC } from 'react';
import styles from './style.module.css';

interface Props {
  title: string;
  descr: string;
}

const Header: FC<Props> = ({ title, descr }) => {
  return (
    <header className={styles.root}>
      <div className={styles.forest}></div>
      <div className={styles.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: 'pokemon game header',
  descr: 'pokemon game description',
};

export default Header;
