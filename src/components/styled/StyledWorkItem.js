import styled from 'styled-components';

const StyledWorkItem = styled.div`
  grid-column: auto / span 7;
  margin-bottom: 2rem;
  margin-left: 30px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 8rem;
    margin-left: 0;
    grid-column: ${props => props.$column} / span 4;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    right: -10px;
    bottom: -10px;
    width: 30px;
    height: 30px;
    background-color: ${props => props.$color};
    @media (min-width: 768px) {
      right: -30px;
      bottom: -10px;
      width: 60px;
      height: 60px;
    }
  }
  .title {
    color: #fff;
    display: block;
    padding-top: 20px;
    padding-right: 30px;
  }
`;

export default StyledWorkItem;
