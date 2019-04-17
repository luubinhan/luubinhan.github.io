import styled from 'styled-components';

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

export default SectionTestimony;
