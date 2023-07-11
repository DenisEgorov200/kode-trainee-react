import React, { useRef } from 'react';
import { useDragging } from '@/hooks/useDragging.js';

import styles from './Modal.module.scss';

export const Modal = ({ active, setActive, className, children }) => {
  const dragLineRef = useRef(null);
  const sheetContentRef = useRef(null);

  useDragging(dragLineRef, sheetContentRef, setActive);

  return (
    <div className={active && styles.modal} onClick={() => setActive(false)}>
      <div
        ref={sheetContentRef}
        className={`${styles.modalContent} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <span ref={dragLineRef} className={styles.modalLine}></span>
        {children}
      </div>
    </div>
  );
};
