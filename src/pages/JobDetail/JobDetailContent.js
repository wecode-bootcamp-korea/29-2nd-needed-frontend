import React from 'react';
import styled from 'styled-components';

const JobDetailContent = ({
  mainparagraph,
  task,
  qualification,
  extra,
  welfare,
}) => {
  return (
    <MainSection>
      <Paragraph>{mainparagraph}</Paragraph>
      <SectionTitle>주요업무</SectionTitle>
      <Paragraph>{task}</Paragraph>
      <SectionTitle>자격요건</SectionTitle>
      <Paragraph>{qualification}</Paragraph>
      <SectionTitle>우대사항</SectionTitle>
      <Paragraph>{extra}</Paragraph>
      <SectionTitle>혜택 및 복지</SectionTitle>
      <Paragraph>{welfare}</Paragraph>
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
const SectionTitle = styled.h3`
  margin-top: 20px;
  font-weight: 600;
`;
const Paragraph = styled.p``;
export default JobDetailContent;
