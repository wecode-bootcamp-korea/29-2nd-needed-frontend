import React from 'react';
import styled from 'styled-components';
import Chip from './Chip';

function CompanyAside({ companyData }) {
  const { companyTags } = companyData;
  return (
    companyData && (
      <CompanyTags>
        <Heading3>태그</Heading3>
        <ChipsWrap>
          {companyTags?.map((tags, idx) => {
            return <Chip data={tags} key={idx} />;
          })}
        </ChipsWrap>
        <TagSuggest>+ 태그 제안하기</TagSuggest>
      </CompanyTags>
    )
  );
}

const Heading3 = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.fontBlack};
  margin-bottom: 20px;
  font-weight: 500;
`;

const CompanyTags = styled.aside`
  width: calc(30% - 20px);
  margin-left: 10px;
`;

const ChipsWrap = styled.div`
  width: 100%;
`;

const TagSuggest = styled.div`
  color: #999;
  font-size: 14px;
  display: inline-block;
  border-radius: 20px;
  padding: 12px 16px;
  border: 1px dashed #ccc;
  margin: 0 6px 10px 0;
`;

export default CompanyAside;
