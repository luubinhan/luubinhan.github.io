import React from 'react';
import styles from './SectionTestimonyInner.module.scss';

const SectionTestimonyInner = ({ children }) => {
  return (
    <div className={styles.sectionTestimonyInner}>
      {children}
    </div>
  );
};

export default SectionTestimonyInner;
