import React from 'react';
import styles from './SectionTestimony.module.scss';

const SectionTestimony = ({ children, style }) => {
  return (
    <div className={styles.sectionTestimony} style={style}>
      {children}
    </div>
  );
};

export default SectionTestimony;
