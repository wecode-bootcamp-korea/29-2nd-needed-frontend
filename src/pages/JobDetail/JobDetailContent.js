import React from 'react';
import styled from 'styled-components';

const JobDetailContent = ({ description }) => {
  return (
    <MainSection>
      <Paragraph>{description}</Paragraph>
    </MainSection>
  );
};

const MainSection = styled.section`
  margin: 40px 0 80px;
  padding-right: 20px;
  font-size: 16px;
  line-height: 1.75;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const Paragraph = styled.p``;

export default JobDetailContent;
