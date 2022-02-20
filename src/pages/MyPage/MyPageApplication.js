import React from 'react';
import styled from 'styled-components';
import ApplicationStatusBlock from './ApplicationStatusBlock';

const MyPageApplication = ({ info }) => {
  return (
    <Application>
      <Heading>지원 현황</Heading>
      <FlexRowWrap>
        {info.application.map(item => (
          <ApplicationStatusBlock
            key={item.id}
            label={item.label}
            count={item.count}
          />
        ))}
      </FlexRowWrap>
    </Application>
  );
};

const Application = styled.div`
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 5px;
  background-color: #fff;
  padding: 26px 0 34px;
  margin-bottom: 20px;
`;

const Heading = styled.div`
  padding: 0 32px 32px;
  font-size: 18px;
  font-weight: 500;
`;

const FlexRowWrap = styled.div`
  display: flex;
`;

export default MyPageApplication;
