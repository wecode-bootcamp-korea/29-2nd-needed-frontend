import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { CATEGORY } from './PROFESSION_CATEGORY';
import { SUBCATEGORY_ID, CAREER_ID, CAREER_ID_TO_STR } from './MYPAGE_IDS';

const EditProfession = ({ info, setIsProfessionEdit, token, setIsUpdated }) => {
  const initialSelectedOptions = {
    category: info.job_category || '',
    subcategory: info.job_subcategory || '',
    years: CAREER_ID_TO_STR[info.career] || '',
    salary: info.salary || '',
  };

  const [selectedOptions, setSelectedOptions] = useState(
    initialSelectedOptions
  );

  const handleSelectBoxChange = e => {
    setSelectedOptions({ ...selectedOptions, [e.target.name]: e.target.value });
  };

  const updateProfessionInfo = () => {
    if (selectedOptions.subcategory === '') {
      return alert('직무를 선택해주세요!');
    }

    const headers = {
      Authorization: token,
    };

    const body = {
      ...info,
      occupation: SUBCATEGORY_ID[selectedOptions.subcategory],
      career: CAREER_ID[selectedOptions.years],
      salary: selectedOptions.salary,
    };

    axios
      .post('http://15.165.203.121:8080/users/profile', body, {
        headers,
      })
      .then(({ status }) => {
        if (status === 204) alert('고객님의 정보가 업데이트 되었습니다✨');
      });

    setIsUpdated(prev => prev + 1);
    setIsProfessionEdit(false);
  };

  const clickCancelBtn = () => {
    setSelectedOptions({
      category: '',
      subcategory: '',
      years: '',
      salary: '',
    });
    setIsProfessionEdit(false);
  };

  return (
    <Profession>
      <Heading>전문분야 설정</Heading>
      <ProfessionInfo>
        <Item>
          <Label>직군</Label>
          <SelectBoxWrap>
            <SelectBox
              value={selectedOptions.category}
              onChange={handleSelectBoxChange}
              name="category"
            >
              <SelectOption disabled> </SelectOption>
              {CATEGORY.map(category => (
                <SelectOption key={category.id}>
                  {category.category}
                </SelectOption>
              ))}
            </SelectBox>
          </SelectBoxWrap>
        </Item>
        <Item>
          <Label>직무</Label>
          <SelectBoxWrap>
            <SelectBox
              value={selectedOptions.subcategory}
              onChange={handleSelectBoxChange}
              name="subcategory"
            >
              <SelectOption> </SelectOption>
              {selectedOptions.category !== '' &&
                CATEGORY.filter(
                  category => category.category === selectedOptions.category
                )[0].subcategory.map(subcategory => (
                  <SelectOption key={subcategory.id}>
                    {subcategory.subcategory}
                  </SelectOption>
                ))}
            </SelectBox>
          </SelectBoxWrap>
        </Item>
        <Item>
          <Label>경력</Label>
          <SelectBoxWrap>
            <SelectBox
              value={selectedOptions.years}
              onChange={handleSelectBoxChange}
              name="years"
            >
              <SelectOption disabled> </SelectOption>
              <SelectOption>신입</SelectOption>
              <SelectOption>1년</SelectOption>
              <SelectOption>2년</SelectOption>
              <SelectOption>3년</SelectOption>
              <SelectOption>4년</SelectOption>
              <SelectOption>5년</SelectOption>
              <SelectOption>6년</SelectOption>
              <SelectOption>7년</SelectOption>
              <SelectOption>8년</SelectOption>
              <SelectOption>9년</SelectOption>
              <SelectOption>10년 이상</SelectOption>
            </SelectBox>
          </SelectBoxWrap>
        </Item>
        <Item>
          <Label>연봉</Label>
          <SelectBoxWrap noarrow>
            <InputBox
              type="number"
              value={selectedOptions.salary}
              onChange={handleSelectBoxChange}
              name="salary"
            />
          </SelectBoxWrap>
        </Item>
      </ProfessionInfo>
      <ButtonWrap>
        <Button onClick={updateProfessionInfo}>저장</Button>
        <Button onClick={clickCancelBtn}>취소</Button>
      </ButtonWrap>
    </Profession>
  );
};

const Profession = styled.div`
  display: flex;
  flex-direction: column;
  margin: -1px;
  border: 2px solid ${({ theme }) => theme.themePurple};
  border-radius: 5px;
  background-color: #fff;
  padding: 34px 0 34px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
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

const SelectBoxWrap = styled.div`
  position: relative;
  width: 80%;

  ${({ noarrow, theme }) =>
    !noarrow
      ? `&::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 20px;
    border-top: 6px solid ${theme.fontBlack};
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    transform: translateY(-50%);
  }`
      : `&::after {
    content: '만원';
    position: absolute;
    color: #999;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);}`}
`;

const SelectBox = styled.select`
  width: 100%;
  height: 52px;
  padding: 15px 0 18px 18px;
  background-color: #f8f8fa;
  border: none;
  appearance: none;
  font-size: 14px;
`;

const InputBox = styled.input`
  width: 100%;
  height: 52px;
  padding: 15px 0 18px 18px;
  font-size: 14px;
  background-color: #f8f8fa;
  border: none;
  appearance: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  align-self: flex-end;
  margin: 12px 6px 0;
  padding: 10px 32px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.themePurple};
  color: #fff;
  transition: filter 200ms ease;
  cursor: pointer;

  &:hover {
    transition: filter 200ms ease;
    filter: brightness(80%);
  }

  &:last-child {
    margin-right: 32px;
    background-color: ${({ theme }) => theme.borderGray};
    color: #333;
  }
`;

const SelectOption = styled.option``;

export default EditProfession;
