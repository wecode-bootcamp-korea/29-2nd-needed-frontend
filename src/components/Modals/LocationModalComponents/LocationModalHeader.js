import React from 'react';
import styled from 'styled-components';

const LocationModalHeader = ({
  closeBtn,
  title,
  setSelectedFilters,
  setCountryVal,
}) => {
  const handleReset = () => {
    setCountryVal('전세계');
    setSelectedFilters(['전세계']);
  };

  return (
    <ModalHeader>
      <Reset onClick={handleReset}>
        {title === '지역' && (
          <>
            <i className="fa-solid fa-rotate-right" />
            <span>초기화</span>
          </>
        )}
      </Reset>
      <Title>{title}</Title>
      <Close>
        <i ref={closeBtn} className="fa-solid fa-xmark" />
      </Close>
    </ModalHeader>
  );
};

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 36px;
`;

const Reset = styled.button`
  width: 33%;
  padding: 15px;
  border: none;
  background-color: inherit;
  color: #999;
  font-size: 14px;
  text-align: left;
  cursor: pointer;

  i {
    margin-right: 6px;
    transform: rotate(90deg) scaleX(-1);
  }
`;

const Title = styled.div`
  width: 33%;
  text-align: center;
`;

const Close = styled.button`
  width: 33%;
  padding: 15px;
  border: none;
  background-color: transparent;
  color: #999;
  text-align: right;
  font-size: 24px;

  i {
    cursor: pointer;
  }
`;

export default LocationModalHeader;
