import React from 'react';
import { useOnline } from '@/hooks/useOnline.js';

import { Header } from 'components/layout/Header/Header.jsx';
import { RealTimeStatus } from 'components/RealTimeStatus/RealTimeStatus.jsx';
import { Users } from 'components/Users/Users.jsx';

import styles from './Home.module.scss';

export const Home = () => {
  const { isOnline, showRealTimeStatus } = useOnline();

  return (
    <>
      {showRealTimeStatus ? <RealTimeStatus isOnline={isOnline} /> : <Header />}

      <div className={styles.home}>
        <div className={`${styles.homeContainer} ${styles.container}`}>
          <Users />
        </div>
      </div>
    </>
  );
};
