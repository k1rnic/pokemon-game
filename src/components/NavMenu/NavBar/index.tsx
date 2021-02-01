import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './style.module.css';

interface Props {
  active?: boolean;
  onToggle: () => any;
}

const NavBar: FC<Props> = ({ active, onToggle }) => {
  return (
    <nav id={styles.navbar}>
      <div className={styles.navWrapper}>
        <p className={styles.brand}>LOGO</p>
        <span
          className={classnames(styles.menuButton, {
            [styles.active]: active,
          })}
          onClick={onToggle}
        >
          <span />
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
