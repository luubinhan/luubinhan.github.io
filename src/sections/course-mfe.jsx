
import React from 'react';
import Scroll from 'react-scroll';
import SectionCourse from '../components/SectionCourse';
import SectionHeaderWork from '../components/SectionHeaderWork';

const { Element } = Scroll;

function CourseMfe() {
  return (
  <Element name="micro-frontend-for-react-developer">
    <div className="container">
      <SectionCourse>
        <div className="hero-figure-box hero-figure-box-01" data-rotation="45deg" />
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <SectionHeaderWork>
              <h2 className="display-3" style={{ lineHeight: 1 }}>
                Microfrontend
              </h2>
              <div style={{ fontSize: 25, lineHeight: 1, paddingBottom: 36 }}>
                Dành cho React Developer
              </div>
              <p className="lead">
                Khóa học này sẽ trang bị cho bạn kiến thức và kỹ năng cần thiết để sử dụng kiến trúc
                Microfrontend trong việc phát triển các ứng dụng web hiện đại, đặc biệt là trong bối
                cảnh có nhiều đội ngũ (team) cùng tham gia phát triển một dự án lớn
              </p>
              <div>
                <ul>
                  <li>
                    Sử dụng kiến trúc Microfrontend để phát triển ứng dụng với sự tham gia của nhiều
                    team
                  </li>
                  <li>Hiểu cách chia một ứng dụng lớn thành nhiều ứng dụng nhỏ</li>
                  <li>
                    Kỹ thuật tích hợp các ứng dụng con (micro frontend) vào ứng dụng host
                    (container/shell)
                  </li>
                </ul>
              </div>
              <a
                className="button btn-primary btn-lg"
                href="https://www.udemy.com/course/microfrontend-danh-cho-react-developer/"
              >
                Vào xem ngay
              </a>
            </SectionHeaderWork>
          </div>
          <div className="col-12 col-md-6">
            <a href="https://www.udemy.com/course/microfrontend-danh-cho-react-developer/">
              <img
                src="/images/banner-khoa-hoc-micro-frontend-cho-react-developer.jpg"
                title="Cover Microfrontend dành cho React Developer"
                alt="Cover Microfrontend dành cho React Developer"
              />
            </a>
          </div>
        </div>
      </SectionCourse>
    </div>
  </Element>
  );
}

export default CourseMfe;
