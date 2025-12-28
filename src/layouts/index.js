import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({
  bodyClass,
  children
}) => (
  <React.Fragment>
    <div className={`page${bodyClass ? ` ${bodyClass}` : ''}`}>
      <div id="wrapper" className="wrapper">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  </React.Fragment>
);

export default Layout;
