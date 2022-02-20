import React from 'react';
import styled from 'styled-components';

const MyPageProfession = ({ info, setIsProfessionEdit }) => {
  return (
    <Profession>
      <Heading>전문분야</Heading>
      <ProfessionInfo>
        <Item>
          <Label>직군</Label>
          <Content>{info.profession.category}</Content>
        </Item>
        <Item>
          <Label>직무</Label>
          <Content>{info.profession.subcategory}</Content>
        </Item>
        <Item>
          <Label>경력</Label>
          <Content>{info.profession.years}</Content>
        </Item>
        <Item>
          <Label>연봉</Label>
          <Content currency>{info.profession.salary}</Content>
        </Item>
      </ProfessionInfo>
      <ModifyBtn onClick={() => setIsProfessionEdit(true)}>수정</ModifyBtn>
    </Profession>
  );
};

const Profession = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 5px;
  background-color: #fff;
  padding: 34px 0 34px;
`;

const Heading = styled.div`
  padding: 0 32px 32px;
  font-size: 18px;
  font-weight: 500;
`;

const ProfessionInfo = styled.div`
  padding: 0 32px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 28px;

  &:last-child {
    margin-bottom: 14px;
  }
`;

const Label = styled.div`
  width: 20%;
  color: #999;
`;

const Content = styled.div`
  position: relative;
  width: 80%;
  height: 52px;
  padding: 18px 0 18px 18px;
  background-color: #f8f8fa;

  ${({ currency }) =>
    currency &&
    `&::after {
      content: '만원';
      position: absolute;
      color: #999;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);}
    }
  `}
`;

const ModifyBtn = styled.button`
  align-self: flex-end;
  margin: 12px 32px 0;
  padding: 10px 32px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.borderGray};
  transition: background-color 200ms ease;
  cursor: pointer;

  &:hover {
    background-color: #d7d7d7;
    transition: background-color 200ms ease;
  }
`;

export default MyPageProfession;
