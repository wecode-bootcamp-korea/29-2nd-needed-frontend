import React, { useState } from 'react';
import styled from 'styled-components';
import SortModal from '../Modals/SortModal';

const SortButton = () => {
  const [currSort, setCurrSort] = useState('응답률순');
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <Button isOpen={isOpen} onClick={handleButtonClick}>
      <ButtonText>{currSort}</ButtonText>
      <i className="fa-solid fa-caret-down" />
      <SortModal
        currSort={currSort}
        setCurrSort={setCurrSort}
        isOpen={isOpen}
      />
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
