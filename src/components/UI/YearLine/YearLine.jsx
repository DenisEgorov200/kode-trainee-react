import React from 'react';
import { useSelector } from 'react-redux';

import styles from './YearLine.module.scss';

export const YearLine = () => {
  const sortByType = useSelector((state) => state.sort.sortBy.type);

  return (
    <>
      {sortByType === 'birthday' && (
        <div className={styles.line}>{new Date().getFullYear() + 1}</div>
      )}
    </>
  );
};
