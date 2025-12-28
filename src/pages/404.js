import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section404 = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #ccdf2b 0%, #38adba 100%);
`;

const Content = styled.div`
  max-width: 600px;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: #fff;
  color: #667eea;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    color: #764ba2;
  }
`;

const NotFoundPage = () => (
    <Section404>
      <Content>
        <Title>404</Title>
        <Subtitle>Không Tìm Thấy Trang</Subtitle>
        <Description>
          Rất tiếc! Trang bạn đang tìm kiếm không tồn tại. Có thể đã bị di chuyển hoặc xóa.
        </Description>
        <HomeButton to="/">Về Trang Chủ</HomeButton>
      </Content>
    </Section404>
);

export default NotFoundPage;