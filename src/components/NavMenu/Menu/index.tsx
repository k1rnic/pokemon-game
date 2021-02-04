import classnames from 'classnames';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

export interface NavItem {
  label: string;
  route: string;
}

interface Props {
  items: NavItem[];
  isOpen: boolean | null;
  onRouteChange: (route: string) => any;
}

const Menu: FC<Props> = ({ items = [], isOpen, onRouteChange }) => {
  const handleRouteChange = (route: string) => {
    onRouteChange?.(route);
  };

  return (
    <div
      className={classnames(styles.menuContainer, {
        [styles.active]: isOpen === true,
        [styles.deactive]: isOpen === false,
      })}
    >
      <div className={styles.overlay} />
      <div className={styles.menuItems}>
        <ul>
          {items.map(({ route, label }) => (
            <li key={route}>
              <Link to={`${route}`} onClick={() => handleRouteChange(route)}>
                {label?.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
