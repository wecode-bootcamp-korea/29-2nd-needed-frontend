import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { COUNTRY_EN_TO_KR } from '../Modals/QUERY_EXCHANGE';
import { searchParam } from '../../pages/JobList/searchParam';

const FilterButton = ({ label, setIsOpen }) => {
  const openModal = () => {
    setIsOpen(true);
  };

  const location = useLocation();

  const getCurrentCountry = () => {
    const currCountry = location.search
      .split('&')
      .filter(x => x.includes('country'))
      .join('');

    const currCountryString =
      COUNTRY_EN_TO_KR[currCountry.slice(currCountry.indexOf('=') + 1)];

    return currCountryString;
  };

  const getCountOfLocation = () => {
    if (searchParam('location', location.search) !== null) {
      const currLocationsArray = searchParam('location', location.search).split(
        ','
      );
      return currLocationsArray.length;
    }
  };

  return (
    <Button onClick={openModal}>
      <ButtonText>{label}</ButtonText>
      <ButtonText purple>{getCurrentCountry()}</ButtonText>
      <i className="fa-solid fa-caret-down" />
      <CountBubble hidden={getCountOfLocation()}>
        {getCountOfLocation()}
      </CountBubble>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  position: relative;
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

const CountBubble = styled.div`
  display: ${({ hidden }) => (hidden ? `flex` : `none`)};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -12px;
  right: -12px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: #fff;
  background-color: ${({ theme }) => theme.themePurple};
`;

export default FilterButton;
