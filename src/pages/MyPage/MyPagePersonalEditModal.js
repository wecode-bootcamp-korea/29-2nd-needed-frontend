import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const MyPagePersonalEditModal = ({ info, changeInfo, setChangeInfo }) => {
  const modal = useRef();
  const closeBtn = useRef();

  const [newInfo, setNewInfo] = useState({ name: '', email: '', tel: '' });

  const handleInputChange = e => {
    setNewInfo({ ...newInfo, [e.target.name]: e.target.value });
  };

  const handleModalClose = e => {
    if (!modal.current.contains(e.target) || e.target === closeBtn.current) {
      setNewInfo({ name: '', email: '', tel: '' });
      setChangeInfo(false);
    }
  };

  const updatePersonalInfo = () => {
    setChangeInfo(false);
  };

  return (
    <Background changeInfo={changeInfo} onClick={handleModalClose}>
      <EditInfoModal ref={modal}>
        <EditInfoHeading>기본정보 수정</EditInfoHeading>
        <EditInfoSubHeading>
          지원 결과 또는 추천 포지션 정보를 받아볼 이메일/연락처 정보
          입력해주세요.
        </EditInfoSubHeading>
        <EditInfoInputWrap>
          <EditInfoItem>
            <EditInfoTitle>이름</EditInfoTitle>
            <EditInfoInput
              name="name"
              value={newInfo.name}
              onChange={handleInputChange}
            />
          </EditInfoItem>
          <EditInfoItem>
            <EditInfoTitle>이메일</EditInfoTitle>
            <EditInfoInput
              name="email"
              type="email"
              value={newInfo.email}
              onChange={handleInputChange}
            />
          </EditInfoItem>
          <EditInfoItem>
            <EditInfoTitle>휴대폰 번호</EditInfoTitle>
            <EditInfoInput
              name="tel"
              type="number"
              value={newInfo.tel}
              onChange={handleInputChange}
            />
          </EditInfoItem>
        </EditInfoInputWrap>
        <Buttons>
          <SaveButton onClick={updatePersonalInfo}>저장</SaveButton>
          <CloseButton ref={closeBtn} onClick={handleModalClose}>
            취소
          </CloseButton>
        </Buttons>
      </EditInfoModal>
    </Background>
  );
};

const Background = styled.div`
  display: ${props => (props.changeInfo ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const EditInfoModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  max-width: 800px;
  min-width: 500px;
  padding: 36px;
  background-color: #fff;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.themePurple};
  color: ${({ theme }) => theme.fontBlack};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  transform: translate(-50%, -50%);
`;

const EditInfoHeading = styled.h1`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
`;

const EditInfoSubHeading = styled.h2`
  margin-bottom: 32px;
  color: #9a9a9a;
`;

const EditInfoInputWrap = styled.div``;

const EditInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const EditInfoTitle = styled.h3`
  width: 20%;
  margin-right: 24px;
  color: #9a9a9a;
  font-weight: 500;
`;

const EditInfoInput = styled.input`
  flex-grow: 1;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.borderGray};
  font-size: 16px;

  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SaveButton = styled.button`
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

const CloseButton = styled.button`
  margin: 12px 6px 0;
  padding: 10px 32px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.borderGray};
  transition: filter 200ms ease;
  cursor: pointer;

  &:hover {
    transition: filter 200ms ease;
    filter: brightness(80%);
  }
`;

export default MyPagePersonalEditModal;
