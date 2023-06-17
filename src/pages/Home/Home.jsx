import React from 'react';

import { Users } from 'components/Users/Users.jsx';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className="container">
        <Users />
      </div>
    </div>
  );
};
