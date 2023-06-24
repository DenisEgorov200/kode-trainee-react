import React from 'react';

import { Modal } from 'components/Modal/Modal.jsx';

import styles from './Sort.module.scss';
import { CancelIcon } from 'assets/icon/CancelIcon.jsx';

export const Sort = ({ active, setActive }) => {
  return (
    <div className={styles.sort}>
      <Modal active={active} setActive={setActive}>
        <div className={styles.sortHeader}>
          <h3 className={styles.sortTitle}>Сортировка</h3>
          <CancelIcon className={styles.sortClose} onClick={() => setActive(false)} />
        </div>
        <div className={styles.sortOptions}>
          <label className={styles.sortOption}>
            <input className={styles.sortRadio} type="radio" name="radio" />
            <span className={styles.sortCheckmark}></span>
            По алфавиту
          </label>
          <label className={styles.sortOption}>
            <input className={styles.sortRadio} type="radio" name="radio" />
            <span className={styles.sortCheckmark}></span>
            По дню рождения
          </label>
        </div>
      </Modal>
    </div>
  );
};
