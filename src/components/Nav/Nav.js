import React, { useState } from 'react';
import styled from 'styled-components';
import { SIDEBAR_INSIDE } from './SIDEBAR_INSIDE';
import SideInside from './SideInside';

const Nav = () => {
  const [displayShow, setDisplayShow] = useState(false);

  const showSidebar = () => {
    setDisplayShow(prev => !prev);
  };

  return (
    <>
      <Navigation>
        <NavContainer>
          <NavLeft>
            <NavBt onClick={showSidebar}>
              <MenuImg src="/images/nav/menu.png" alt="menu" />
            </NavBt>
            <Logo src="/images/nav/needed.png" alt="log" />
          </NavLeft>
          <TextBox>
            <Menu>채용</Menu>
            <Menu>이벤트</Menu>
            <Menu>직군별 연봉</Menu>
            <Menu>이력서</Menu>
            <Menu>커뮤니티</Menu>
            <Menu>프리랜서</Menu>
            <Menu>AI 합격예측</Menu>
          </TextBox>
          <NavRight>
            <SearchWrap>
              <Search src="/images/nav/search.png" alt="search" />
            </SearchWrap>
            <SignUpBt>회원가입/로그인</SignUpBt>
            <RoundBt>기업서비스</RoundBt>
          </NavRight>
        </NavContainer>
      </Navigation>
      <SlideWrap>
        <SlideBox
          displayShow={displayShow}
          onMouseOver={() => setDisplayShow(true)}
          onMouseOut={() => setDisplayShow(false)}
        >
          {SIDEBAR_INSIDE.map(list => {
            return (
              <SideInside
                key={list.id}
                title={list.title}
                url={list.url}
                subNav={list.subNav}
              />
            );
          })}
        </SlideBox>
      </SlideWrap>
    </>
  );
};

const Navigation = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  font-size: 14px;
  z-index: 999;
`;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: white;
  border-bottom: 1px solid lightgray;
  z-index: 1000;
`;

const NavLeft = styled.div`
  margin-left: 20px;
  margin-right: 50px;
`;

const NavBt = styled.button`
  border: none;
  background-color: white;
  margin-right: 10px;
  cursor: pointer;
`;

const MenuImg = styled.img`
  width: 17px;
  height: 14px;
  object-fit: contain;
`;

const Logo = styled.img`
  width: 74px;
  height: 17px;
  cursor: pointer;
`;

const TextBox = styled.div`
  height: 21px;
  line-height: 20px;
  margin-right: 50px;
  li {
    text-decoration: none;
    display: inline-block;
    margin: 0 20px;
    cursor: pointer;
  }
`;

const Menu = styled.li`
  &:hover {
    border-bottom: solid 2px #9f87ff;
    height: 37px;
  }
  &:active {
    border-bottom: solid 2px #2d5bff;
    height: 37px;
  }
`;

const NavRight = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
`;
const SearchWrap = styled.button`
  height: 100%;
  background-color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
`;
const Search = styled.img`
  width: 18px;
  height: 18px;
`;

const SignUpBt = styled.button`
  height: 100%;
  color: #333;
  font-weight: 400;
  border: none;
  background-color: white;
  padding: 5px 20px;
  cursor: pointer;
`;

const RoundBt = styled.button`
  border: 1px solid #e1e2e3;
  background-color: white;
  border-radius: 15px;
  padding: 0 10px;
  margin-left: 15px;
  font-weight: 400;
  height: 30px;
  font-size: 13px;
  color: #666;
`;

const SlideWrap = styled.div`
  display: flex;
  position: absolute;
  top: 50px;
  width: 100%;
  height: 100%;
`;

const SlideBox = styled.div`
  position: absolute;
  width: 180px;
  height: 280px;
  left: 160px;
  background-color: white;
  border: 1px solid #e1e2e3;
  display: ${props => (props.displayShow ? 'display' : 'none')};
`;

export default Nav;
