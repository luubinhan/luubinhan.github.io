import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Call = props => (
  <div className="call">
    <div className="call-box-top">
      {props.data.site.siteMetadata.contact.phone && (
        <div className="call-box">
          <span className="label">Phone: </span>
          <span>{props.data.site.siteMetadata.contact.phone}</span>
        </div>
      )}
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
        <a href={`mailto:${props.data.site.siteMetadata.contact.email}`}>
          {props.data.site.siteMetadata.contact.email}
        </a>
      </div>
    </div>
    {props.button && (
      <div className="call-box-bottom">
        <a href="/contact" className="button">
          Contact
        </a>
      </div>
    )}
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
