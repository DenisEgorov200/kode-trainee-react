import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setKeysFilters, setSearchText } from '@/store/users/usersSlice.js';

import { Sort } from 'components/Sort/Sort.jsx';
import { SearchIcon } from '@/assets/icon/SearchIcon.jsx';
import { SortIcon } from '@/assets/icon/SortIcon.jsx';

import styles from './Search.module.scss';

const filters = ['firstName', 'lastName', 'userTag'];

export const Search = () => {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.users);
  const { sortId } = useSelector((state) => state.sort);

  const [modalActive, setModalActive] = useState(false);
  const [focusActive, setFocusActive] = useState(false);

  const handleChange = (e) => {
    dispatch(setSearchText(e.target.value));
    dispatch(setFilter());
  };

  const handleFocus = () => {
    setFocusActive(false);
    dispatch(setSearchText(''));
    dispatch(setFilter());
  };

  useEffect(() => {
    dispatch(setKeysFilters(filters));
  }, []);

  useEffect(() => {
    modalActive
      ? document.body.classList.add('no-scroll')
      : document.body.classList.remove('no-scroll');
  }, [modalActive]);

  return (
    <>
      <div className={styles.search}>
        <label className={styles.searchLabel}>Поиск</label>
        <div className={styles.searchRow}>
          <div className={styles.searchWrapper}>
            <SearchIcon className={styles.searchIcon} />
            <input
              type="search"
              value={searchText}
              onChange={handleChange}
              onFocus={() => setFocusActive(true)}
              className={styles.searchInput}
              placeholder={'Введи имя, тег, почту...'}
            />
            <SortIcon
              className={sortId === 1 ? `${styles.searchIcon} ${styles.active}` : styles.searchIcon}
              onClick={() => setModalActive(!modalActive)}
            />
          </div>
          {focusActive && (
            <button className={`${styles.searchCancel} ${styles.btn}`} onClick={handleFocus}>
              Отмена
            </button>
          )}
        </div>
      </div>
      {modalActive && <Sort active={modalActive} setActive={setModalActive} />}
    </>
  );
};
