import React from 'react';
import styles from './StyledBoxTitle.module.scss';

const StyledBoxTitle = ({ children }) => {
  return (
    <div className={styles.styledBoxTitle}>
      {children}
    </div>
  );
};

export default StyledBoxTitle;
