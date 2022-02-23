import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

function CompanyInfo({ companyData }) {
  const { recruitments, description, images } = companyData;

  const [toggle, setToggle] = useState(false);

  return (
    companyData && (
      <CompanyInfos>
        <InfoSection>
          <Heading3>채용 중인 포지션</Heading3>
          <CardWrap>
            {recruitments?.map(recruitInfo => (
              <Card key={recruitInfo.id} data={recruitInfo} />
            ))}
          </CardWrap>
        </InfoSection>
        <InfoSection>
          <Heading3>회사 소개</Heading3>
          <PictureWrap>
            {images?.map((imageEle, idx) => (
              <SeparatePictureContainer key={idx}>
                <img alt="company photos" src={imageEle.image} />
              </SeparatePictureContainer>
            ))}
          </PictureWrap>
          <CompanyIntro height={toggle}>
            <CompanyDesc>{description}</CompanyDesc>
          </CompanyIntro>
          <ShowMore
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? '접기 ' : '더보기 '}
            <i className={toggle ? 'fas fa-angle-up' : 'fas fa-angle-down'} />
          </ShowMore>
        </InfoSection>
      </CompanyInfos>
    )
  );
}

const CompanyInfos = styled.div`
  width: calc(70% - 10px);
`;

const InfoSection = styled.section`
  margin-bottom: 80px;
`;

const Heading3 = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.fontBlack};
  margin-bottom: 20px;
  font-weight: 500;
`;
const CardWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const PictureWrap = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
`;

const SeparatePictureContainer = styled.div`
  width: calc(25% - 10px);
  height: 124px;
  margin: 0 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CompanyIntro = styled.div`
  max-height: ${props => (props.height ? 'none' : '81px')};
  overflow: hidden;
  font-size: 16px;
  line-height: 27px;
  color: ${({ theme }) => theme.fontBlack};
  white-space: pre-wrap;
`;

const CompanyDesc = styled.div`
  white-space: pre-line;
  word-break: keep-all;
`;

const ShowMore = styled.div`
  padding: 10px 0;
  color: #999;
  font-size: 14px;
`;

export default CompanyInfo;
