import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';

function WantedPlusLanding() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LandingWrap>
          <DecorationWrap>
            <div>
              <Title className="title">
                <Titleimg alt="logo" src="/images/neededPlusPurple.png" />
              </Title>
              <Caption className="caption">
                일하는 사람들을 위한 커리어 컨텐츠
              </Caption>
            </div>
            <div>
              <PhotoWrapper />
              <ThumbsUp
                alt="thumbs up"
                src="/images/thumb-up-dynamic-color.png"
              />
            </div>
          </DecorationWrap>
          <ButtonWrap>
            <ButtonLeft>
              <div className="top">83%</div>
              <div className="bottom">할인</div>
            </ButtonLeft>
            <ButtonMiddle>
              <div className="top">월 90,000원</div>
              <div className="bottom">
                월<span className="span">7,900</span>원
              </div>
            </ButtonMiddle>
            <ButtonRight>첫 구독 시 0원!</ButtonRight>
          </ButtonWrap>
        </LandingWrap>
      </ThemeProvider>
    </>
  );
}

const LandingWrap = styled.div`
  padding: 165px 0 160px 0;
  width: 100vw;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const DecorationWrap = styled.div`
  max-width: 860px;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  height: 64px;
`;

const Titleimg = styled.img`
  height: 100%;
  width: auto;
`;

const Caption = styled.div`
  margin-top: 22px;
  font-size: 24px;
`;

const PhotoWrapper = styled.div`
  width: 400px;
  height: 250px;
  overflow: hidden;
  box-shadow: 20px 20px 60px #8773d9;
  border-radius: 40px;
  background-size: cover;
  background-image: url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');
`;

const ThumbsUp = styled.img`
  width: 215px;
  height: 215px;
  position: relative;
  top: -100px;
  left: -160px;
`;

const ButtonWrap = styled.div`
  width: 80%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.themePurple};
  border-radius: 40px;
  box-shadow: 20px 20px 60px #8773d9;
  align-items: center;
  padding: 30px 0;
`;

const ButtonLeft = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: ${props => props.theme.themePink};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .top {
    font-size: 20px;
  }
  .bottom {
    font-size: 14px;
  }
`;

const ButtonMiddle = styled.div`
  padding: 0 170px 0 30px;
  text-align: right;

  .top {
    color: #666;
    font-size: 16px;
    text-decoration: line-through;
    padding-bottom: 10px;
  }
  .bottom {
    font-size: 17px;
    color: #fff;
    .span {
      font-size: 32px;
      padding: 1px 3px 0 3px;
      font-weight: bold;
    }
  }
`;

const ButtonRight = styled.button`
  font-weight: 600;
  padding: 12px 50px;
  border-radius: 30px;
  border: 1px solid ${props => props.theme.themePink};
  color: ${props => props.theme.themePink};
  background-color: #fff;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: ${props => props.theme.themePink};
  }
`;

export default WantedPlusLanding;
