import React from 'react';
import styles from './SectionTop.module.scss';

const SectionTop = ({ children }) => {
  return (
    <div className={styles.sectionTop}>
      {children}
    </div>
  );
};

export default SectionTop;
