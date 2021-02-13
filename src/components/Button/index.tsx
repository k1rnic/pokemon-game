import classnames from 'classnames';
import React, { FC } from 'react';
import styles from './style.module.css';

type ButtonType = 'default' | 'success' | 'danger' | 'warning';

export interface Props {
  label?: string;
  onClick?: () => any;
  type?: ButtonType;
  disabled?: boolean;
}

const Button: FC<Props> = ({
  label,
  type = 'default',
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={classnames(styles.button, styles[type], {
        [styles.disabled]: disabled,
      })}
      onClick={onClick}
    >
      {label?.toUpperCase()}
    </button>
  );
};

export default Button;
