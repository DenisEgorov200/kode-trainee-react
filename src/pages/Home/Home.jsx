import React from 'react';

import { Header } from 'components/layout/Header/Header.jsx';
import { Users } from 'components/Users/Users.jsx';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <div className={`container ${styles.homeContainer}`}>
          <Users />
        </div>
      </div>
    </>
  );
};
