import styled from 'styled-components';

const StyledBlogTitle = styled.h2`
  color: #fbfaf9;
  font-weight: 900;
  position: absolute;
  font-size: 3rem;
  top: -3rem;
  left: 40px;
  @media (min-width: 576px) {

  }
  @media (min-width: 768px) {
    font-size: 5rem;
    top: -4.5rem;
    left: 20%;
  }
  @media (min-width: 992px) {
    font-size: 7rem;
    top: -6.5rem;
    left: 35%;
  }
`;

export default StyledBlogTitle;
