import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { SORT_EN_TO_KR } from '../Modals/QUERY_EXCHANGE';
import SortModal from '../Modals/SortModal';

const SortButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const currSort = location.search
    .split('&')
    .filter(x => x.includes('job_sort'))
    .join('')
    .slice(9);

  const handleButtonClick = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <Button isOpen={isOpen} onClick={handleButtonClick}>
      <ButtonText>{SORT_EN_TO_KR[currSort]}</ButtonText>
      <i className="fa-solid fa-caret-down" />
      <SortModal currSort={currSort} isOpen={isOpen} />
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  height: 40px;
  padding: 0 15px;
  border: ${({ theme }) => theme.borderGray} 1px solid;
  border-radius: ${props => (props.isOpen ? '5px 5px 0 0' : '5px')};
  background-color: #fff;
`;

const ButtonText = styled.span`
  margin-right: 14px;
`;

export default SortButton;
