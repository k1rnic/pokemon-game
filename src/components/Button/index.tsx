import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './style.module.css';

type ButtonType = 'default' | 'success' | 'danger' | 'warning';

interface Props {
  label?: string;
  onClick?: () => any;
  type?: ButtonType;
}

const Button: FC<Props> = ({ label, type = 'default', onClick }) => {
  return (
    <button
      className={classnames(styles.button, styles[type])}
      onClick={onClick}
    >
      {label?.toUpperCase()}
    </button>
  );
};

export default Button;
