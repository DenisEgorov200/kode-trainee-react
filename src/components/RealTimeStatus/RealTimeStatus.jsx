import React from 'react';

import styles from './RealTimeStatus.module.scss';

export const RealTimeStatus = ({ isOnline }) => {
  return (
    <header className={isOnline ? `${styles.status} ${styles.active}` : styles.status}>
      <div className="container">
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
