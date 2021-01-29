import React, { FC } from 'react';
import styles from './style.module.css';
import classnames from 'classnames';

interface Props {
  id: string;
  title: string;
  urlBg?: string;
  colorBg?: string;
}

const Layout: FC<Props> = ({ id, title, urlBg, colorBg, children }) => {
  const backgroundStyle = urlBg
    ? { backgroundImage: `url(${urlBg})` }
    : { background: colorBg };

  return (
    <section className={styles.root} id={id} style={backgroundStyle}>
      <div className={styles.wrapper}>
        <article>
          <div className={styles.title}>
            <h3>{title}</h3>
            <span className={styles.separator}></span>
          </div>
          <div className={`${classnames(styles.desc, styles.full)}`}>
            {children}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
