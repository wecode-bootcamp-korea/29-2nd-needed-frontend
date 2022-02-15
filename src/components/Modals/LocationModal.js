import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LocationModalHeader from './LocationModalComponents/LocationModalHeader';
import LocationModalSelectBox from './LocationModalComponents/LocationModalSelectBox';
import LocationModalList from './LocationModalComponents/LocationModalList';

const LocationModal = ({ isOpen, setIsOpen, countryVal, setCountryVal }) => {
  const [provinceVal, setProvinceVal] = useState('전국');
  const [selectedFilters, setSelectedFilters] = useState(['전세계']);

  const modal = useRef();
  const closeBtn = useRef();

  const handleModalClose = e => {
    if (!modal.current.contains(e.target) || e.target === closeBtn.current) {
      setIsOpen(false);
    }
  };

  return (
    <Background isOpen={isOpen} onClick={handleModalClose}>
      <Modal ref={modal}>
        <LocationModalHeader closeBtn={closeBtn} title="지역" />
        <ModalBody>
          <LocationModalSelectBox
            countryVal={countryVal}
            setCountryVal={setCountryVal}
            setProvinceVal={setProvinceVal}
            setSelectedFilters={setSelectedFilters}
          />
          {countryVal !== '전세계' && (
            <ProvinceWrap>
              <LocationModalList
                countryVal={countryVal}
                provinceVal={provinceVal}
                setProvinceVal={setProvinceVal}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
              />
            </ProvinceWrap>
          )}
        </ModalBody>
        <Selections>
          {selectedFilters.map((selection, index) => (
            <SelectionBubble key={index}>{selection}</SelectionBubble>
          ))}
        </Selections>
        <Link to="/">
          <ConfirmBtn>확인</ConfirmBtn>
        </Link>
      </Modal>
    </Background>
  );
};

const Background = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  background-color: #fff;
  border-radius: 5px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  transform: translate(-50%, -50%);

  a {
    text-decoration: none;
  }
`;

const ModalBody = styled.div`
  padding: 20px;
`;

const ProvinceWrap = styled.div`
  display: flex;
`;

const Selections = styled.div`
  display: flex;
  min-height: 100px;
  padding: 20px;
  background-color: ${({ theme }) => theme.borderGray};
`;

const SelectionBubble = styled.div`
  height: 100%;
  margin-right: 4px;
  padding: 10px 20px;
  font-size: 13px;
  color: ${({ theme }) => theme.themePurple};
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.themePurple};
  border-radius: 24px;
`;

const ConfirmBtn = styled.div`
  margin: 20px;
  padding: 16px 0;
  background-color: ${({ theme }) => theme.themePurple};
  border-radius: 24px;
  color: #fff;
  text-align: center;
`;

export default LocationModal;
