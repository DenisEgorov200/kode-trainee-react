import React from 'react';
import { useNavigate } from 'react-router-dom';

import plug from 'assets/img/Plug.jpg';

import styles from './Users.module.scss';

export const User = ({ user }) => {
  const navigate = useNavigate();

  const onClickUser = () => {
    navigate(`/contacts/${user.id}`);
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
