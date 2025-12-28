import React from 'react';
import { StaticQuery } from 'gatsby';

const SubFooter = () => (
  <div className="sub-footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="sub-footer" />
        </div>
      </div>
    </div>
  </div>
);

export default () => (
  <StaticQuery
    render={() => <SubFooter />}
  />
);
