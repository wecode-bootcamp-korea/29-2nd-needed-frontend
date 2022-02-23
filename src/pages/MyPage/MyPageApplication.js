import React from 'react';
import styled from 'styled-components';
import ApplicationStatusBlock from './ApplicationStatusBlock';

const STATUS = [
  { id: 1, label: '지원 완료', name: 'accepted_document' },
  { id: 2, label: '서류 통과', name: 'application_complete' },
  { id: 3, label: '최종 합격', name: 'fail_acceptance' },
  { id: 4, label: '불합격', name: 'final_acceptance' },
];

const MyPageApplication = ({ info }) => {
  return (
    <Application>
      <Heading>지원 현황</Heading>
      <FlexRowWrap>
        {Object.keys(info).length > 0 &&
          STATUS.map(item => (
            <ApplicationStatusBlock
              key={item.id}
              label={item.label}
              count={info.application[0][item.name]}
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
