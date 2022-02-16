import React from 'react';
import styled from 'styled-components';
import Map from './Map';

const JobDetailInfo = ({ duedate, address }) => {
  return (
    <ExtraSection>
      <ExtraSectionItem>
        <span className="header">마감일</span>
        <span className="body">{duedate}</span>
      </ExtraSectionItem>
      <ExtraSectionItem>
        <span className="header">근무지역</span>
        <span className="body">{address}</span>
      </ExtraSectionItem>
      <Map address={address} />
    </ExtraSection>
  );
};

const ExtraSection = styled.section`
  padding: 30px 0 15px;
`;
const ExtraSectionItem = styled.div`
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: 600;

  .header {
    display: inline-block;
    width: 70px;
    color: #999;
  }
`;

export default JobDetailInfo;
