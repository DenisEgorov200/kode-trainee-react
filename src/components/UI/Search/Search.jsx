import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFilter,
  setKeysFilters,
  setSearchText,
  setSorted,
  setUsers,
} from '@/store/users/usersSlice.js';

import { Sort } from 'components/Sort/Sort.jsx';
import { SearchIcon } from '@/assets/icon/SearchIcon.jsx';
import { SortIcon } from '@/assets/icon/SortIcon.jsx';

import styles from './Search.module.scss';

const filters = ['firstName', 'lastName', 'userTag'];

export const Search = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { searchText } = useSelector((state) => state.users);
  const { sortId, sortBy } = useSelector((state) => state.sort);

  const [modalActive, setModalActive] = useState(false);

  const handleChange = (e) => {
    dispatch(setSearchText(e.target.value));
    dispatch(setUsers(users));
    dispatch(setSorted(sortBy.type));
    dispatch(setFilter());
  };

  useEffect(() => {
    dispatch(setKeysFilters(filters));
  }, []);

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
