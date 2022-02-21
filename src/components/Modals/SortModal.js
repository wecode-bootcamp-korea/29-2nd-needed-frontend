import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SORT_KR_TO_EN } from './QUERY_EXCHANGE';

const SortModal = ({ currSort, isOpen }) => {
  const SORTINGS = ['최신순', '보상금순'];
  const navigate = useNavigate();
  const location = useLocation();

  const sortOrderChange = e => {
    const prevFilterQuery = location.search
      .split('&')
      .filter(x => !x.includes('job_sort'));

    const newSortOrder =
      'job_sort=' + SORT_KR_TO_EN[e.target.getAttribute('name')];

    prevFilterQuery.splice(1, 0, newSortOrder);

    navigate('/' + location.pathname.slice(1) + prevFilterQuery.join('&'));
  };

  return (
    <SortingList isOpen={isOpen}>
      {SORTINGS.filter(sort => sort !== currSort).map((sort, index) => (
        <SortingItem key={index} name={sort} onClick={sortOrderChange}>
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
