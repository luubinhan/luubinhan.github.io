import styled from 'styled-components';

const SectionCourse = styled.div`
  position: relative;
  &:after {
    content: "";
    height: 28rem;
    left: 6.25vw;
    position: absolute;
    top: 16rem;
    width: 18.75vw;
    display: block;
    background: url("/dot.svg") center top / contain repeat-y;
  }
  &:before {
    content: "";
    height: 16rem;
    left: 14.275vw;
    position: absolute;
    top: 0px;
    width: 2px;
    background: rgb(136, 136, 136);
  }
`;

export default SectionCourse;
