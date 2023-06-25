import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortId, setSortBy } from '@/store/filter/sortSlice.js';

import { Modal } from 'components/Modal/Modal.jsx';

import { CancelIcon } from 'assets/icon/CancelIcon.jsx';
import styles from './Sort.module.scss';

const listOptions = [
  { name: 'По алфавиту', type: 'alphabet' },
  { name: 'По дню рождения', type: 'birthday' },
];

export const Sort = ({ active, setActive }) => {
  const dispatch = useDispatch();
  const activeIndex = useSelector((state) => state.sort.sortId);

  const onClickCategory = (index, sort) => {
    if (activeIndex !== index) {
      dispatch(setSortId(index));
      dispatch(setSortBy(sort));
    }
  };

  return (
    <div className={styles.sort}>
      <Modal active={active} setActive={setActive}>
        <div className={styles.sortHeader}>
          <h3 className={styles.sortTitle}>Сортировка</h3>
          <CancelIcon className={styles.sortClose} onClick={() => setActive(false)} />
        </div>
        <div className={styles.sortOptions}>
          {listOptions.map((option, index) => (
            <label key={option.type} className={styles.sortOption}>
              <input
                className={
                  activeIndex === index ? `${styles.sortRadio} ${styles.active}` : styles.sortRadio
                }
                onClick={() => onClickCategory(index, option)}
                type="radio"
                name="radio"
              />
              <span className={styles.sortCheckmark}></span>
              {option.name}
            </label>
          ))}
        </div>
      </Modal>
    </div>
  );
};