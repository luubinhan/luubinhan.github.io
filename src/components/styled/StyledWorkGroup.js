import styled from 'styled-components';

const StyledWorkGroup = styled.div`
  background-color: transparent;
  color: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  position: relative;
  -webkit-box-align: start;
  align-items: start;
  padding: 0 0 4rem;
  @media (min-width: 768px) {
    padding: 16rem 0px 8rem;
  }
`;

export default StyledWorkGroup;
