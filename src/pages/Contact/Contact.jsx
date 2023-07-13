import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetUsersQuery } from '@/store/users/usersApiSlice.js';

import { Loader } from 'components/UI/Loader/Loader.jsx';
import { formatPhone } from '@/utils/formatPhone.js';
import { getCurrentAge } from '@/utils/getCurrentAge.js';
import { formatDate } from '@/utils/formatDate.js';

import { CanselIcon } from 'assets/icon/CancelIcon.jsx';
import { PhoneIcon } from 'assets/icon/PhoneIcon.jsx';
import { FavoriteIcon } from 'assets/icon/FavoriteIcon.jsx';
import plug from 'assets/img/Plug.jpg';
import styles from './Contact.module.scss';

export const Contact = () => {
  const { id } = useParams();
  const userType = useSelector((state) => state.category.category.type);
  const navigate = useNavigate();

  const { data: users, isLoading } = useGetUsersQuery({ example: userType });
  const user = users ? users?.items?.find((item) => item.id === id) : '';

  const date = new Date(user.birthday);

  const onClickCancel = () => {
    navigate('/');
  };

  if (isLoading) return <Loader />;

  return (
    <div className={styles.contact}>
      <div className={styles.contactHeader}>
        <div className={styles.contactAvatar}>
          <img src={plug} alt="plug" />
        </div>
        <div className={styles.contactInfo}>
          <h3 className={styles.contactName}>
            {user.firstName} {user.lastName}
          </h3>
          <span className={styles.contactTag}>{user.userTag}</span>
        </div>
        <span className={styles.contactPosition}>{user.position}</span>
        <CanselIcon className={styles.contactCancel} onClick={onClickCancel} />
      </div>
      <div className={styles.contactBody}>
        <div className={`container ${styles.contactContainer}`}>
          <div className={styles.contactRow}>
            <div className={styles.contactYearBirth}>
              <FavoriteIcon className={styles.contactIcon} />
              <span>{formatDate(date)}</span>
            </div>
            <span className={styles.contactYear}>{getCurrentAge(date)}</span>
          </div>
          <div className={styles.contactRow}>
            <div className={styles.contactTel}>
              <PhoneIcon className={styles.contactIcon} />
              <a href={`tel:${user.phone}`}>{formatPhone(user.phone)}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
