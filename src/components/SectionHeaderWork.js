import React from 'react';
import styles from './SectionHeaderWork.module.scss';

const SectionHeaderWork = ({ children }) => {
  return (
    <div className={styles.sectionHeaderWork}>
      {children}
    </div>
  );
};

export default SectionHeaderWork;
