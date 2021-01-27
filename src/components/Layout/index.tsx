import React, { FC } from 'react';
import styles from './style.module.css';

interface Props {
  id: string;
  title: string;
  descr: string;
  urlBg?: string;
  colorBg?: string;
}

const Layout: FC<Props> = ({ id, title, descr, urlBg, colorBg }) => {
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
          <div className={`${styles.desc} ${styles.full}`}>
            <p>{descr}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;