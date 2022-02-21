import React from 'react';
import styled from 'styled-components';
import JOB_INFOS from '../JOB_INFOS';

function JobInfo() {
  return (
    <Parent>
      {JOB_INFOS.map(job => (
        <Item key={job.id}>
          <i class={job.img} />
          <h3>{job.title}</h3>
        </Item>
      ))}
    </Parent>
  );
}
const Parent = styled.div`
  display: flex;
`;
const Item = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* flex-direction: column; */
  border: 1px solid lightgray;
  width: 260px;
  height: 100px;
  padding: 18px;
  text-align: center;
  line-height: 1.4;
  }
  & h3 {
    padding-top: 10px;
`;

export default JobInfo;
