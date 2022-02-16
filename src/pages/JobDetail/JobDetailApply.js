import React from 'react';
import styled from 'styled-components';

const JobDetailApply = ({
  reward,
  setIsApplicationFormOpen,
  isShareOpen,
  handleShareModal,
}) => {
  return (
    <Apply isShareOpen={isShareOpen}>
      <div className="flexWrap spaceBetween">
        <h1>채용보상금</h1>
        <ShareButton onClick={handleShareModal}>
          <i className="fa-solid fa-share-nodes" />
        </ShareButton>
      </div>

      <div className="flexWrap">
        <Reward>
          <Receiver>추천인</Receiver>
          <RewardAmount>{(reward / 2).toLocaleString()}원</RewardAmount>
        </Reward>
        <Reward>
          <Receiver>지원자</Receiver>
          <RewardAmount>{(reward / 2).toLocaleString()}원</RewardAmount>
        </Reward>
      </div>

      <ApplyButton onClick={() => setIsApplicationFormOpen(true)}>
        지원하기
      </ApplyButton>
    </Apply>
  );
};

const Apply = styled.div`
  position: sticky;
  top: 70px;
  padding: 24px 20px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 3px;
  font-size: 15px;

  h1 {
    font-weight: 600;
  }

  .flexWrap {
    display: flex;
    margin-bottom: 32px;
  }

  .spaceBetween {
    justify-content: space-between;
    margin-bottom: 18px;
  }
`;

const ShareButton = styled.button.attrs({ type: 'button' })`
  width: 42px;
  height: 42px;
  color: ${({ theme }) => theme.themePurple};
  font-size: 18px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
`;

const Reward = styled.div`
  width: 50%;
`;

const Receiver = styled.h2`
  color: #999;
  font-size: 14px;
  margin-bottom: 8px;
`;

const RewardAmount = styled.span`
  font-weight: 500;
`;

const ApplyButton = styled.button.attrs({ type: 'button' })`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.themePurple};
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
`;

export default JobDetailApply;
