import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const JobCard = ({ positions }) => {
  const {
    id,
    name,
    company_name,
    province,
    country,
    logo_image,
    compensation,
  } = positions;

  return (
    <Card>
      <Link to={'/recruitment/' + id}>
        <ImgContainer src={logo_image.image} />
        <CardInfo>
          <Position>{name}</Position>
          <Company>{company_name}</Company>
          <Location>
            {province} · {country}
          </Location>
          <Reward>채용보상금 {compensation.toLocaleString()}원</Reward>
        </CardInfo>
      </Link>
    </Card>
  );
};

const Card = styled.li`
  width: 25%;
  padding: 10px;

  a {
    color: ${({ theme }) => theme.fontBlack};
    text-decoration: none;
  }
`;

const ImgContainer = styled.div`
  padding-bottom: 75%;
  border-radius: 4px;
  background-image: url(${props => props.src});
  background-size: cover;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
`;

const CardInfo = styled.div`
  padding: 14px 0;
`;

const Position = styled.h1`
  margin-bottom: 10px;
  overflow: hidden;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
`;

const Company = styled.h2`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
`;

const HighResponseBadge = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  padding: 4px;
  border: 1px ${({ theme }) => theme.themePink} solid;
  border-radius: 2px;
  color: ${({ theme }) => theme.themePink};
  font-size: 10px;
`;

const Location = styled.aside`
  margin-bottom: 10px;
  color: #999;
  font-size: 14px;
`;

const Reward = styled.span`
  font-size: 14px;
`;

export default JobCard;
