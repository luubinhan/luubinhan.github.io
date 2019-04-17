import styled from 'styled-components';

const StyledBoxTitle = styled.div`
  position: absolute;
  width: 40%;
  font-weight: 900;
  background: #e9f5f5;
  color: #202230;
  text-align: left;
  line-height: 1;
  font-size: 2rem;
  right: -10%;
  top: 0;
  padding: 30px;
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    font-size: 5rem;
    right: -10%;
    top: 0;
    padding: 100px;
  }
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

export default StyledBoxTitle;
