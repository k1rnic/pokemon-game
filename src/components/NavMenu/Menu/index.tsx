import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './style.module.css';

export interface NavItem {
  label: string;
  route: string;
}

interface Props {
  items: NavItem[];
  active?: boolean;
  onToggle: () => any;
}

const Menu: FC<Props> = ({ items = [], active = false, onToggle }) => {
  return (
    <div
      className={classnames(styles.menuContainer, {
        [styles.active]: active,
        [styles.deactive]: !active,
      })}
    >
      <div className={styles.overlay} />
      <div className={styles.menuItems}>
        <ul>
          {items.map((item) => (
            <li key={item.route}>
              <a href={`#${item.route}`} onClick={onToggle}>
                {item.label?.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
