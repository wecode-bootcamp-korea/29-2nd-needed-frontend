import React from 'react';
import styled from 'styled-components';

const ApplicationStatusBlock = ({ label, count }) => {
  return (
    <Wrap>
      <Sum>{count}</Sum>
      <Label>{label}</Label>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  border-right: 1px solid ${({ theme }) => theme.borderGray};

  &:last-child {
    border-right: none;
  }
`;

const Sum = styled.div`
  font-size: 36px;
  padding-bottom: 11px;
`;

const Label = styled.div`
  line-height: 19px;
`;

export default ApplicationStatusBlock;
