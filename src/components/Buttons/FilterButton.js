import React from 'react';
import styled from 'styled-components';

const FilterButton = ({ label, content, setIsOpen }) => {
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <Button onClick={openModal}>
      <ButtonText>{label}</ButtonText>
      <ButtonText purple>{content}</ButtonText>
      <i className="fa-solid fa-caret-down" />
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  margin-right: 10px;
  padding: 0 15px;
  border: ${({ theme }) => theme.borderGray} 1px solid;
  border-radius: 5px;
  background-color: #fff;

  &:last-child {
    margin-right: 0px;
  }
`;

const ButtonText = styled.span`
  margin-right: 8px;
  color: ${props =>
    props.purple
      ? ({ theme }) => theme.themePurple
      : ({ theme }) => theme.fontBlack};
  ${props => props.purple && `margin-right: 14px`}
`;

export default FilterButton;
