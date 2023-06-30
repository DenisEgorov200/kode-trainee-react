import React from 'react';

import loupe from '/loupe.png';
import styles from './ErrorFound.module.scss';

export const ErrorFound = () => {
  return (
    <div className={styles.found}>
      <div className={styles.foundContainer}>
        <div className={styles.foundImg}>
          <img src={loupe} alt="loupe" />
        </div>
        <h3 className={styles.foundTitle}>Мы никого не нашли</h3>
        <span className={styles.foundSubTitle}>Попробуй скорректировать запрос</span>
      </div>
    </div>
  );
};
