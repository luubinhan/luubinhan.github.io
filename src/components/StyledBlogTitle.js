import React from 'react';
import styles from './StyledBlogTitle.module.scss';

const StyledBlogTitle = ({ children }) => {
  return (
    <h2 className={styles.styledBlogTitle}>
      {children}
    </h2>
  );
};

export default StyledBlogTitle;
