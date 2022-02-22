import React from 'react';

function Login() {
  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = () => {
    setModalOpen(prev => !prev);
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
              sessionStorage.setItem('token', res.access_token);
            }
            if (res.message === 'SUCCESS') {
              alert('needed에 오신 걸 환영합니다!');
              navigate('/');
              modalHandler();
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

  return (
    <>
      <HandleModar onClick={modalHandler}>회원가입/로그인</HandleModar>
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
        </ModalBody>
      </Modal>
    </>
  );
}

export default Login;
