import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
const { Kakao } = window;

function Login() {
  const [modalOpen, setModalOpen] = useState(false);
  const [nickName, setnickName] = useState();
  const [email, setEmail] = useState();
  const [signupIn, setSignupIn] = useState({
    nickName: '',
    phone: '',
    email: '',
  });

  function handleChangeState({ target }) {
    const { name, value } = target;
    setSignupIn({ ...signupIn, [name]: value });
  }

  const ModalHandler = () => {
    setModalOpen(prev => !prev);
  };

  const signUpSubmit = () => {
    if (sessionStorage.Authorization) {
      fetch('http://15.165.203.121:8080/users/profile', {
        method: 'POST',
        headers: {
          Authorization: sessionStorage.getItem('Authorization'),
        },
        body: JSON.stringify({
          phone_number: signupIn.phone,
        }),
      })
        .then(response => response.json())
        .then(result =>
          result.message === 'SUCCESS'
            ? alert('회원가입성공')
            : console.info('결과: ', result)
        );
    } else if (!sessionStorage.Authorization) {
      alert('카카오로그인을 해주세요');
    }
  };

  Kakao.API.request({
    url: '/v2/user/me',
    data: {
      property_keys: ['properties.nickname', 'kakao_account.email'],
    },
    success: function (response) {
      const nickName = response.properties.nickname;
      setnickName(nickName);
      const email = response.kakao_account.email;
      setEmail(email);
    },
    fail: function (error) {},
  });

  return (
    <>
      <HandleSignUp onClick={ModalHandler} />
      <Modal
        isOpen={modalOpen}
        onRequestClose={ModalHandler}
        style={modalStyle}
      >
        <ModalTop>
          <SignUp>회원가입</SignUp>
          <ModalOffBt onClick={ModalHandler}>
            <ModalOut
              src="/images/signUp/free-icon-letter-x-109602.png"
              alt="x"
            />
          </ModalOffBt>
        </ModalTop>
        <ModalBody>
          <InputWrap>
            <TitleTag>이름</TitleTag>
            <SignUpInput name="nickName" value={nickName} />
          </InputWrap>
          <InputWrap>
            <TitleTag>휴대폰 번호</TitleTag>
            <SignUpInput
              name="phone"
              placeholder="핸드폰번호를 입력해 주세요."
              onChange={handleChangeState}
            />
          </InputWrap>
          <InputWrap>
            <TitleTag>이메일</TitleTag>
            <SignUpInput name="email" value={email} />
          </InputWrap>
        </ModalBody>
        <BtWrap>
          <SignUpBt onClick={signUpSubmit}>완료</SignUpBt>
        </BtWrap>
      </Modal>
    </>
  );
}

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(230, 230, 230, 0.45)',
    zIndex: 10,
  },

  content: {
    positions: 'fixed',
    display: 'flex',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '400px',
    height: '420px',
    zIndex: 10,
  },
};

const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  width: 385px;
  height: 54px;
`;

const SignUp = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 145px;
  font-size: 16px;
`;

const ModalOffBt = styled.button`
  display: flex;
  justify-content: center;
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ModalOut = styled.img`
  display: flex;
  width: 15px;
  height: 15px;
  justify-content: end;
`;

const ModalBody = styled.div`
  width: 385px;
  height: 626px;
  padding: 20px;
`;

const InputWrap = styled.div`
  position: relative;
  padding-bottom: 22px;
`;

const SignUpInput = styled.input`
  width: 100%;
  padding: 0 15px;
  margin-top: 10px;
  height: 50px;
  font-size: 15px;
  border-radius: 5px;
  border: 1px solid #e1e2e3;
  color: #333;
`;

const TitleTag = styled.label`
  font-size: 14px;
`;

const SignUpBt = styled.button`
  background-color: #62d9ff;
  border-color: transparent;
  color: white;
  cursor: pointer;
  width: 100%;
  height: 54px;
  border-radius: 27px;
  font-size: 16px;
  font-weight: 600;
`;

const BtWrap = styled.div`
  height: 70px;
  width: 100%;
`;

const HandleSignUp = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export default Login;
