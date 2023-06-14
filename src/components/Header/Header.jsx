import React from 'react';

import { Search } from 'components/UI/Search/Search.jsx';
import { Categories } from 'components/Categories/Categories.jsx';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Search />
      <Categories />
    </header>
  );
};
