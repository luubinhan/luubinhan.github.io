import React from 'react';
import styles from './SectionBlog.module.scss';

const SectionBlog = ({ children }) => {
  return (
    <section className={styles.sectionBlog}>
      {children}
    </section>
  );
};

export default SectionBlog;
