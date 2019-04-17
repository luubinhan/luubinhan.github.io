import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Call = props => (
  <div className="call">
    <div className="call-box-top">
      <div className="call-box">
        <span className="label">Skype: </span>
        <a href="skype:luu.binh.an?chat">luu.binh.an</a>
      </div>
      <div className="call-box">
        <span className="label">Zalo: </span>
        <span>luubinhan</span>
      </div>
      <div className="call-box">
        <span className="label">Email: </span>
        <a href="mailto:luubinhan1989@gmail.com">
        luubinhan1989@gmail.com
        </a>
      </div>
    </div>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <Call button={props.button} data={data} />}
  />
);
