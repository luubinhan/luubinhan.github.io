import styled from 'styled-components';

const SectionTop = styled.div`
  padding-bottom: 100px;
  background-image: url("/images/avatar.jpg");
  background-repeat: no-repeat;
  background-position: 50vw 10vh;
  background-size: auto 60vh;
  @media (max-width: 767px) {
    background-image: none;
  }
`;

export default SectionTop;
