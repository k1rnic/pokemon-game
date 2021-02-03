import classnames from 'classnames';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

type ButtonType = 'default' | 'success' | 'danger' | 'warning';

interface Props {
  label?: string;
  onClick?: () => any;
  type?: ButtonType;
  link?: string;
}

const Button: FC<Props> = ({ label, link, type = 'default', onClick }) => {
  return (
    <button
      className={classnames(styles.button, styles[type])}
      onClick={onClick}
    >
      {link ? (
        <Link className={styles.buttonLink} to={link}>
          {label?.toUpperCase()}
        </Link>
      ) : (
        label?.toUpperCase()
      )}
    </button>
  );
};

export default Button;
