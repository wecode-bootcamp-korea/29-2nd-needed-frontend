import React from 'react';
import styled from 'styled-components';

const SortModal = ({ currSort, setCurrSort, isOpen }) => {
  const SORTINGS = ['응답률순', '최신순', '보상금순', '인기순'];

  return (
    <SortingList isOpen={isOpen}>
      {SORTINGS.filter(sort => sort !== currSort).map((sort, index) => (
        <SortingItem key={index} onClick={e => setCurrSort(e.target.innerHTML)}>
          {sort}
        </SortingItem>
      ))}
    </SortingList>
  );
};

const SortingList = styled.ul`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 38px;
  left: -1px;
  width: calc(100% + 2px);
  background-color: #fff;
  border: ${({ theme }) => theme.borderGray} 1px solid;
  border-radius: 0 0 5px 5px;
`;

const SortingItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 40px;
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.borderGray};
`;

export default SortModal;
