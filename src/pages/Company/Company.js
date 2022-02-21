import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CompanyHead from './components/CompanyHead';
import CompanyInfo from './components/CompanyInfo';
import CompanyAside from './components/CompanyAside';

function Company() {
  const [companyData, setCompanyData] = useState({});

  useEffect(() => {
    fetch('/data/COMPANY_DATA.json')
      .then(res => res.json())
      .then(([data]) => setCompanyData(data));
  }, []);

  return (
    companyData && (
      <CompanyAll>
        <CompanyHead companyData={companyData} />
        <FlexMiddle>
          <CompanyBody>
            <CompanyInfo companyData={companyData} />
            <CompanyAside companyData={companyData} />
          </CompanyBody>
        </FlexMiddle>
      </CompanyAll>
    )
  );
}
const CompanyAll = styled.div`
  margin-top: 50px;
`;

const FlexMiddle = styled.div`
  display: flex;
  justify-content: center;
`;

const Makecenter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1060px;
`;

const CompanyBody = styled(Makecenter)`
  margin: 40px 0;
`;

export default Company;
