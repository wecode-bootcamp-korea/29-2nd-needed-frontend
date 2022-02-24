import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SIDEBAR_INSIDE } from './SIDEBAR_INSIDE';
import SideInside from './SideInside';
import LogIn from '../../pages/Login/Login';
import SignUp from '../../pages/Login/SignUp';

const Nav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [neededPlus, setNeededPlus] = useState(false);

  const ModalHandler = () => {
    setModalOpen(prev => !prev);
  };

  const neededAuth = () => {
    if (sessionStorage.Authorization) {
      fetch('http://15.165.203.121:8080/neededplus', {
        method: 'GET',
        headers: {
          Authorization: sessionStorage.getItem('Authorization'),
        },
      })
        .then(response => response.json())
        .then(result =>
          result.message === 'SUCCESS'
            ? setNeededPlus(true)
            : console.info('결과: ', result)
        );
    }
  };

  return (
    <Navigation>
      <NavContainer>
        <NavLeft>
          <NavBt onClick={ModalHandler}>
            <MenuImg src="/images/nav/menu.png" alt="menu" />
            <SlideWrap
              modalOpen={modalOpen}
              onMouseOver={() => setModalOpen(true)}
              onMouseOut={() => setModalOpen(false)}
            >
              <SlideBox onClick={ModalHandler}>
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
          </NavBt>
          <StyledLink to="/">
            <Logo src="/images/nav/needed.png" alt="logo" />
          </StyledLink>
        </NavLeft>
        <TextBox>
          <Menu>
            <StyledLink to="/recruitments?country=all&job_sort=created_at">
              채용
            </StyledLink>
          </Menu>
          <Menu>이벤트</Menu>
          <Menu>
            <StyledLink to="/salary">직군별 연봉</StyledLink>
          </Menu>
          <Menu>
            <StyledLink to="/resume">이력서</StyledLink>
          </Menu>
          <Menu>커뮤니티</Menu>
          <Menu onClick={neededAuth}>
            {neededPlus === true ? (
              <StyledLink to="neededPlus/contents">needed +</StyledLink>
            ) : (
              <StyledLink to="/neededPlus/landing">needed +</StyledLink>
            )}
          </Menu>
          <Menu>AI 합격예측</Menu>
        </TextBox>
        <NavRight>
          <SearchWrap>
            <Search src="/images/nav/search.png" alt="search" />
          </SearchWrap>
          <LogIn />
          <RoundBt>
            {sessionStorage.Authorization ? (
              <StyledLink to="/mypage">마이페이지</StyledLink>
            ) : (
              <StyledLink to="/">기업페이지</StyledLink>
            )}
          </RoundBt>
        </NavRight>
      </NavContainer>
    </Navigation>
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
  margin-right: 4%;
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
  margin-left: 60px;
  margin-right: 60px;
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
  height: 50%;
  display: ${props => (props.modalOpen ? 'display' : 'none')};
`;

const SlideBox = styled.div`
  position: absolute;
  width: 180px;
  height: 280px;
  background-color: white;
  border: 1px solid #e1e2e3;
`;

export default Nav;
