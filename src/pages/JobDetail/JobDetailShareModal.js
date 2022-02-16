import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const JobDetailShareModal = ({ isShareOpen, handleShareModal }) => {
  const link = useRef();
  const modal = useRef();
  const closeBtn = useRef();

  const [isCopied, setIsCopied] = useState(false);

  const toClipboard = () => {
    if (!isCopied) {
      navigator.clipboard.writeText(link.current.innerHTML);
      setIsCopied(true);
    }
  };

  const closeModal = e => {
    if (!modal.current.contains(e.target) || e.target === closeBtn.current) {
      handleShareModal();
      setIsCopied(false);
    }
  };

  return (
    <ModalWrap isShareOpen={isShareOpen} onClick={closeModal}>
      <ShareModal ref={modal}>
        <ModalDesc>
          <h1>공유하기</h1>
          <i
            className="fa-solid fa-xmark"
            ref={closeBtn}
            onClick={closeModal}
          />
          <p>
            이 포지션과 어울리는 사람을 알고 있다면, 공유해주세요!
            <br />
            공유 후 추천까지 완료하면,
            <strong> 지원자 최종합격시 보상금을 지급해드립니다.</strong>
          </p>
        </ModalDesc>
        <LinkShare>
          <h1>링크 공유</h1>
          <LinkButton>
            <span className="url" ref={link}>
              {window.location.href}
            </span>
            <span className="copy" onClick={toClipboard}>
              {isCopied ? <i className="fa-solid fa-check" /> : '복사'}
            </span>
          </LinkButton>
          {isCopied && <h2>복사되었습니다!</h2>}
        </LinkShare>
      </ShareModal>
    </ModalWrap>
  );
};

const ModalWrap = styled.div`
  display: ${({ isShareOpen }) => (isShareOpen ? 'block' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1100;
`;

const ShareModal = styled.div`
  position: absolute;
  border-radius: 5px;
  background-color: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
`;

const ModalDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.borderGray};

  .fa-xmark {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 16px;
    cursor: pointer;
  }

  h1 {
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 40px;
  }

  p {
    text-align: center;
    font-size: 14px;
    line-height: 23px;
    color: ${({ theme }) => theme.fontGray};

    strong {
      font-weight: 600;
    }
  }
`;

const LinkShare = styled.div`
  padding: 20px;
  font-size: 14px;

  h1 {
    font-weight: 400;
    margin-bottom: 12px;
  }

  h2 {
    margin-top: 12px;
    margin-right: 2px;
    font-size: 12px;
    color: ${({ theme }) => theme.themePurple};
    font-weight: 500;
    text-align: right;
  }
`;

const LinkButton = styled.div`
  width: 100%;
  text-align: left;
  font-size: 14px;

  .url {
    display: inline-block;
    width: 80%;
    padding: 16px 0 16px 16px;
    border: 1px solid ${({ theme }) => theme.borderGray};
    border-radius: 5px 0 0 5px;
  }

  .copy {
    display: inline-block;
    border: 1px solid ${({ theme }) => theme.borderGray};
    border-left: none;
    border-radius: 0 5px 5px 0;
    text-align: center;
    width: 20%;
    padding: 16px 0;
    color: ${({ theme }) => theme.themePurple};
    font-weight: 500;
  }
`;

export default JobDetailShareModal;
