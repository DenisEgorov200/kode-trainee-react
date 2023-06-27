import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setCurrentUser } from '@/store/users/currentUserSlice.js';

import plug from 'assets/img/Plug.jpg';
import styles from './Users.module.scss';

export const User = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickUser = () => {
    navigate(`/contact/${user.id}`);
    dispatch(setCurrentUser(user));
  };

  return (
    <div className={styles.user} onClick={onClickUser}>
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
  );
};
