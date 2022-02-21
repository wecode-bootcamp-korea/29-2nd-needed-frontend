import React from 'react';
import BannerItem from './BannerItem/BannerItem';
import JobInfo from './JobInfo/JobInfo';
import styled from 'styled-components';
import BannerSlider from './ImageSlider/BannerSlider';
import EventSlider from './ImageSlider/EventSlider';
import VodSlider from './ImageSlider/VodSlider';

function Main() {
  return (
    <div>
      <BannerSlider />
      <Box>
        <Banner>
          <span>
            직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.
            <em>👀 &gt;</em>
          </span>
        </Banner>
      </Box>
      <TitleBox>
        <Title>직장인을 위한 wanted+</Title>
        <SubTitle>VOD 현직자들의 실전 인사이트가 필요하다면</SubTitle>
      </TitleBox>
      <VodSlider />
      <section>
        <SectionWrapper>
          <BannerTop>
            <h2>wanted+ 이런 걸 할 수 있어요!</h2>
            <h3>
              매주 업데이트 되는 콘텐츠를 무제한으로 감상하세요. 언제든 해지하실
              수 있습니다.
            </h3>
          </BannerTop>
          <BannerBottom>
            <BannerItem />
            <Button>첫 구독 0원 신청하기</Button>
          </BannerBottom>
        </SectionWrapper>
        <BottomTitleBox>
          <Title>커리어 성장을 위한 맞춤 이벤트</Title>
          <SubTitle>회사 밖에서의 레벨업을 원한다면</SubTitle>
        </BottomTitleBox>
        <EventSlider />
        <AdditionalInfo>
          <h1>채용 정보를 찾고 계셨나요?</h1>
          <JobInfo />
        </AdditionalInfo>
      </section>
    </div>
  );
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 75vw;
  min-width: 100px;
  height: 65px;
  padding: 17px 30px;
  font-size: 17px;
  color: white;
  background: linear-gradient(
    to right,
    #2f5fef -127%,
    #046afe 50%,
    #00d2dd 145%
  );
  border-radius: 25px;
  cursor: pointer;
`;

const BannerTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  & h2 {
    font-size: 25px;
  }
  & h3 {
    margin-top: 8px;
    font-size: 14px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  line-height: 1.5;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 500;
`;

const SubTitle = styled.span`
  font-size: 15px;
  font-weight: 200;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  padding: 40px 0;
  margin: 0 184px;
  background-color: #f8f8fa;
`;

const BannerBottom = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  align-items: center;
  width: 222px;
  height: 40px;
  color: white;
  background-color: #3366ff;
  cursor: pointer;
  border-radius: 15px;
`;

const BottomTitleBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  line-height: 1.5;
`;

const AdditionalInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 80px;
  border-top: 1px solid lightgray;
  & h1 {
    font-size: 22px;
    font-weight: 460;
    font-family: sans-serif;
    margin-bottom: 30px;
  }
`;

export default Main;
