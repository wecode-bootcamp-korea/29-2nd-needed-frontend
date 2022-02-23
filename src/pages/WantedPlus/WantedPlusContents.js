import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PlusCard from './components/PlusCard';

function WantedPlusContents() {
  const [contentsData, setContentsData] = useState([]);
  useEffect(() => {
    fetch('/data/plusContents.json')
      .then(res => res.json())
      .then(res => setContentsData(res));
  }, []);
  return (
    <>
      <ContentsHeader>
        <Header>
          <TextAndGradient>
            <HeaderTexts>
              <HeaderTitle>
                <HeaderImg alt="logo" src="/images/neededPlusWhite.png" />
              </HeaderTitle>
              <HeaderDisc>
                현업 전문가들의 인사이트를
                <br />
                무제한으로 업데이트 해보세요!
              </HeaderDisc>
            </HeaderTexts>
          </TextAndGradient>
        </Header>
      </ContentsHeader>
      <BodyWrap>
        <Makecenter>
          {contentsData?.map(contents => {
            return <PlusCard key={contents.id} contents={contents} />;
          })}
        </Makecenter>
      </BodyWrap>
    </>
  );
}
const Wrap = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Makecenter = styled.div`
  display: flex;
  width: 100%;
  max-width: 1060px;
  flex-wrap: wrap;
`;

const Header = styled(Makecenter)`
  background: linear-gradient(to right, black, 10%, transparent),
    linear-gradient(to left, black, 10%, transparent),
    url('https://images.unsplash.com/photo-1644946959578-8ec8db9cc98b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
`;

const ContentsHeader = styled(Wrap)`
  margin-top: 50px;
  height: 400px;
  background-color: #000;
`;

const TextAndGradient = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const HeaderTexts = styled.div`
  display: flex;
  padding-left: 72px;
  flex-direction: column;
  justify-content: center;
`;

const HeaderTitle = styled.div`
  height: 52px;
`;

const HeaderImg = styled.img`
  height: 100%;
  width: auto;
`;

const HeaderDisc = styled.div`
  font-size: 15px;
  color: #fff;
  margin: 15px 0;
  line-height: 1.67;
`;

const BodyWrap = styled(Wrap)`
  margin: 45px 0;
`;

export default WantedPlusContents;
