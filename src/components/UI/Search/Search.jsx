import React from 'react';

import { SearchIcon } from '@/assets/icon/SearchIcon.jsx';
import { SortIcon } from '@/assets/icon/SortIcon.jsx';

import styles from './Search.module.scss';

export const Search = () => {
  return (
    <div className={styles.search}>
      <label className={styles.searchLabel}>Поиск</label>
      <div className={styles.searchWrapper}>
        <SearchIcon className={styles.searchIcon} />
        <input
          type="search"
          className={styles.searchInput}
          placeholder={'Введи имя, тег, почту...'}
        />
        <SortIcon className={styles.searchIcon} />
      </div>
    </div>
  );
};
