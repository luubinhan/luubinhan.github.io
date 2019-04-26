import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import SEO from '../components/SEO';
import StyledBoxTitle from '../components/styled/StyledBoxTitle';
import StyledWorkGroup from '../components/styled/StyledWorkGroup';
import StyledWorkItem from '../components/styled/StyledWorkItem';
import StyledBlogTitle from '../components/styled/StyledBlogTitle';
import SectionBlog from '../components/styled/SectionBlog';
import SectionWork from '../components/styled/SectionWork';
import SectionHeaderWork from '../components/styled/SectionHeaderWork';
import SectionTestimony from '../components/styled/SectionTestimony';
import SectionTop from '../components/styled/SectionTop';
import Footer from '../components/Footer';
import logoMobile from '../images/logo-mobile.svg';
import Call from '../components/Call';
import isInViewport from '../helpers/isInViewport';
import '../scss/style.scss';

const {
  Link,
  Element,
  Events,
  scroll,
  scrollSpy,
} = Scroll;

const BlogInner = styled.div`
  grid-row: 1 / auto;
  grid-column: 7 / span 8;
  @media (max-width: 575px) {
    grid-column: 4 / span 12;
  }
`;


const Circle = styled.div`
  content: "";
  height: 9.375vw;
  left: 9.6vw;
  position: absolute;
  top: calc(16rem - 2vw);
  width: 9.375vw;
  background: url("/circle.svg") center top / contain no-repeat rgb(32, 34, 48);
`;

