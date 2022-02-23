import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'react-modal';
import SignUp from './SignUp';
const { Kakao } = window;

function Login() {
  const [modalOpen, setModalOpen] = useState(false);

  const [profile, setProfile] = useState();

  //modal
  const modalHandler = () => {
    setModalOpen(prev => !prev);
  };

  //token
  const logOutHandler = () => {
    setModalOpen(prev => !prev);
    if (sessionStorage.getItem('Authorization')) {
      sessionStorage.removeItem('Authorization');
      alert('로그아웃 되었습니다.');
      navigate('/');
      return modalHandler();
    }
  };
  const navigate = useNavigate();

  const kakaoLoginClickHandler = () => {
    Kakao.Auth.loginForm({
      success: function (authObj) {
        fetch('http://15.165.203.121:8080/users/signin/kakao/callback', {
          method: 'GET',
          headers: {
            'access-token': authObj.access_token,
          },
        })
          .then(res => res.json())
          .then(res => {
            if (!sessionStorage.token) {
              sessionStorage.setItem('Authorization', res.access_token);
            }
            if (res.message === 'SUCCESS') {
              alert('needed에 오신 걸 환영합니다!');
            } else {
              alert('로그인에 실패했습니다.');
              navigate('/');
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  Kakao.API.request({
    url: '/v2/user/me',
    data: {
      property_keys: ['properties.thumbnail_image'],
    },
    success: function (response) {
      const thumbNail = response.properties.thumbnail_image;
      setProfile(thumbNail);
    },
    fail: function (error) {},
  });

  return (
    <>
      <HandleModar onClick={logOutHandler}>
        {!sessionStorage.getItem('Authorization') ? (
          '로그인'
        ) : (
          <Profile src={profile} alt="profile" />
        )}
      </HandleModar>

      <Modal
        isOpen={modalOpen}
        onRequestClose={modalHandler}
        style={modalStyle}
      >
        <ModalTop>
          <Logo src="/images/login/needed.png" alt="logo" />
          <ModalOffBt onClick={modalHandler}>
            <ModalOut src="/images/login/letter-x.png" alt="x" />
          </ModalOffBt>
        </ModalTop>
        <ModalBody>
          <Title>
            직장인을 위한 <br />
            커리어 플랫폼, 니디드!
          </Title>
          <Descript>
            커리어의 성장과 행복을 위한 여정 <br />
            지금 니디드에서 시작하세요.
          </Descript>
          <SocialLog>
            <SocialWrap>
              <SocialBtWrapFirst onClick={kakaoLoginClickHandler}>
                <SocialLogo src="/images/login/speech-bubble.png" alt="kakao" />
              </SocialBtWrapFirst>
              <SocailTitle>Kakao</SocailTitle>
            </SocialWrap>
            <SocialWrap>
              <SocialBtWrapSecond>
                <SocialLogo src="/images/login/google.png" alt="google" />
              </SocialBtWrapSecond>
              <SocailTitle>Google</SocailTitle>
            </SocialWrap>
          </SocialLog>
          <SignUp />
        </ModalBody>
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
    position: 'fixed',
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

const Logo = styled.img`
  display: flex;
  justify-content: center;
  margin-left: 145px;
  width: 70px;
  height: 16px;
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

const Title = styled.div`
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  line-height: 1.54;
`;

const Descript = styled.div`
  margin-top: 16px;
  line-height: 1.5;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: #666;
`;

const SocialLog = styled.div`
  width: 345px;
  height: 84px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const SocialWrap = styled.div`
  width: 70px;
  height: 80px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SocialBtWrapFirst = styled.button`
  width: 56px;
  height: 56px;
  margin: 0 auto 8px;
  background-color: yellow;
  border-radius: 28px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SocialBtWrapSecond = styled.button`
  width: 56px;
  height: 56px;
  margin: 0 auto 8px;
  background-color: white;
  border-radius: 28px;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SocialLogo = styled.img`
  width: 23px;
  height: 23px;
`;

const SocailTitle = styled.div`
  width: 60px;
  height: 19px;
  text-align: center;
`;

const HandleModar = styled.button`
  border: none;
  background-color: transparent;
  font-size: 14px;
  cursor: pointer;
`;

const Profile = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 60%;
`;

export default Login;
