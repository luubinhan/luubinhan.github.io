import styled from 'styled-components';

const StyledWorkItem = styled.div`
  grid-column: ${props => props.column} / span 4;
  margin-bottom: 8rem;
  position: relative;
  &:after {
    content: "";
    display: block;
    position: absolute;
    right: -30px;
    bottom: -10px;
    width: 60px;
    height: 60px;
    background-color: ${props => props.color};
  }
`;

export default StyledWorkItem;
