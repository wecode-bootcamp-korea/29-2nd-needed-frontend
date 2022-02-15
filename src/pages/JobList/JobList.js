import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import JobListHeader from './JobListHeader';
import JobListFilter from './JobListFilter';
import JobCard from '../../components/JobCard/JobCard';
import { JOB_CATEGORY, POSITIONS } from './JOB_LIST_DATA';

const JobList = () => {
  const params = useParams();

  const getCurrentCategory = category => {
    if (category === undefined) {
      return JOB_CATEGORY.all;
    } else {
      return JOB_CATEGORY[category];
    }
  };

  return (
    <>
      <JobListHeader
        data={getCurrentCategory(params.category)}
        category={params.category}
        subcategory={params.subcategory}
      />
      <JobListFilter />
      <JobCardWrap>
        <JobCardList>
          {POSITIONS.map(data => (
            <JobCard key={data.id} data={data} />
          ))}
        </JobCardList>
      </JobCardWrap>
    </>
  );
};

const JobCardWrap = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  color: ${({ theme }) => theme.fontBlack};
`;

const JobCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
`;

export default JobList;
