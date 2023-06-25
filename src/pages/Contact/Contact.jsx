import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CancelIcon } from 'assets/icon/CancelIcon.jsx';
import { PhoneIcon } from 'assets/icon/PhoneIcon.jsx';
import { FavoriteIcon } from 'assets/icon/FavoriteIcon.jsx';
import plug from 'assets/img/Plug.jpg';
import styles from './Contact.module.scss';

export const Contact = () => {
  const navigate = useNavigate();

  const onClickCancel = () => {
    navigate('/home');
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contactHeader}>
        <div className={styles.contactAvatar}>
          <img src={plug} alt="" />
        </div>
        <div className={styles.contactInfo}>
          <h3 className={styles.contactName}>Алиса Иванова</h3>
          <span className={styles.contactTag}>al</span>
        </div>
        <span className={styles.contactPosition}>Designer</span>
        <CancelIcon className={styles.contactCancel} onClick={onClickCancel} />
      </div>
      <div className={styles.contactBody}>
        <div className={`container ${styles.contactContainer}`}>
          <div className={styles.contactRow}>
            <div className={styles.contactYearBirth}>
              <FavoriteIcon className={styles.contactIcon} />
              <span>5 июня 1996</span>
            </div>
            <span className={styles.contactYear}>24 года</span>
          </div>
          <div className={styles.contactRow}>
            <div className={styles.contactTel}>
              <PhoneIcon className={styles.contactIcon} />
              <a href="#">+7 (999) 900 90 90</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
