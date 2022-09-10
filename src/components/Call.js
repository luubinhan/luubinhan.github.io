import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Call = () => (
  <div className="call">
    <div className="call-box-top">
      <div className="call-box">
        <a className="label" href="skype:luu.binh.an?chat">Skype</a>
      </div>
      <div className="call-box">
        <a className="label" href="mailto:luubinhan1989@gmail.com">
          Email
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
