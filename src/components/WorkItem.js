import React from 'react';
import styles from './WorkItem.module.scss';

const WorkItem = ({ column, color, children }) => {
  const columnClass = styles[`column${column}`] || '';
  const colorClass = color === '#C9DC08' ? styles.colorGreen : styles.colorBlue;
  
  return (
    <div className={`${styles.workItem || ''} ${columnClass} ${colorClass}`}>
      {children}
    </div>
  );
};

export default WorkItem;
