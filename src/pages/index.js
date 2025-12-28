import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import StyledBoxTitle from '../components/styled/StyledBoxTitle';
import StyledWorkGroup from '../components/styled/StyledWorkGroup';
import WorkItem from '../components/WorkItem';
import StyledBlogTitle from '../components/styled/StyledBlogTitle';
import SectionBlog from '../components/SectionBlog';
import SectionWork from '../components/styled/SectionWork';
import SectionHeaderWork from '../components/styled/SectionHeaderWork';
import SectionTestimony from '../components/styled/SectionTestimony';
import SectionTop from '../components/styled/SectionTop';
import SectionCourse from '../components/styled/SectionCourse';
import Footer from '../components/Footer';
import logoMobile from '../images/logo-mobile.svg';
import Call from '../components/Call';
import isInViewport from '../helpers/isInViewport';
import Hello from '../components/Hello';
import CourseMfe from '../sections/course-mfe';
import AnimatedDiv from '../components/AnimatedDiv';
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
    window && window.addEventListener('scroll', () => {
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
        <Helmet>
          <title>Luu Binh An - Senior Frontend Developer & Educator</title>
          <link rel="icon" type="image/png" href="/favicon.png" />
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
                    to="khoa-hoc-html-css-can-ban"
                    spy
                    smooth
                    duration={500}
                  >
                    Khóa học HTML/CSS
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="workSection"
                    spy
                    smooth
                    duration={500}
                  >
                    Sản phẩm đã thực hiện
                  </Link>
                </li>
                <li style={{ display: 'none' }}>
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
                    to="blogSection"
                    spy
                    smooth
                    duration={500}
                  >
                    Blog
                  </Link>
                </li>
                <li className="contact-nav">
                  <Link
                    activeClass="active"
                    to="topSection"
                    spy
                    smooth
                    duration={500}
                  >
                    LIÊN HỆ
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
                <Hello />

                <div className="badges-container mb-4">
                  <a href="https://www.credly.com/earner/earned/badge/eb0702a5-4877-4680-9d42-71c8e10e72db" rel="noopener noreferrer" target="_blank">
                    <img width="80" src="https://images.credly.com/size/110x110/images/a2790314-008a-4c3d-9553-f5e84eb359ba/image.png" alt="PSM I Certificate" />
                  </a>
                  <a href="https://www.credly.com/earner/earned/badge/b287be6b-c644-4495-a9ea-b9f3cc81d24a" rel="noopener noreferrer" target="_blank">
                    <img width="80" src="https://images.credly.com/size/110x110/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" alt="AWS Cloud Practitioner Certificate" />
                  </a>
                  <a href="https://www.credly.com/earner/earned/badge/eb01016a-24ab-4338-b596-014ba079ed0f" rel="noopener noreferrer" target="_blank">
                    <img width="80" src="https://images.credly.com/size/110x110/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png" alt="AWS Developer Associate Certificate" />
                  </a>
                  <a href="https://www.credly.com/earner/earned/badge/abfe16df-64bf-4b22-af5d-2f45f2400e2f" rel="noopener noreferrer" target="_blank">
                    <img width="80" src="https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" alt="AWS Solution Architecture Associate Certificate" />
                  </a>
                  <a href="https://www.credly.com/badges/10914a05-6c15-425c-a114-bd7d48b330e9/" rel="noopener noreferrer" target="_blank">
                    <img width="80" src="https://images.credly.com/size/340x340/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png" alt="AWS Solution Architecture Professional Certificate" />
                  </a>
                  <a href="https://www.credly.com/earner/earned/badge/81dc6413-a2e0-4e49-8d45-6c140fca6386" rel="noopener noreferrer" target="_blank">
                    <img width="80" src="https://images.credly.com/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png" alt="AWS Certified AI Practitioner" />
                  </a>
                </div>
                <p>
                  Ngắn gọn về mình:
                </p>
                <ol>
                  <li>
                    <strong>Tận tâm:</strong>
                    {' '}
                    với khách hàng, công việc
                  </li>
                  <li>
                    <strong>Tận tình:</strong>
                    {' '}
                    với bạn bè, đồng nghiệp, hàng xóm
                  </li>
                  <li>
                    <strong>Tận tụy:</strong>
                    {' '}
                    trong học tập và nghiên cứu
                  </li>
                </ol>
                <Call />

              </div>
            </div>
            <div className="hero-figure anime-element">
              <AnimatedDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="my-image">
                  <img
                    src="/images/my-image.avif"
                    alt="coder, designer, photographer, website, wordpress, frontend"
                  />
                </div>
              </AnimatedDiv>
              <AnimatedDiv
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div
                  className="hero-figure-box hero-figure-box-01"
                  data-rotation="45deg"
                />
              </AnimatedDiv>
              <AnimatedDiv
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div
                  className="hero-figure-box hero-figure-box-02"
                  data-rotation="-45deg"
                />
              </AnimatedDiv>
              <div
                className="hero-figure-box hero-figure-box-03"
                data-rotation="0deg"
              />
              <div
                className="hero-figure-box hero-figure-box-04"
                data-rotation="-135deg"
              />
              <AnimatedDiv
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="hero-figure-box hero-figure-box-05" />
              </AnimatedDiv>
              <AnimatedDiv
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="hero-figure-box hero-figure-box-06" />
              </AnimatedDiv>
              <div className="hero-figure-box hero-figure-box-07" />
            </div>
          </SectionTop>
        </Element>
        <Element name="khoa-hoc-html-css-can-ban">
          <div className="container">
            <SectionCourse>
              <div
                className="hero-figure-box hero-figure-box-01"
                data-rotation="45deg"
              />
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <AnimatedDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <a href="https://www.udemy.com/course/html-css-can-ban-danh-cho-nguoi-moi-bat-au-lap-trinh-web/">
                      <img
                        src="/images/cover-khoa-hoc-html-css-can-ban-cho-nguoi-moi.avif"
                        title="Cover khóa học html css căn bản cho người mới bắt đầu"
                        alt="Cover khóa học html css căn bản cho người mới bắt đầu"
                      />
                    </a>
                  </AnimatedDiv>
                </div>
                <div className="col-12 col-lg-6">
                  <SectionHeaderWork>
                    <h2 className="display-3">Khóa học HTML/CSS</h2>
                    <p className="lead">
                      Căn bản dành cho người mới bắt đầu học frontend do mình thực hiện, sẽ giúp các bạn có
                    </p>
                    <div>
                      <ul>
                        <li>Đủ <strong>tự tin</strong> để làm việc với html css</li>
                        <li>Đủ <strong>nền tảng</strong> để bạn tiếp tục học tiếp những kiến thức cao hơn của frontend</li>
                        <li>Đủ <strong>thực hành</strong> để bạn thấy được giá trị của lý thuyết và khái niệm</li>
                      </ul>
                    </div>
                    <a className="button btn-primary btn-lg" href="https://www.udemy.com/course/html-css-can-ban-danh-cho-nguoi-moi-bat-au-lap-trinh-web/">
                      Vào xem ngay
                    </a>
                  </SectionHeaderWork>
                </div>
              </div>
            </SectionCourse>
          </div>
        </Element>
        <CourseMfe />
        <Element name="testimonySection">
          <SectionTestimony style={{ display: 'none' }}>
            <SectionTestimonyInner>
              <div
                id="testimonyId"
                className="container"
                style={{ position: 'relative' }}
              >
                <StyledBoxTitle>What other people think of me</StyledBoxTitle>
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-sm-7 col-md-7">
                      <AnimatedDiv
                        initial={{ opacity: 0, x: 50 }}
                        animate={appearIn ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="testimonial transform">
                          <div className="testimonials-content">
                            <blockquote>
                              Feel like he spread the positive energy to people
                              around
                            </blockquote>
                          </div>
                          <div className="testimonials-meta">
                            <p className="testimonials-name">Tran Thao Khanh</p>
                            <p className="testimonials-jobtitle">Designer</p>
                          </div>
                        </div>
                      </AnimatedDiv>
                      <AnimatedDiv
                        initial={{ opacity: 0, x: -50 }}
                        animate={appearIn ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <div className="testimonial">
                          <div className="testimonials-content">
                            <blockquote>
                              You're one of the best coworkers we have ever
                              worked with
                            </blockquote>
                          </div>
                          <div className="testimonials-meta">
                            <p className="testimonials-name">Ngo Tu Quynh</p>
                            <p className="testimonials-jobtitle">HR</p>
                          </div>
                        </div>
                      </AnimatedDiv>
                      <AnimatedDiv
                        initial={{ opacity: 0, x: 50 }}
                        animate={appearIn ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <div className="testimonial transform">
                          <div className="testimonials-content">
                            <blockquote>You are the inspirer</blockquote>
                          </div>
                          <div className="testimonials-meta">
                            <p className="testimonials-name">Dang Huy Minh</p>
                            <p className="testimonials-jobtitle">Developer</p>
                          </div>
                        </div>
                      </AnimatedDiv>
                      <AnimatedDiv
                        initial={{ opacity: 0, x: -50 }}
                        animate={appearIn ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <div className="testimonial transform">
                          <div className="testimonials-content">
                            <blockquote>The best newcomer</blockquote>
                          </div>
                          <div className="testimonials-meta">
                            <p className="testimonials-name">Vo Tan Phong</p>
                            <p className="testimonials-jobtitle">Team Leader</p>
                          </div>
                        </div>
                      </AnimatedDiv>
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
                    <h2 className="display-3">Sản phẩm đã thực hiện</h2>
                    <p className="lead">
                      Website, landing page đã thiết kế, hoàn thiện
                    </p>
                  </SectionHeaderWork>
                </div>
              </div>
            </div>
            <StyledWorkGroup>
              <WorkItem column={2} color="#C9DC08">
                <AnimatedDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div>
                    <div>
                      <img
                        src="/images/screen-shot-website-platformio.avif"
                        title="Screenshot website Infinito Blockchains Platform"
                        alt="Screenshot website Infinito Blockchains Platform"
                      />
                    </div>
                    <a
                      href="https://platform.infinito.io/"
                      className="title"
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="Website Infinito Blockchains Platform"
                    >
                      Infinito Blockchains Platform
                    </a>
                  </div>
                </AnimatedDiv>
              </WorkItem>
              <WorkItem column={7} color="#00A5B4">
                <AnimatedDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div>
                    <div>
                      <img
                        src="/images/brochure-wifi-3.avif"
                        title="Brochure wifi marketing 3.0"
                        alt="Brochure wifi marketing 3.0"
                      />
                    </div>
                    <span className="title">Brochure wifi marketing 3.0</span>
                  </div>
                </AnimatedDiv>
              </WorkItem>
              <WorkItem column={12} color="#C9DC08">
                <AnimatedDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div>
                    <div>
                      <img
                        src="/images/screen-shot-ngoc-ha-jade-river.avif"
                        title="Screenshot Website doanh nghiệp Ngoc Ha Jade River"
                        alt="Screenshot Website doanh nghiệp Ngoc Ha Jade River"
                      />
                    </div>
                    <a
                      href="http://ngochajaderiver.com/"
                      className="title"
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="Website Ngoc Ha Jade River"
                    >
                      Website Ngoc Ha Jade River
                    </a>
                  </div>
                </AnimatedDiv>
              </WorkItem>
              <WorkItem column={1} color="#00A5B4">
                <AnimatedDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div>
                    <div>
                      <img
                        src="/images/bachkhoa.avif"
                        title="Brochure công ty TNHH giải pháp tin học Bách Khoa"
                        alt="Brochure công ty TNHH giải pháp tin học Bách Khoa"
                      />
                    </div>
                    <span
                      className="title"
                      aria-label="Brochure công ty TNHH giải pháp tin học Bách Khoa"
                    >
                      Brochure công ty Bách Khoa
                    </span>
                  </div>
                </AnimatedDiv>
              </WorkItem>
              <WorkItem column={6} color="#C9DC08">
                <AnimatedDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div>
                    <div>
                      <img
                        src="/images/bellow-photobooth.avif"
                        title="Screenshot website doanh nghiệp bellow photobooth"
                        alt="Screenshot website doanh nghiệp bellow photobooth"
                      />
                    </div>
                    Website Bellow Photobooth
                  </div>
                </AnimatedDiv>
              </WorkItem>
              <WorkItem column={11} color="#00A5B4">
                <AnimatedDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div>
                    <div>
                      <img
                        src="/images/chat.avif"
                        title="Screenshot website Chất Production"
                        alt="Screenshot website Chất Production"
                      />
                    </div>
                    <span
                      className="title"
                      aria-label="Website Chất Production"
                    >
                      Website Chất Production
                    </span>
                  </div>
                </AnimatedDiv>
              </WorkItem>
              <WorkItem column={2} color="#C9DC08">
                <AnimatedDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div>
                    <div>
                      <img
                        src="/images/drill-inc.avif"
                        title="Screenshot website doanh nghiệp drill-inc"
                        alt="Screenshot website doanh nghiệp drill-inc"
                      />
                    </div>
                    Website Bellow Drill-inc
                  </div>
                </AnimatedDiv>
              </WorkItem>
              <WorkItem column={7} color="#00A5B4">
                <AnimatedDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div>
                    <div>
                      <img
                        src="/images/tipit-screenshot.avif"
                        title="Screenshot website doanh nghiệp Tipit"
                        alt="Screenshot website doanh nghiệp Tipit"
                      />
                    </div>
                    Website Tipit.vn
                  </div>
                </AnimatedDiv>
              </WorkItem>
              <WorkItem column={12} color="#C9DC08">
                <AnimatedDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div>
                    <div>
                      <img
                        src="/images/tuonglai-foods.avif"
                        title="Screenshot Website doanh nghiệp Tương Lai foods"
                        alt="Screenshot Website doanh nghiệp Tương Lai foods"
                      />
                    </div>
                    Website Tương Lai foods
                  </div>
                </AnimatedDiv>
              </WorkItem>
            </StyledWorkGroup>
          </SectionWork>
        </Element>
        <Element name="blogSection">
          <SectionBlog>
            <StyledBlogTitle>Blog</StyledBlogTitle>
            <BlogInner>
              <p className="lead">
                Góc chia sẽ kiến thức lập trình web đến với các lập trình viên
                Việt Nam, cập nhập xu hướng, kinh nghiệm và các thủ thuật trong
                lập trình web
              </p>
              <div className="container">
                <div className="media">
                  <div className="media-body">
                    <h3>
                      <a
                        href="https://luubinhan.github.io/blog/2017-10-03-thiet-ke-an-tuong-vs-thiet-ke-thuc-te-bai-hoc-thuc-te"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Thiết kế tuyệt đẹp vs. Thực tế: bài học từ Facebook
                      </a>
                    </h3>
                    <p>
                      Bài viết dịch lại của một anh làm product design cho
                      facebook đăng tải trên medium
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-body">
                    <h3>
                      <a
                        href="https://luubinhan.github.io/blog/2019-02-17-danh-gia-wordpress-va-static-site/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wordpress vs Static site
                      </a>
                    </h3>
                    <p>
                      Chúng ta cùng nhau điểm qua cái hay, cái dở của từng thằng
                      để nghiền ngẫm xem nó phù hợp trong trường hợp nào.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-body">
                    <h3>
                      <a
                        href="https://luubinhan.github.io/blog/2017-10-20-react-lifecycle-la-gi/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Giải thích React Component Lifecycle
                      </a>
                    </h3>
                    <p>
                      Tìm hiểu vòng đời của một Component React, khi nào và sử
                      dụng ra sao
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-body">
                    <h3>
                      <a
                        href="https://luubinhan.github.io/blog/2016-04-12-front-end-developer-2016-nen-hoc-gi"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        FrontEnd Developer 2016 thì nên học cái gì?
                      </a>
                    </h3>
                    <p>
                      Hey mình có dự án mới về web, không code web lâu quá rồi,
                      không biết bây giờ viết web thì nên làm bằng gì? Mình chỉ
                      là frontend developer, nhưng bạn đã tìm đúng người rồi đó,
                      mình làm web cũng đã lâu, mình có thể chỉ bạn biết cần học
                      gì để tạo web apps
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a
                  className="button btn-primary btn-lg"
                  href="https://luubinhan.github.io/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Xem tiếp
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
