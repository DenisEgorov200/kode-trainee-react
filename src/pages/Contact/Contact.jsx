import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { formatPhone } from 'components/utils/formatPhone.js';
import { getCurrentAge } from 'components/utils/getCurrentAge.js';
import { formatDate } from 'components/utils/formatDate.js';

import { CanselIcon } from 'assets/icon/CancelIcon.jsx';
import { PhoneIcon } from 'assets/icon/PhoneIcon.jsx';
import { FavoriteIcon } from 'assets/icon/FavoriteIcon.jsx';
import plug from 'assets/img/Plug.jpg';
import styles from './Contact.module.scss';

export const Contact = () => {
  const user = useSelector((state) => state.currentUser.user);
  const navigate = useNavigate();

  const date = new Date(user.birthday);

  const onClickCancel = () => {
    navigate('/');
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contactHeader}>
        <div className={styles.contactAvatar}>
          <img src={plug} alt="" />
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