const SectionTestimonyInner = styled.div`
  background: #fbfaf9;
  color: #686868;
  padding-top: 100px;
  padding-bottom: 100px;
  @media (max-width: 767px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

class Home extends React.Component {
  state = {
    appearIn: false,
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });
    const { appearIn } = this.state;
    const testimonySection = document.querySelector('#testimonyId');
    window && window.addEventListener('scroll', (event) => {
      if (isInViewport(testimonySection) && appearIn === false) {
        this.setState({ appearIn: true });
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
                <h1>
                  A coder,
                  {' '}
                  <span className="d-block d-sm-block d-md-none" />
                  {' '}
                  a designer,
                  <span className="d-block d-sm-block d-md-none" />
                  {' '}
                  a photographer,
                  <span className="d-block d-sm-block d-md-none" />
                  {' '}
                  <span style={{ fontWeight: 100 }}>and</span>
                  <span className="d-block d-sm-block d-md-none" />
                  {' '}
                  <i className="text-primary">a movie goer</i>
                </h1>
                <p>
                  I moved to the largest city in Vietnam formerly named Saigon in 2007, became a web tailor since 2011
                </p>
                <p>
                  I currently work at Infinito Blockchains Labs as a Frontend Developer.
                </p>
                <p>
                  Working on tons of projects, I believe that what makes a great website is a fascinating message, together with an immediate understanding, original content and easily traceable information.
                </p>
                <Call />
              </div>
            </div>
            <div className="hero-figure anime-element">
							<svg className="placeholder" width="528" height="396" viewBox="0 0 528 396">
								<rect width="528" height="396" style={{fill: 'transparent'}}></rect>
							</svg>
              <Reveal effect="fadeInUp">
							  <div className="hero-figure-box hero-figure-box-01" data-rotation="45deg"></div>              
              </Reveal>
              <Reveal effect="animateBox2">
							  <div className="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
              </Reveal>
							<div className="hero-figure-box hero-figure-box-03" data-rotation="0deg"></div>
							<div className="hero-figure-box hero-figure-box-04" data-rotation="-135deg" ></div>
              <Reveal effect="animateBox5">
							  <div className="hero-figure-box hero-figure-box-05"></div>
              </Reveal>
              <Reveal effect="animateBox2">
							  <div className="hero-figure-box hero-figure-box-06" ></div>
              </Reveal>
							<div className="hero-figure-box hero-figure-box-07" ></div>
							<div className="hero-figure-box hero-figure-box-08" data-rotation="-22deg" ></div>
							<div className="hero-figure-box hero-figure-box-09" data-rotation="-52deg" ></div>
							<div className="hero-figure-box hero-figure-box-10" data-rotation="-50deg" ></div>
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
                            <p className="testimonials-name">Dang Huy Minh</p>
                            <p className="testimonials-jobtitle">Developer</p>
                          </div>
                        </div>
                      </Fade>
                      <Fade when={appearIn} left distance="50px" delay={400}>
                        <div className="testimonial transform">
                          <div
                            className="testimonials-content"
                          >
                            <blockquote>
                            The best newcomer
                            </blockquote>
                          </div>
                          <div className="testimonials-meta">
                            <p className="testimonials-name">Vo Tan Phong</p>
                            <p className="testimonials-jobtitle">Team Leader</p>
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
            <Circle />
            <div className="container">
              <div className="row">
                <div className="col-8 col-sm-6 col-md-6 offset-2 offset-sm-4 offset-md-3">
                  <SectionHeaderWork>
                    <h2 className="display-3">Work</h2>
                    <p className="lead">
                      Not perfect, but work
                    </p>
                  </SectionHeaderWork>
                </div>
              </div>
            </div>
            <StyledWorkGroup>
              <StyledWorkItem column={6} color="#C9DC08">
                <div>
                  <img src="/images/bellow-photobooth.jpg" alt="Screenshot website doanh nghiệp bellow photobooth" />
                </div>
                <a href="https://platform.infinito.io/" className="title" rel="noopener noreferrer" target="_blank" aria-label="Website Infinito Blockchains Platform">Infinito Blockchains Platform</a>
              </StyledWorkItem>
              <StyledWorkItem column={1} color="#00A5B4">
                <div>
                  <img src="/images/bachkhoa.jpg" alt="Brochure công ty TNHH giải pháp tin học Bách Khoa" />
                </div>
                <span className="title" aria-label="Brochure công ty TNHH giải pháp tin học Bách Khoa">Brochure công ty Bách Khoa</span>
              </StyledWorkItem>
              <StyledWorkItem column={6} color="#C9DC08">
                <div>
                  <img src="/images/bellow-photobooth.jpg" alt="Screenshot website doanh nghiệp bellow photobooth" />
                </div>
                <a href="http://bellowphotobooth.com/vi/" className="title" rel="noopener noreferrer" target="_blank" aria-label="Website Bellow Photobooth">Website Bellow Photobooth</a>
              </StyledWorkItem>
              <StyledWorkItem column={11} color="#00A5B4">
                <div>
                  <img src="/images/chat.jpg" alt="Screenshot website Chất Production" />
                </div>
                <span className="title" aria-label="Website Chất Production">Website Chất Production</span>
              </StyledWorkItem>
              <StyledWorkItem column={2} color="#C9DC08">
                <div>
                  <img src="/images/drill-inc.jpg" alt="Screenshot website doanh nghiệp drill-inc"/>
                </div>
                <a href="http://www.drill-inc.jp/" className="title" rel="noopener noreferrer" target="_blank" aria-label="Website Bellow Drill-inc">Website Bellow Drill-inc</a>
              </StyledWorkItem>
              <StyledWorkItem column={7} color="#00A5B4">
                <div>
                  <img src="/images/tipit-screenshot.jpg" alt="Screenshot website doanh nghiệp Tipit"/>
                </div>
                <a href="https://tipit.vn/" rel="noopener noreferrer" target="_blank" className="title" aria-label="Website Tipit.vn">Website Tipit.vn</a>
              </StyledWorkItem>
              <StyledWorkItem column={12} color="#C9DC08">
                <div>
                  <img src="/images/tuonglai-foods.jpg" alt="Screenshot Website doanh nghiệp Tương Lai foods"/>
                </div>
                <a href="http://tuonglaifoods.vn" className="title" rel="noopener noreferrer" target="_blank" aria-label="Website Tương Lai foods">Website Tương Lai foods</a>
              </StyledWorkItem>
            </StyledWorkGroup>
          </SectionWork>
        </Element>
        <Element name="blogSection">
          <SectionBlog>
            <StyledBlogTitle>Blog</StyledBlogTitle>
            <BlogInner>
              <p className="lead">
                Since 2017, after 3 years working with WordPress, I feel out of date with lastest trend of web, to teach myself and others who have difficulty to keep update with modern web development, I start to write a blog, hopefully, it can bring knowledge to Vietnam student who has trouble looking for the resource in Vietnamese. And now it becomes a hobby for every weekend
              </p>
              <div className="container">
                <div className="media">
                  <div className="media-body">
                    <h5>
                      <a href="https://luubinhan.github.io/blog/2017-10-03-thiet-ke-an-tuong-vs-thiet-ke-thuc-te-bai-hoc-thuc-te" target="_blank" rel="noopener noreferrer">
                        Thiết kế tuyệt đẹp vs. Thực tế: bài học từ Facebook
                      </a>
                    </h5>
                    <p>
                      Bài viết dịch lại của một anh làm product design cho facebook đăng tải trên medium
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-body">
                    <h5>
                      <a href="https://luubinhan.github.io/blog/2019-02-17-danh-gia-wordpress-va-static-site/" target="_blank" rel="noopener noreferrer">
                        Wordpress vs Static site
                      </a>
                    </h5>
                    <p>
                      Chúng ta cùng nhau điểm qua cái hay, cái dở của từng thằng để nghiền ngẫm xem nó phù hợp trong trường hợp nào.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-body">
                    <h5>
                      <a href="https://luubinhan.github.io/blog/2017-10-20-react-lifecycle-la-gi/" target="_blank" rel="noopener noreferrer">
                        Giải thích React Component Lifecycle
                      </a>
                    </h5>
                    <p>
                      Tìm hiểu vòng đời của một Component React, khi nào và sử dụng ra sao
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-body">
                    <h5>
                      <a href="https://luubinhan.github.io/blog/2016-04-12-front-end-developer-2016-nen-hoc-gi" target="_blank" rel="noopener noreferrer">
                        FrontEnd Developer 2016 thì nên học cái gì?
                      </a>
                    </h5>
                    <p>
                      Hey mình có dự án mới về web, không code web lâu quá rồi, không biết bây giờ viết web thì nên làm bằng gì? Mình chỉ là frontend developer, nhưng bạn đã tìm đúng người rồi đó, mình làm web cũng đã lâu, mình có thể chỉ bạn biết cần học gì để tạo web apps
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a className="button btn-primary btn-lg" href="https://luubinhan.github.io/blog/" target="_blank" rel="noopener noreferrer">
                  Click to see more
                </a>
              </div>
            </BlogInner>
          </SectionBlog>
        </Element>
        <Footer />
      </div>
    );
  }
}

export default Home;
