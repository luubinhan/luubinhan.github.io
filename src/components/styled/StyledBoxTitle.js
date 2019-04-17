import styled from 'styled-components';

const StyledBoxTitle = styled.div`
  font-weight: 900;
  background: #e9f5f5;
  color: #202230;
  text-align: left;
  line-height: 1;
  font-size: 1.4rem;  
  padding: 20px;
  position: relative;
  margin-bottom: 20px;
  @media (min-width: 576px) {
    margin-bottom: 0;
    font-size: 2rem; 
    position: absolute;
    width: 40%;
    right: -10%;
    top: 0;
    padding: 30px;
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
    border: 1px solid #fff;    
    left: -10%;
    right: 10%;
    bottom: 10%;
    top: 10%;
    @media (min-width: 576px) {
      left: 10%;
      right: 10%;
      bottom: 10%;
      top: 10%;
    }
  }
`;

export default StyledBoxTitle;
