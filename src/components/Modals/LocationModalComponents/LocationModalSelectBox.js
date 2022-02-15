import React from 'react';
import styled from 'styled-components';

const LocationModalSelectBox = ({
  countryVal,
  setCountryVal,
  setProvinceVal,
  setSelectedFilters,
}) => {
  const handleCountrySelect = e => {
    setCountryVal(e.target.value);
    setProvinceVal('전국');

    if (e.target.value === '전세계') {
      setSelectedFilters(['전세계']);
    } else {
      setSelectedFilters([e.target.value + ' 전체']);
    }
  };

  return (
    <Country>
      <CountryLabel>국가</CountryLabel>
      <SelectboxWrap>
        <CountrySelect value={countryVal} onChange={handleCountrySelect}>
          <CountryOption>전세계</CountryOption>
          <CountryOption>한국</CountryOption>
          <CountryOption>대만</CountryOption>
        </CountrySelect>
      </SelectboxWrap>
    </Country>
  );
};

const Country = styled.div`
  margin: 10px 0 30px;
`;

const CountryLabel = styled.h4`
  margin-bottom: 10px;
  color: #767676;
  font-size: 14px;
  font-weight: 500;
`;

const SelectboxWrap = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 20px;
    border-top: 6px solid ${({ theme }) => theme.fontBlack};
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    transform: translateY(-50%);
  }
`;

const CountrySelect = styled.select`
  width: 100%;
  height: 40px;
  padding: 0 15px;
  border: 1px ${({ theme }) => theme.borderGray} solid;
  border-radius: 5px;
  color: ${({ theme }) => theme.fontBlack};
  appearance: none;
`;

const CountryOption = styled.option``;

export default LocationModalSelectBox;
