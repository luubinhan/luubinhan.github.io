import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import Fade from 'react-reveal/Fade';
import SEO from '../components/SEO';
import logoMobile from '../images/logo-mobile.svg';
import Call from '../components/Call';
import isInViewport from '../helpers/isInViewport';

const {
  Link,
  Element,
  Events,
  scroll,
  scrollSpy,
} = Scroll;

const SectionBlog = styled.div`  
`;

const SectionWork = styled.div`  
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
  padding-right: 20%;
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

class Home extends React.Component {
  state = {
    appearIn: false
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
    const { appearIn } = this.state;
    const testimonySection = document.querySelector('#testimonyId');
    window && window.addEventListener('scroll', event => {
      if (isInViewport(testimonySection) && appearIn === false ) {
        this.setState({ appearIn: true })
      }
    }, false);

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
    window && window.removeEventListener('scroll');
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  }

  render() {
    const { appearIn } = this.state;
    return (
      <div className="page-home">
        <SEO title="Home" />
        <Helmet>
          <meta
            name="description"
            content="coder, designer, photographer, website, wordpress, frontend"
          />
        </Helmet>
        <div className="header">
          <div className="container">
            <div className="logo">
              <Link
                activeClass="active"
                to="topSection"
                spy
                smooth
                duration={500}
              >
                <img height="50" alt="Luckyluu Homepage" src={logoMobile} />
                <span className="brand-name">
                  lucky
                  <span>luu</span>
                </span>
              </Link>
            </div>
            <div className="logo-mobile">
              <Link
                activeClass="active"
                to="topSection"
                spy
                smooth
                duration={500}
              >
                <img height="30" alt="Luckyluu Homepage" src={logoMobile} />
              </Link>
            </div>
            <div id="main-menu" className="main-menu">
              <ul>
                <li>
                  <Link
                    activeClass="active"
                    to="workSection"
                    spy
                    smooth
                    duration={500}
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="testimonySection"
                    spy
                    smooth
                    duration={500}
                  >
                    People Said
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="topSection"
                    spy
                    smooth
                    duration={500}
                  >
                    Contact Me
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="blogSection"
                    spy
                    smooth
                    duration={500}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Element name="topSection">
          <SectionTop>
            <div className="intro pb-4">
              <div className="container">
                <h1>A coder, a designer, a photographer, and a <i className="text-primary">movie goer</i></h1>
                <p>
                  I moved to the largest city in Vietnam, formerly named Saigon in 2007 and became a web tailor since 2011
                </p>
                <p>
                I currently work for Infinito Blockchains Labs, as a Frontend Developer.
                </p>
                <p>
                  Working on tons of projects, I believe that what makes a great website is a fascinating message, together with an immediate understanding, original content and easily traceable information.
                </p>
              </div>
            </div>
            <div className="container pt-2">
              <Call />
            </div>
          </SectionTop>
        </Element>
        <Element name="testimonySection">
          <SectionTestimony>
            <SectionTestimonyInner>
              <div id="testimonyId" className="container" style={{ position: 'relative' }}>
                <StyledBoxTitle>What other people think of me</StyledBoxTitle>
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-sm-7 col-md-7">
                      <Fade when={appearIn} right distance="50px">
                        <div className="testimonial transform">
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
                      </Fade>
                      <Fade when={appearIn} left distance="50px" delay={400}>
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
                      </Fade>
                      <Fade when={appearIn} right distance="50px" delay={400}>
                        <div className="testimonial transform">
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
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </SectionTestimonyInner>
          </SectionTestimony>
        </Element>
        <Element name="workSection">
          <SectionWork>
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
          </SectionWork>
        </Element>
        <Element name="blogSection">
          <SectionBlog>
            Blog
            <div className="container">
              <div>
                <a className="btn btn-primary btn-lg" href="https://luubinhan.github.io/blog/2017-10-03-thiet-ke-an-tuong-vs-thiet-ke-thuc-te-bai-hoc-thuc-te" target="_blank" rel="noopener noreferrer">
                  Thiết kế tuyệt đẹp vs. Thực tế: bài học từ Facebook
                  <span>
                    Bài viết dịch lại của một anh làm product design cho facebook đăng tải trên medium
                  </span>
                </a>
              </div>
              <div>
                <a className="btn btn-primary btn-lg" href="https://luubinhan.github.io/blog/2016-04-12-front-end-developer-2016-nen-hoc-gi" target="_blank" rel="noopener noreferrer">
                  FrontEnd Developer 2016 thì nên học cái gì?
                  <span>
                    Hey mình có dự án mới về web, không code web lâu quá rồi, không biết bây giờ viết web thì nên làm bằng gì? Mình chỉ là frontend developer, nhưng bạn đã tìm đúng người rồi đó, mình làm web cũng đã lâu, mình có thể chỉ bạn biết cần học gì để tạo web apps
                  </span>
                </a>
              </div>
              <div>
                <a className="btn btn-primary btn-lg" href="https://luubinhan.github.io/blog/2019-02-17-danh-gia-wordpress-va-static-site/" target="_blank" rel="noopener noreferrer">
                  Wordpress vs Static site
                  <span>
                    Chúng ta cùng nhau điểm qua cái hay, cái dở của từng thằng để nghiền ngẫm xem nó phù hợp trong trường hợp nào.
                  </span>
                </a>
              </div>
              <div>
                <a className="btn btn-primary btn-lg" href="https://luubinhan.github.io/blog/2017-10-20-react-lifecycle-la-gi/" target="_blank" rel="noopener noreferrer">
                  Giải thích React Component Lifecycle
                  <span>
                    Tìm hiểu vòng đời của một Component React, khi nào và sử dụng ra sao
                  </span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <a className="btn btn-primary btn-lg" href="https://luubinhan.github.io/blog/" target="_blank" rel="noopener noreferrer">
                Click to see more
              </a>
            </div>
          </SectionBlog>
        </Element>
      </div>
    );
  }
  // const markdown = props.data.allMarkdownRemark.edges;
  // const json = props.data.allFeaturesJson.edges;
}

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
