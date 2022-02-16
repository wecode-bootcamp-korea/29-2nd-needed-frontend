import React, { useState } from 'react';
import styled from 'styled-components';
import { JOB_DETAIL } from './JOB_DETAIL_MOCK';
import JobDetailHeader from './JobDetailHeader';
import JobDetailContent from './JobDetailContent';
import JobDetailInfo from './JobDetailInfo';
import JobDetailCompany from './JobDetailCompany';
import JobDetailRegulation from './JobDetailRegulation';
import JobDetailShareModal from './JobDetailShareModal';
import JobDetailApplyRender from './JobDetailApplyRender';
import JobCard from '../../components/JobCard/JobCard';
import { POSITIONS } from '../JobList/JOB_LIST_DATA';

const JobDetail = () => {
  const {
    position,
    company,
    company_id,
    company_category,
    company_logo,
    img_url,
    isResponse,
    city,
    country,
    mainparagraph,
    task,
    qualification,
    extra,
    welfare,
    duedate,
    address,
    reward,
  } = JOB_DETAIL;

  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);

  const [isShareOpen, setIsShareOpen] = useState(false);

  const handleShareModal = () => {
    if (isShareOpen) {
      document.body.style.overflow = 'visible';
      setIsShareOpen(false);
    } else {
      document.body.style.overflow = 'hidden';
      setIsShareOpen(true);
    }
  };

  return (
    <>
      <Recruitment>
        <Main>
          <JobDetailHeader
            img_url={img_url}
            position={position}
            company={company}
            isResponse={isResponse}
            city={city}
            country={country}
            company_id={company_id}
          />
          <JobDetailContent
            mainparagraph={mainparagraph}
            task={task}
            qualification={qualification}
            extra={extra}
            welfare={welfare}
          />
          <hr />
          <JobDetailInfo duedate={duedate} address={address} />
          <JobDetailCompany
            company={company}
            company_category={company_category}
            company_logo={company_logo}
            company_id={company_id}
          />
          <JobDetailRegulation company={company} />
        </Main>
        <Sub>
          <JobDetailApplyRender
            isApplicationFormOpen={isApplicationFormOpen}
            setIsApplicationFormOpen={setIsApplicationFormOpen}
            reward={reward}
            isShareOpen={isShareOpen}
            handleShareModal={handleShareModal}
          />
          <JobDetailShareModal
            isShareOpen={isShareOpen}
            handleShareModal={handleShareModal}
          />
        </Sub>
      </Recruitment>
      <Suggestions>
        <h1>이 포지션을 찾고 계셨나요?</h1>
        <div className="cardWrap">
          {POSITIONS.map(card => (
            <JobCard key={card.id} data={card} />
          ))}
        </div>
      </Suggestions>
    </>
  );
};

const Recruitment = styled.div`
  display: flex;
  max-width: 1060px;
  margin: 90px auto;
  color: ${props => props.theme.fontBlack};
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
`;

const Main = styled.main`
  width: calc(70% - 20px);
  margin-right: 20px;

  hr {
    border-top: 1px solid ${props => props.theme.borderGray};
    border-bottom: none;
    border-right: none;
    border-left: none;
  }
`;

const Sub = styled.aside`
  width: 30%;
`;

const Suggestions = styled.div`
  max-width: 1060px;
  margin: 90px auto;
  color: ${props => props.theme.fontBlack};
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';

  li {
    list-style: none;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 500;
  }

  .cardWrap {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;
  }
`;

export default JobDetail;
