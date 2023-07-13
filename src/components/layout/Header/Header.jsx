import React from 'react';

import { Search } from 'components/Search/Search.jsx';
import { Categories } from 'components/Categories/Categories.jsx';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Search />
        <Categories />
      </div>
    </header>
  );
};
