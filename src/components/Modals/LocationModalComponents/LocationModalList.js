import React from 'react';
import styled from 'styled-components';
import { LOCATION_DATA } from '../LOCATION_DATA';

const LocationModalList = ({
  countryVal,
  provinceVal,
  setProvinceVal,
  selectedFilters,
  setSelectedFilters,
}) => {
  const selectProvince = province => {
    setProvinceVal(province);
    updateSelectedFilters(province);
  };

  const updateSelectedFilters = province => {
    const arr = selectedFilters.filter(x => !x.includes('전체'));
    if (!arr.includes(province)) {
      setSelectedFilters([...arr, province]);
    }
  };

  const selectAll = e => {
    setProvinceVal(e.target.innerHTML);
    setSelectedFilters([countryVal + ' 전체']);
  };

  return (
    <Province>
      <ProvinceLabel>지역</ProvinceLabel>
      <ProvinceList>
        <ProvinceItem onClick={selectAll} active={provinceVal === '전국'}>
          전국
        </ProvinceItem>
        {LOCATION_DATA[countryVal].map(province => (
          <ProvinceItem
            key={province.id}
            onClick={() => selectProvince(province.province)}
            active={provinceVal === province.province}
          >
            {province.province}
          </ProvinceItem>
        ))}
      </ProvinceList>
    </Province>
  );
};

const Province = styled.div`
  width: 100%;
`;

const ProvinceLabel = styled.h4`
  margin-bottom: 10px;
  color: #767676;
  font-size: 14px;
  font-weight: 500;
`;

const ProvinceList = styled.ul`
  border: 1px solid ${({ theme }) => theme.borderGray};
  ${props => props.second && 'border-left: none;'}
`;
const ProvinceItem = styled.li`
  padding: 0 14px;
  color: ${props =>
    props.active
      ? props => props.theme.themePurple
      : props => props.theme.fontBlack};
  font-size: 14px;
  font-weight: ${props => (props.active ? '500' : '400')};
  line-height: 30px;
  background-color: ${props => (props.active ? '#f6f8ff' : '#fff')};

  &:hover {
    ${props => !props.active && 'background-color: #f6f6f6'}
  }
`;

export default LocationModalList;
