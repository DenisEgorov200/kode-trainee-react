import React from 'react';

import { SearchIcon } from '@/assets/icon/SearchIcon.jsx';
import { ListIcon } from '@/assets/icon/ListIcon.jsx';

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
        <ListIcon className={styles.searchIcon} />
      </div>
    </div>
  );
};
