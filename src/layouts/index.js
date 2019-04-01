import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';
import MenuMobile from '../components/MenuMobile';
import '../scss/style.scss';

const Layout = ({
  bodyClass,
  children
}) => (
  <React.Fragment>
    <SEO />
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
