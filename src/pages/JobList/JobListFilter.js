import React, { useState } from 'react';
import styled from 'styled-components';
import FilterButton from '../../components/Buttons/FilterButton';
import SortButton from '../../components/Buttons/SortButton';
import LocationModal from '../../components/Modals/LocationModal';
// import YearsModal from '../../components/Modals/YearsModal';

const JobListFilter = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  // 경력 필터는 추가구현사항으로 옮겼습니다, 이에따라 주석처리합니다.
  // const [isYearsOpen, setIsYearsOpen] = useState(false);
  const [countryVal, setCountryVal] = useState('전세계');

  return (
    <>
      <Filters>
        <FiltersWrap>
          <FilterButton label="지역" setIsOpen={setIsLocationOpen} />
          {/* <FilterButton
            label="경력"
            content="신입"
            setIsOpen={setIsYearsOpen}
          /> */}
        </FiltersWrap>
        <SortButton />
      </Filters>
      <LocationModal
        isOpen={isLocationOpen}
        setIsOpen={setIsLocationOpen}
        countryVal={countryVal}
        setCountryVal={setCountryVal}
      />
      {/* <YearsModal isOpen={isYearsOpen} setIsOpen={setIsYearsOpen} /> */}
    </>
  );
};

const Filters = styled.aside`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1060px;
  margin: 0 auto 40px;
  padding-top: 20px;
`;

const FiltersWrap = styled.div`
  display: flex;
`;

export default JobListFilter;
