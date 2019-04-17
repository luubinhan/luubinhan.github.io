import styled from 'styled-components';

const SectionBlog = styled.div`
  margin-top: 3rem;
  position: relative;
  background: linear-gradient(to left, rgb(251, 250, 249) 75%, transparent 75%);
  padding: 8rem 0px; 
  -webkit-box-align: center;
  align-items: center;
  display: grid;
  color: #313131;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  @media (max-width: 575px) {
    background: linear-gradient(to left, rgb(251, 250, 249) 90%, transparent 90%);
    padding: 3rem 0;
  }
  &:after {
    bottom: 1rem;
    content: "";
    height: 3rem;
    left: 1rem;
    position: absolute;
    width: 3rem;
    background: #38adba;
    display: block;
    @media (max-width: 575px) {
      height: 2rem;
      width: 2rem;
    }
  }
  &:before {
    content: "";
    display: block;
    height: 5rem;
    right: 1rem;
    position: absolute;
    width: 5rem;
    top: -3rem;
    background: #ccdf2b;
    @media (max-width: 767px) {
      width: 4rem;
      height: 4rem;
      top: -2.5rem;
    }
    @media (max-width: 575px) {
      width: 3rem;
      height: 3rem;
      top: -2rem;
    }
  }
  .lead {
    color: rgba(0,0,0,.8);
  }
`;

export default SectionBlog;
