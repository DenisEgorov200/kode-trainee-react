import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchFilter } from '@/store/filter/filterSlice.js';

import { SearchIcon } from '@/assets/icon/SearchIcon.jsx';
import { SortIcon } from '@/assets/icon/SortIcon.jsx';

import styles from './Search.module.scss';

export const Search = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const searchFilter = useSelector((state) => state.filter.searchFilter);
  const userType = useSelector((state) => state.filter.sortBy.type);
  //
  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };
  //
  // useEffect(() => {
  //   dispatch(setSearchFilter(value));
  // }, [value, userType]);

  return (
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
        <SortIcon className={styles.searchIcon} />
      </div>
    </div>
  );
};
