import styled from 'styled-components';

const SectionTestimony = styled.div`
  background: #202230;
  padding-right: 20%;
  position: relative;
  min-height: 100vh;
  @media (max-width: 991px) {
    min-height: 0;
  }
  &:after {
    content: "";
    display: block;
    width: 60px;
    height: 60px;
    background: #38adba;
    position: absolute;
    right: 10px;
    top: 10px;
    @media (min-width: 768px) {
      width: 90px;
      height: 90px;
      right: 30px;
      top: 30px;
    }
  }
  &:before {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    background: #ccdf2b;
    position: absolute;
    right: 20%;
    bottom: 0%;
    @media (min-width: 768px) {
      width: 70px;
      height: 70px;
      right: 15%;
      bottom: 10%;
    }
  }
`;

export default SectionTestimony;
