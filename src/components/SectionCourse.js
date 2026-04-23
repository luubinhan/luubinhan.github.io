import React from 'react';
import styles from './SectionCourse.module.scss';

const SectionCourse = ({ children }) => {
  return (
    <div className={styles.sectionCourse}>
      {children}
    </div>
  );
};

export default SectionCourse;
