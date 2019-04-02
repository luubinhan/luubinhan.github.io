import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';

const Section = styled.div`  
`;

const SectionTop = styled.div`
  padding-bottom: 100px;
`;

const SectionHeaderWork = styled.div`
  text-align: center;
  border-bottom: 1px solid #393b48;
  border-top: 1px solid #393b48;
  padding-top: 50px;
  padding-bottom: 50px;
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
`;

const SectionTestimonyInner = styled.div`
  background: #fbfaf9;
  color: #686868;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const SectionTestimony = styled.div`
  background: #202230;
  padding-right: 150px;
  position: relative;
  min-height: 100vh;
  &:after {
    content: "";
    display: block;
    width: 90px;
    height: 90px;
    background: #38adba;
    position: absolute;
    right: 30px;
    top: 30px;
  }
  &:before {
    content: "";
    display: block;
    width: 70px;
    height: 70px;
    background: #ccdf2b;
    position: absolute;
    right: 15%;
    bottom: 10%;
  }
`;

const StyledBoxTitle = styled.div`
  position: absolute;
  right: -10%;
  top: 0;
  width: 40%;
  padding: 100px;
  font-weight: 900;
  background: #e9f5f5;
  color: #202230;
  font-size: 5rem;
  text-align: left;
  line-height: 1;
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 10%;
    border: 1px solid #fff;
    right: 10%;
    bottom: 10%;
    top: 10%;
  }
`;

const Home = (props) => {
  // const markdown = props.data.allMarkdownRemark.edges;
  // const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="coder, designer, photographer, website, wordpress, frontend"
        />
      </Helmet>
      <SectionTop>
        <div className="intro pb-4">
          <div className="container">
            <h1>A coder, a designer, a photographer, and a <i className="text-primary">moviegoer</i></h1>
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
      </SectionTop>
      <SectionTestimony>
        <SectionTestimonyInner>
          <div className="container" style={{ position: 'relative' }}>
            <StyledBoxTitle>What other people think of me</StyledBoxTitle>
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-7 col-md-7">
                  <div className="testimonial">
                    <div
                      className="testimonials-content"
                    >
                      <blockquote>
                      Feel like he spread the positive energy to people around
                      </blockquote>
                    </div>
                    <div className="testimonials-meta">
                      <p className="testimonials-name">Tran Thao Khanh</p>
                      <p className="testimonials-jobtitle">Designer</p>
                    </div>
                  </div>
                  <div className="testimonial">
                    <div
                      className="testimonials-content"
                    >
                      <blockquote>
                        You're one of the best coworkers we have ever worked with
                      </blockquote>
                    </div>
                    <div className="testimonials-meta">
                      <p className="testimonials-name">Ngo Tu Quynh</p>
                      <p className="testimonials-jobtitle">HR</p>
                    </div>
                  </div>
                  <div className="testimonial">
                    <div
                      className="testimonials-content"
                    >
                      <blockquote>
                      You are the inspirer
                      </blockquote>
                    </div>
                    <div className="testimonials-meta">
                      <p className="testimonials-name">Tran Huy Minh</p>
                      <p className="testimonials-jobtitle">Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionTestimonyInner>
      </SectionTestimony>
      <Section>
        <div className="container">
          <SectionHeaderWork>
            <h1>Work</h1>
            Not perfect, but work
          </SectionHeaderWork>
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
