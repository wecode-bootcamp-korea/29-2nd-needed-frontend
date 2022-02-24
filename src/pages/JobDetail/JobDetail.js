import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import JobDetailHeader from './JobDetailHeader';
import JobDetailContent from './JobDetailContent';
import JobDetailInfo from './JobDetailInfo';
import JobDetailCompany from './JobDetailCompany';
import JobDetailRegulation from './JobDetailRegulation';
import JobDetailShareModal from './JobDetailShareModal';
import JobDetailApplyRender from './JobDetailApplyRender';
import JobCard from '../../components/JobCard/JobCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { api } from '../../api/config';

const JobDetail = () => {
  const [jobDetailInfo, setJobDetailInfo] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const params = useParams();

  useEffect(() => {
    axios.get(`${api.fetchRecruitments}/${params.id}`).then(res => {
      setJobDetailInfo(res.data.result);
    });
  }, [params.id]);

  useEffect(() => {
    if (jobDetailInfo.occupation_subcategory_id) {
      axios
        .get(
          `${api.fetchRecruitments}?subcategory=${jobDetailInfo.occupation_subcategory_id}`
        )
        .then(res => {
          setRecommendations(res.data.Recruitment);
        });
    }
  }, [jobDetailInfo.occupation_subcategory_id]);

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
            img_url={jobDetailInfo?.image?.[1].image}
            name={jobDetailInfo.name}
            company_name={jobDetailInfo.company_name}
            province={jobDetailInfo.province}
            country={jobDetailInfo.country}
            company_id={jobDetailInfo.company_id}
          />
          <JobDetailContent description={jobDetailInfo.description} />
          <hr />
          <JobDetailInfo
            deadline={jobDetailInfo.deadline}
            address={jobDetailInfo.address}
            country={jobDetailInfo.country}
          />
          <JobDetailCompany
            company_name={jobDetailInfo.company_name}
            company_logo={jobDetailInfo?.image?.[0].image}
            company_id={jobDetailInfo.company_id}
          />
          <JobDetailRegulation company_name={jobDetailInfo.company_name} />
        </Main>
        <Sub>
          <JobDetailApplyRender
            isApplicationFormOpen={isApplicationFormOpen}
            setIsApplicationFormOpen={setIsApplicationFormOpen}
            compensation={jobDetailInfo.compensation}
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
          {recommendations.length > 0 &&
            recommendations.map(card => (
              <JobCard key={card.id} positions={card} />
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
