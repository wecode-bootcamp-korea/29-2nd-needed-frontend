import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const JobDetailCompany = ({
  company,
  company_category,
  company_logo,
  company_id,
}) => {
  return (
    <CompanyInfo>
      <Link to={'/company/' + company_id}>
        <LogoWrap src={company_logo} />
        <div>
          <Company>{company}</Company>
          <CompanyCategory>{company_category}</CompanyCategory>
        </div>
      </Link>
    </CompanyInfo>
  );
};

const CompanyInfo = styled.section`
  margin-top: 60px;
  padding: 20px;
  border: 1px solid ${props => props.theme.borderGray};
  border-radius: 3px;

  a {
    display: flex;
    align-items: center;
    border: none;
    background-color: #fff;
    text-decoration: none;
    color: ${({ theme }) => theme.fontBlack};
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    font-weight: 500;
  }
`;

const LogoWrap = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 15px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border: 1px solid #f2f2f2;
`;

const Company = styled.h5`
  margin-bottom: 5px;
`;

const CompanyCategory = styled.h6`
  color: #999;
`;

export default JobDetailCompany;
