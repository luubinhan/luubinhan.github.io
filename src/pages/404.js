import React from 'react';
import Link from 'gatsby-link';
import Layout from '../layouts/index';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="fourzerofour">
          <div className="inner">
            <h1>404. Whoops!</h1>
            <p>Internet quá rộng lớn, đừng để lạc mất nhau!</p>
            <Link to="/" className="btn btn-light">
              <i className="ion-arrow-left-c" />
              Quay lại trang chủ
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;
