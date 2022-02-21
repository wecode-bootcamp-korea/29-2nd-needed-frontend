import React from 'react';
import styled from 'styled-components';

function Chip({ data }) {
  return <SeparateChip>#{data}</SeparateChip>;
}

const SeparateChip = styled.div`
  color: ${({ theme }) => theme.fontGray};
  font-size: 14px;
  display: inline-block;
  border-radius: 20px;
  padding: 12px 16px;
  background-color: #f3f5f8;
  margin: 0 6px 10px 0;
`;

export default Chip;
