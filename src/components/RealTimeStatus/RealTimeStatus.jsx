import React from 'react';

import styles from './RealTimeStatus.module.scss';

export const RealTimeStatus = ({ isOnline }) => {
  return (
    <header className={styles.status}>
      <div
        className={
          isOnline ? `${styles.statusContainer} ${styles.active}` : `${styles.statusContainer}`
        }
      >
        <h3 className={styles.statusTitle}>Поиск</h3>
        {isOnline ? (
          <span>Секундочку, гружусь...</span>
        ) : (
          <span>Не могу обновить данные. Проверь соединение с интернетом.</span>
        )}
      </div>
    </header>
  );
};
