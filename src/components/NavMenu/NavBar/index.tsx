import classnames from 'classnames';
import React, { FC } from 'react';
import styles from './style.module.css';

interface Props {
  isOpen: boolean | null;
  logoSrc?: string;
  bgActive?: boolean;
  onToggle: () => any;
}

const NavBar: FC<Props> = ({ isOpen, logoSrc, bgActive = false, onToggle }) => {
  return (
    <nav
      className={classnames(styles.navbar, {
        [styles.bgActive]: bgActive,
      })}
    >
      <div className={styles.navWrapper}>
        <p className={styles.brand}>
          <img className={styles.logo} src={logoSrc} alt="LOGO" />
        </p>
        <div
          className={classnames(styles.menuButton, {
            [styles.active]: isOpen,
          })}
          onClick={onToggle}
        >
          <span />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
