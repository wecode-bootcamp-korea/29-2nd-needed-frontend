import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SIDEBAR_INSIDE } from './SIDEBAR_INSIDE';
import SideInside from './SideInside';
import LogIn from '../../pages/Login/Login';

const Nav = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const ModalHandler = () => {
    setModalOpen(prev => !prev);
  };

  return (
    <>
      <Navigation>
        <NavContainer>
          <NavLeft>
            <NavBt onClick={ModalHandler}>
              <MenuImg src="images/nav/menu.png" alt="menu" />
            </NavBt>
            <StyledLink to="/">
              <Logo src="/images/nav/needed.png" alt="log" />
            </StyledLink>
          </NavLeft>
          <TextBox>
            <Menu>
              <StyledLink to="/recruitments">채용</StyledLink>
            </Menu>
            <Menu>이벤트</Menu>
            <Menu>
              <StyledLink to="/salary">직군별 연봉</StyledLink>
            </Menu>
            <Menu>
              <StyledLink to="/resume">이력서</StyledLink>
            </Menu>
            <Menu>커뮤니티</Menu>
            <Menu>
              <StyledLink to="/salary">needed +</StyledLink>
            </Menu>
            <Menu>AI 합격예측</Menu>
          </TextBox>
          <NavRight>
            <SearchWrap>
              <Search src="/images/nav/search.png" alt="search" />
            </SearchWrap>
            <LogIn />
            <RoundBt>기업서비스</RoundBt>
          </NavRight>
        </NavContainer>
      </Navigation>
      <SlideWrap
        displayShow={displayShow}
        onMouseOver={() => setDisplayShow(true)}
        onMouseOut={() => setDisplayShow(false)}
      >
        <SlideBox>
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
  z-index: 999;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333333;
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
  display: ${props => (props.displayShow ? 'display' : 'none')};
`;

const SlideBox = styled.div`
  position: absolute;
  width: 180px;
  height: 280px;
  left: 160px;
  background-color: white;
  border: 1px solid #e1e2e3;
`;

export default Nav;
