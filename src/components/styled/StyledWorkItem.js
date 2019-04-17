import styled from 'styled-components';

const StyledWorkItem = styled.div`
  grid-column: ${props => props.column} / span 4;
  margin-bottom: 2rem;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 8rem;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    right: -10px;
    bottom: -10px;
    width: 30px;
    height: 30px;
    background-color: ${props => props.color};
    @media (min-width: 768px) {
      right: -30px;
      bottom: -10px;
      width: 60px;
      height: 60px;
    }
  }
`;

export default StyledWorkItem;
