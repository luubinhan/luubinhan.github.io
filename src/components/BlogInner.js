import React from 'react';
import styles from './BlogInner.module.scss';

const BlogInner = ({ children }) => {
  return (
    <div className={styles.blogInner}>
      {children}
    </div>
  );
};

export default BlogInner;
