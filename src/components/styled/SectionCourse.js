import styled from 'styled-components';

const SectionCourse = styled.div`
  position: relative;
  &:after {
    content: "";
    height: 28rem;
    right: 6.25vw;
    position: absolute;
    top: 6rem;
    width: 18.75vw;
    display: block;
    background: url("/dot.svg") center top / contain repeat-y;
  }
  &:before {
    content: "";
    height: 16rem;
    right: 20vw;
    position: absolute;
    top: -12rem;
    width: 2px;
    background: rgb(136, 136, 136);
  }

  .hero-figure-box-01 {
    left: -8rem;
  }
`;

export default SectionCourse;
