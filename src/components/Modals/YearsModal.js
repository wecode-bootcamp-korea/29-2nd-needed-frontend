import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LocationModalHeader from './LocationModalComponents/LocationModalHeader';

const YearsModal = ({ isOpen, setIsOpen }) => {
  const [yearsVal, setYearsVal] = useState('전체');

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
        <LocationModalHeader closeBtn={closeBtn} title="경력 " />
        <ModalBody>
          <SelectboxWrap>
            <Select
              value={yearsVal}
              onChange={e => setYearsVal(e.target.value)}
            >
              <Option>전체</Option>
              <Option>신입</Option>
              <Option>1년</Option>
              <Option>2년</Option>
              <Option>3년</Option>
              <Option>4년</Option>
              <Option>5년</Option>
              <Option>6년</Option>
              <Option>7년</Option>
              <Option>8년</Option>
              <Option>9년</Option>
              <Option>10년 이상</Option>
            </Select>
          </SelectboxWrap>
        </ModalBody>
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

const SelectboxWrap = styled.div`
  position: relative;
  margin-bottom: 24px;

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

const Select = styled.select`
  width: 100%;
  height: 40px;
  padding: 0 15px;
  border: 1px ${({ theme }) => theme.borderGray} solid;
  border-radius: 5px;
  color: ${({ theme }) => theme.fontBlack};
  appearance: none;
`;

const Option = styled.option``;

const ConfirmBtn = styled.div`
  margin: 20px;
  padding: 16px 0;
  background-color: ${({ theme }) => theme.themePurple};
  border-radius: 24px;
  color: #fff;
  text-align: center;
`;

export default YearsModal;
