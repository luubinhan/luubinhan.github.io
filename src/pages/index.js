import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';

const Section = styled.div`  
`;

const Home = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="coder, designer, photographer, website, wordpress, frontend"
        />
      </Helmet>
      <Section>
        <div className="intro pb-4">
          <div className="container">
            <h1>A coder, a designer, a photographer, and a <i className="text-primary">music lover</i></h1>
            <p>
              I moved to the largest city in Vietnam, formerly named saigon in 2007 and became a web tailor since 2011
            </p>
            <p>
              Working on tons of projects, I believe that what makes a great website is fascinating message, together with an immediate understanding, original content and easily traceable information.
            </p>
          </div>
        </div>
        <div className="container pt-2">
          <Call />
        </div>
      </Section>
      <Section>
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>What other people think of me</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-6">
          <div className="row">
            <div className="col-12 col-md-6 mb-1">
              <div className="testimonial">
                <div className="testimonials-meta">
                  <p className="testimonials-name">Trần Thảo Khánh</p>
                  <p className="testimonials-jobtitle">Designer</p>
                </div>
                <div
                  className="testimonials-content"
                >
                Feel like he spread the positive energy to people around
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-1">
              <div className="testimonial">
                <div className="testimonials-meta">
                  <p className="testimonials-name">Ngô Tú Quỳnh</p>
                  <p className="testimonials-jobtitle">HR</p>
                </div>
                <div
                  className="testimonials-content"
                >
                You're one of the best coworkers we have ever worked with
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Work</h1>
                Not perfect, but work
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-6">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 mb-1">
              <div>
                <img src="/images/bachkhoa.jpg" alt="Brochure công ty TNHH giải pháp tin học Bách Khoa" />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 mb-1">
              <div>
                <img src="/images/bellow-photobooth.jpg" alt="Screenshot website doanh nghiệp bellow photobooth" />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 mb-1">
              <div>
                <img src="/images/chat.jpg" alt="Screenshot website Chất Production" />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 mb-1">
              <div>
                <img src="/images/drill-inc.jpg" alt="Screenshot website doanh nghiệp drill-inc"/>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 mb-1">
              <div>
                <img src="/images/tipit-screenshot.jpg" alt="Screenshot website doanh nghiệp Tipit"/>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 mb-1">
              <div>
                <img src="/images/tuonglai-foods.jpg" alt="Screenshot Website doanh nghiệp tương lương foods"/>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;
