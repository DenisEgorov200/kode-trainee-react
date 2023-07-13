import React from 'react';
import { useNavigate } from 'react-router-dom';

import flyingSaucer from '/flyingSaucer.svg';
import styles from './ErrorBoundary.module.scss';

export const ErrorBoundary = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
    location.reload();
  };

  return (
    <div className={styles.error}>
      <img className={styles.errorImg} src={flyingSaucer} alt="flying saucer" />
      <h4 className={styles.errorTitle}>Какой-то сверхразум все сломал</h4>
      <span className={styles.errorSubTitle}>Постараемся быстро починить</span>
      <button type="button" className={styles.btn} onClick={handleClick}>
        Попробовать снова
      </button>
    </div>
  );
};
