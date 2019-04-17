import styled from 'styled-components';

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

export default StyledBoxTitle;
