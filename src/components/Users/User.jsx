import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setCurrentUser } from '@/store/users/currentUserSlice.js';
import { formatDateMonth } from 'components/utils/formatDateMonth.js';

import plug from 'assets/img/Plug.jpg';
import styles from './Users.module.scss';

export const User = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sortId } = useSelector((state) => state.sort);

  const birthdayDate = new Date(user.birthday);

  const onClickUser = () => {
    navigate(`/contact/${user.id}`);
    dispatch(setCurrentUser(user));
  };

  return (
    <div
      className={sortId === 1 ? `${styles.user} ${styles.active}` : styles.user}
      onClick={onClickUser}
    >
      <div className={styles.userContainer}>
        <div className={styles.userAvatar}>
          <img src={plug} alt={`${user.firstName} ${user.lastName}`} />
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userTop}>
            <h4 className={styles.userName}>
              {user.firstName} {user.lastName}
            </h4>
            <span className={styles.userTag}>{user.userTag}</span>
          </div>
          <span className={styles.userPosition}>{user.position}</span>
        </div>
      </div>
      {sortId === 1 && <p className={styles.userDate}>{formatDateMonth(birthdayDate)}</p>}
    </div>
  );
};
