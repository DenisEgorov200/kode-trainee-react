import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchFilter } from '@/store/filter/filterSlice.js';

import { Sort } from 'components/Sort/Sort.jsx';
import { SearchIcon } from '@/assets/icon/SearchIcon.jsx';
import { SortIcon } from '@/assets/icon/SortIcon.jsx';

import styles from './Search.module.scss';

export const Search = () => {
  const dispatch = useDispatch();
  const searchFilter = useSelector((state) => state.filter.searchFilter);
  const sortId = useSelector((state) => state.sort.sortId);

  const [modalActive, setModalActive] = useState(false);

  const handleChange = (e) => {
    dispatch(setSearchFilter(e.target.value));
  };

  return (
    <>
      <div className={styles.search}>
        <label className={styles.searchLabel}>Поиск</label>
        <div className={styles.searchWrapper}>
          <SearchIcon className={styles.searchIcon} />
          <input
            type="search"
            value={searchFilter}
            onChange={(e) => handleChange(e)}
            className={styles.searchInput}
            placeholder={'Введи имя, тег, почту...'}
          />
          <SortIcon
            className={sortId === 1 ? `${styles.searchIcon} ${styles.active}` : styles.searchIcon}
            onClick={() => setModalActive(!modalActive)}
          />
        </div>
      </div>
      {modalActive && <Sort active={modalActive} setActive={setModalActive} />}
    </>
  );
};
