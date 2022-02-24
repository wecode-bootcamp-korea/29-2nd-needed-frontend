import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const JobDetailHeader = ({
  img_url,
  name,
  company_name,
  province,
  country,
  company_id,
}) => {
  return (
    <Header>
      <ImgContainer src={img_url} />
      <Title>{name}</Title>
      <Info>
        <Company>
          <Link to={'/company/' + company_id}>{company_name}</Link>
        </Company>
        {/* TODO: 응답률 부분은 추가 구현으로 넘겼습니다. */}
        {/* {isResponse && <ResponseBadge>응답률 매우 높음</ResponseBadge>} */}
        <Location>
          {province} · {country}
        </Location>
      </Info>
    </Header>
  );
};

const Header = styled.header``;

const ImgContainer = styled.div`
  width: 100%;
  padding-bottom: 70%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  margin: 40px 0 10px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const Company = styled.div`
  margin-right: 4px;
  font-size: 14px;
  font-weight: 600;

  a {
    color: ${props => props.theme.fontBlack};
    text-decoration: none;
  }
`;

// TODO : 응답률은 추가구현입니다.
// const ResponseBadge = styled.div`
//   padding: 4px;
//   border: 1px ${props => props.theme.themePink} solid;
//   border-radius: 2px;
//   color: ${props => props.theme.themePink};
//   font-size: 10px;
// `;

const Location = styled.span`
  color: #999;
  font-size: 14px;

  &::before {
    content: '';
    display: inline-block;
    height: 12px;
    border-left: #e1e2e3 solid 1px;
    margin: 0 10px;
  }
`;

export default JobDetailHeader;
