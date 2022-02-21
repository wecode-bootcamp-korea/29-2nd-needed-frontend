import React from 'react';
import styled from 'styled-components';

function CompanyHead({ companyData }) {
  const { companyName, companyLogo } = companyData;

  return (
    companyData && (
      <HeaderWrap>
        <CompanyHeader>
          <LogoName>
            <LogoWrap className="logo">
              <LogoImg alt="company logo" src={companyLogo} />
            </LogoWrap>
            {companyName}
          </LogoName>
          <FollowButton>팔로우</FollowButton>
        </CompanyHeader>
      </HeaderWrap>
    )
  );
}

const FlexMiddle = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderWrap = styled(FlexMiddle)`
  border-bottom: 1px solid ${({ theme }) => theme.borderGray};
`;

const Makecenter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1060px;
`;

const CompanyHeader = styled(Makecenter)`
  height: 90px;
  align-items: center;
`;

const LogoName = styled.div`
  display: flex;
  align-items: center;
  font-size: 26px;
  font-weight: 500;
  color: ${({ theme }) => theme.fontBlack};
`;

const LogoWrap = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  margin-right: 16px;
`;

const LogoImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const FollowButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 27px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  background-color: #fff;
  border-radius: 20px;
  font-size: 15px;
  color: ${({ theme }) => theme.themePurple};
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.themePurple};
  }
`;
export default CompanyHead;
