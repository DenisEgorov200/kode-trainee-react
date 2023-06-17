import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from './Users.module.scss';

export const UserSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div key={i} className={styles.user}>
        <div className={styles.userAvatar}>
          <Skeleton circle width={72} height={72} />
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userTop}>
            <Skeleton width={144} height={16} />
          </div>
          <span className={styles.userPosition}>
            <Skeleton width={80} height={12} />
          </span>
        </div>
      </div>
    ));
};
