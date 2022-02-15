import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function SideInside({ id, title, url, subNav }) {
  const [subTitle, setSubTitle] = useState(false);

  const showSubMenu = () => {
    setSubTitle(!subTitle);
  };

  return (
    <>
      <StyledLink to={url} onClick={subNav && showSubMenu}>
        <SlideList>
          <Title>{title}</Title>
        </SlideList>
      </StyledLink>
      <SubMenu subTitle={subTitle}>
        {subTitle &&
          subNav.map(list => {
            return (
              <Lists key={id}>
                <SubLink to={list.url}>
                  <Title onClick={subNav && showSubMenu}>{list.title}</Title>
                </SubLink>
              </Lists>
            );
          })}
      </SubMenu>
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SlideList = styled.li`
  list-style: none;
  width: 100%;
  height: 17%;
  color: black;
  padding: 15px 20px;
  cursor: pointer;

  &:hover {
    background-color: #62d9ff;
    font-weight: 900;
  }
  &:active {
  }
`;

const Title = styled.div`
  width: 120px;
  height: 30px;
  color: black;
`;

const SubMenu = styled.div`
  position: absolute;
  top: -1px;
  right: -180px;
  width: 180px;
  height: 250px;
  background-color: #62d9ff;
  display: ${props => (props.subTitle ? 'display' : 'none')};
`;

const SubLink = styled(Link)`
  text-decoration: none;
`;

const Lists = styled.div`
  padding-top: 15px;
  padding-left: 20px;
  &:hover {
    background-color: white;
    font-weight: 900;
  }
  &:active {
  }
`;
export default SideInside;
