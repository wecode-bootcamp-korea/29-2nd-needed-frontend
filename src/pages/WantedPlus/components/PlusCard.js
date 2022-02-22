import React, { useState } from 'react';
import styled from 'styled-components';

function PlusCard({ contents }) {
  const { url, author, title, desc, time, videoDesc, authorDesc } = contents;
  const [isshown, setIsShown] = useState(false);
  return (
    <>
      <PlusCardWrap onClick={() => setIsShown(!isshown)}>
        <CardImgWrap>
          <CardImg alt="wanted+ contents" src={url} />
        </CardImgWrap>
        <CardAuthor>{author}</CardAuthor>
        <CardTitle>{title}</CardTitle>
        <CardDesc>{desc}</CardDesc>
      </PlusCardWrap>
      <PlusContentModal isshown={isshown}>
        <ModalBackground>
          <ModalBlackBackground onClick={() => setIsShown(!isshown)} />
          <ModalBody>
            <ModalContents>
              <ModalImgWrap>
                <Close
                  className="fas fa-times fa-2x"
                  onClick={() => setIsShown(!isshown)}
                />
                <ModalImg alt="contents" src={url} />
              </ModalImgWrap>
              <ModalDetail>
                <ModalAuthor>{author}</ModalAuthor>
                <ModalTitle>{title}</ModalTitle>
                <ModalDesc>{desc}</ModalDesc>
                <ModalTime>{`총 ${time}`}</ModalTime>
              </ModalDetail>
              <ModalMoreDesc>
                <ModalMoreDescTitle>[영상 소개]</ModalMoreDescTitle>
                <div>{videoDesc}</div>
                <ModalMoreDescTitle2nd>[연사 소개]</ModalMoreDescTitle2nd>
                <div>{authorDesc}</div>
              </ModalMoreDesc>
            </ModalContents>
            <ModalButtonWrap>
              <ModalButton>VOD 보러 가기</ModalButton>
            </ModalButtonWrap>
          </ModalBody>
        </ModalBackground>
      </PlusContentModal>
    </>
  );
}
const PlusCardWrap = styled.div`
  width: 25%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const CardImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 4px;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Fonts = styled.div`
  color: ${({ theme }) => theme.fontBlack};
`;

const CardAuthor = styled(Fonts)`
  margin: 19px 0 12px 0;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 500;
  font-size: 14px;
`;

const CardTitle = styled(Fonts)`
  font-size: 16px;
  font-weight: 600;
`;

const CardDesc = styled.div`
  margin: 12px 0 0 0;
  font-size: 13px;
  color: #aaaaaa;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const ModalBack = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
`;

const PlusContentModal = styled(ModalBack)`
  display: ${({ isshown }) => (isshown ? 'block' : 'none')};
  z-index: 1000;
`;

const ModalBlackBackground = styled(ModalBack)`
  background-color: black;
  opacity: 0.4;
`;

const ModalBackground = styled(ModalBack)`
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBody = styled.div`
  position: fixed;
  width: 567px;
  background-color: #fff;
  height: calc(100% - 64px);
`;

const ModalContents = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: calc(100% - 90px);
`;

const ModalImgWrap = styled.div`
  width: 100%;
  height: 317px;
  overflow: hidden;
`;

const Close = styled.i`
  position: absolute;
  right: 18px;
  top: 10px;
  color: rgba(255, 255, 255, 0.9);
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.4));
  cursor: pointer;
`;

const ModalImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ModalDetail = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f4f7;
  width: 100%;
  min-height: 120px;
  padding: 26px 30px 30px;
  color: ${({ theme }) => theme.fontBlack};
`;

const ModalAuthor = styled.div`
  font-size: 14px;
`;

const ModalTitle = styled.div`
  font-size: 20px;
  margin: 10px 0 15px;
  font-weight: 600;
`;

const ModalDesc = styled.div`
  font-size: 14px;
  color: #666;
  font-weight: 600;
`;

const ModalTime = styled.div`
  margin-top: 20px;
  height: 24px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 13px;
  font-weight: 500;
  border-radius: 5px;
  padding: 6px 10px 0;
  align-self: flex-start;
`;

const ModalMoreDesc = styled.div`
  padding: 20px 30px 40px;
  color: ${({ theme }) => theme.fontBlack};
  font-size: 14px;
  line-height: 1.79;
  font-weight: 400;
`;

const ModalMoreDescTitle = styled.div`
  font-weight: 600;
`;

const ModalMoreDescTitle2nd = styled(ModalMoreDescTitle)`
  margin-top: 26px;
`;

const ModalButtonWrap = styled.div`
  width: 100%;
  height: 90px;
  padding: 20px;
`;

const ModalButton = styled.button`
  height: 50px;
  width: 100%;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.themePurple};
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #634fb3;
  }
`;

export default PlusCard;
