import React from 'react';
import { Link } from 'gatsby';
import styles from './404.module.scss';

const NotFoundPage = () => (
  <section className={styles.section404}>
    <div className={styles.content}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Không Tìm Thấy Trang</h2>
      <p className={styles.description}>
        Rất tiếc! Trang bạn đang tìm kiếm không tồn tại. Có thể đã bị di chuyển hoặc xóa.
      </p>
      <Link to="/" className={styles.homeButton}>Về Trang Chủ</Link>
    </div>
  </section>
);

export default NotFoundPage;