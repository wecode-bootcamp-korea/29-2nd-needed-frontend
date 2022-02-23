import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import GlobalStyle from '../../styles/GlobalStyle';

function Footer() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Footers>
          <FooterContentsWrap>
            <LinkBunchDiv between>
              <Wrap>
                <Image src="/images/logo-wide.png" alt="logo with logotype" />
                <Links>기업소개</Links>
                <Links>이용약관</Links>
                <Links>개인정보 처리방침</Links>
                <Links>고객센터</Links>
              </Wrap>
              <MarketingChannels>
                <i className="fab fa-instagram" />
                <i className="fab fa-youtube" />
                <i className="fab fa-facebook" />
                <i className="fab fa-apple" />
                <i className="fab fa-google-play" />
              </MarketingChannels>
            </LinkBunchDiv>
            <TinyLetterSelectLangDiv between>
              <Caption>
                니디드랩 | 서울특별시 강남구 테헤란로 143 위워크타워 81층 |
                통신판매번호 : 2022-서울강남-1341
                <br />
                유료직업소개사업등록번호 : (국내) 제2200-3-11-0-00000호 | (국외)
                서울남부-유-0000-0 | 사업자등록번호 : 000-00-00000 | 02-000-0000
                <br />© Neededlab, Inc.
              </Caption>
              <Selector>
                <option value="korean">한국 (한국어)</option>
                <option value="japanese">日本 (日本語)</option>
                <option value="english">Worldwide (English)</option>
                <option value="singaporeEnglish">Singapore (English)</option>
              </Selector>
            </TinyLetterSelectLangDiv>
          </FooterContentsWrap>
        </Footers>
      </ThemeProvider>
    </>
  );
}

const Footers = styled.footer`
  width: 100vw;
  border-top: 1px solid ${props => props.theme.borderGray};
  padding: 18px 0 65px;
  display: flex;
  justify-content: center;
`;

const FooterContentsWrap = styled.div`
  max-width: 1060px;
  width: 100%;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: ${props =>
    props.between ? 'space-between' : props.end ? 'flex-end' : 'flex-start'};
  align-items: center;
`;

const LinkBunchDiv = styled(Wrap)`
  margin: 0 0 18px;
`;

const TinyLetterSelectLangDiv = styled(Wrap)`
  border-top: ${props => props.theme.borderGray};
  padding-top: 25px;
`;

const Image = styled.img`
  width: 110px;
  height: auto;
  margin-right: 50px;
`;

const Links = styled.div`
  color: #3a3a3a;
  font-size: 15px;
  margin-right: 45px;
  cursor: pointer;
`;

const MarketingChannels = styled.i`
  font-size: 20px;
  i {
    color: #919191;
    margin-left: 14px;
    cursor: pointer;
  }
`;

const Caption = styled.div`
  font-size: 12px;
  line-height: 1.66667em;
  color: #767676;
`;

const Selector = styled.select`
  width: 250px;
  height: 40px;
  background-color: #f2f4f7;
  border-radius: 5px;
  color: #717171;
  padding: 0 25px;
  border: none;
`;

export default Footer;
