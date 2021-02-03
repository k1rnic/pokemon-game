import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Button, { Props as ButtonProps } from '../Button';
import styles from './style.module.css';

interface Props extends ButtonProps {
  link: string;
}

const ButtonLink: FC<Props> = ({ label, link, type = 'default', onClick }) => {
  return (
    <Link className={styles.buttonLink} to={link}>
      <Button label={label} type={type} onClick={onClick}></Button>
    </Link>
  );
};

export default ButtonLink;
