import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setSearchText } from '@/store/users/usersSlice.js';

import { Sort } from 'components/Sort/Sort.jsx';
import { SearchIcon } from '@/assets/icon/SearchIcon.jsx';
import { SortIcon } from '@/assets/icon/SortIcon.jsx';

import styles from './Search.module.scss';

const filters = ['firstName', 'lastName', 'userTag'];

export const Search = () => {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.users);
  const sortId = useSelector((state) => state.sort.sortId);

  const [modalActive, setModalActive] = useState(false);

  const handleChange = (e) => {
    dispatch(setSearchText(e.target.value));
    dispatch(setFilter(filters));
  };

  return (
    <>
      <div className={styles.search}>
        <label className={styles.searchLabel}>Поиск</label>
        <div className={styles.searchWrapper}>
          <SearchIcon className={styles.searchIcon} />
          <input
            type="search"
            value={searchText}
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
