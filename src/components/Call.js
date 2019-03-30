import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Call = props => (
  <div className="call">
    <div className="call-box-top">
      {props.data.site.siteMetadata.contact.phone && (
        <div className="call-phone">
          <strong>Phone: </strong>
          {props.data.site.siteMetadata.contact.phone}
        </div>
      )}
      <div className="call-phone">
        <strong>Skype: </strong>
        {props.data.site.siteMetadata.contact.skype}
      </div>
      <div className="call-phone">
        <strong>Zalo: </strong>
        {props.data.site.siteMetadata.contact.zalo}
      </div>
      <div className="call-email">
        <strong>Email: </strong>
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
