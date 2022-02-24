import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MyPagePersonalEditModal from './MyPagePersonalEditModal';

const MyPagePersonal = ({ info, token, setIsUpdated }) => {
  const navigate = useNavigate();

  const [changeInfo, setChangeInfo] = useState(false);

  const goToWantedPlus = () => {
    if (info.is_subscription) {
      navigate('/neededPlus/contents');
    } else {
      navigate('/neededPlus/landing');
    }
  };

  const getNextPayday = subscriptionDate => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const dayOfSubscriptionDate = Number(subscriptionDate.slice(8, 10));

    if (day < dayOfSubscriptionDate) {
      return `${year}년 ${month}월 ${dayOfSubscriptionDate}일`;
    } else if (day === dayOfSubscriptionDate) {
      return '오늘 🥳';
    } else {
      return `${year}년 ${month + 1}월 ${dayOfSubscriptionDate}일`;
    }
  };

  return (
    <Personal>
      <Info onClick={() => setChangeInfo(true)}>
        <ProfileImgWrap src={info.profile_image} />
        <UserName>{info.name}</UserName>
        <Email>{info.email ? info.email : '이메일 없음'}</Email>
        <Phone>
          {info.phone_number ? info.phone_number : '휴대폰 번호 없음'}
        </Phone>
      </Info>

      <WantedPlus>
        <h2>MY Needed+</h2>
        <WantedPlusBadge
          isSubscribed={info.is_subscription}
          onClick={goToWantedPlus}
        >
          {info.is_subscription ? 'Needed+ 구독 중' : 'Needed+ 구독하기'}
        </WantedPlusBadge>
        {info.is_subscription ? (
          <Subscription>
            <SubscriptionInfo>
              <Label>결제 금액</Label>
              <Content>
                13,000원<small> / 월</small>
              </Content>
            </SubscriptionInfo>
            <SubscriptionInfo>
              <Label>다음 결제일</Label>
              <Content>{getNextPayday(info.subscription_date)}</Content>
            </SubscriptionInfo>
          </Subscription>
        ) : (
          <Suggestion>
            직군별 최고의 교육을 한곳에서 <br />볼 수 있는 <em>니디드+</em>를
            이용해보세요
            <br />
            <em>700+개의 영상</em>을 항상 볼 수 있습니다.
          </Suggestion>
        )}
      </WantedPlus>

      <MyPagePersonalEditModal
        info={info}
        changeInfo={changeInfo}
        setChangeInfo={setChangeInfo}
        token={token}
        setIsUpdated={setIsUpdated}
      />
    </Personal>
  );
};

const Personal = styled.aside`
  width: 25%;
  height: fit-content;
  margin-right: 20px;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 5px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 42px 20px;
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ProfileImgWrap = styled.div`
  width: 77px;
  height: 77px;
  border-radius: 50%;
  overflow: hidden;
  background-image: url(${({ src }) =>
    src
      ? src
      : 'https://i.pinimg.com/564x/18/63/fc/1863fc9e64042a9578f98d74b91f4b8a.jpg'});
  background-position: center;
  background-size: cover;
`;

const UserName = styled.h2`
  margin-top: 30px;
  font-size: 17px;
  font-weight: 500;
`;

const Email = styled.p`
  margin-top: 20px;
  font-size: 13px;
  color: ${({ theme }) => theme.fontGray};
`;

const Phone = styled(Email)`
  margin-top: 12px;
`;

const WantedPlus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  border-top: 1px solid ${({ theme }) => theme.borderGray};

  h2 {
    font-weight: 500;
  }
`;

const WantedPlusBadge = styled.div`
  display: inline-block;
  margin: 24px 0 32px;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 28px;
  line-height: 18px;

  color: ${({ isSubscribed, theme }) =>
    isSubscribed ? '#fff' : theme.themePurple}} ;
  background-color: ${({ isSubscribed, theme }) =>
    isSubscribed ? theme.themePurple : '#fff'}} ;
  border: 2px solid ${({ theme }) => theme.themePurple};
  transition: all 200ms ease;
  cursor: pointer;

  ${({ isSubscribed }) =>
    isSubscribed
      ? `&:hover {
    background-color: #866dec;
    border-color: #866dec;
    transition: all 200ms ease;
  }`
      : `&:hover {
    border-color: #866dec;
    color: #866dec;
    box-shadow: 0px 0px 8px rgba(159, 135, 255, 0.3);
    cursor: pointer;
    transition: all 200ms ease;`}
`;

const Subscription = styled.div`
  width: 100%;
`;

const SubscriptionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  padding: 0 6px;
  font-size: 13px;

  &:last-child {
    margin-bottom: 8px;
  }
`;

const Label = styled.div`
  font-weight: 600;
`;

const Content = styled.div`
  small {
    font-size: 11px;
  }
`;

const Suggestion = styled.div`
  padding: 0 6px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;

  em {
    color: ${({ theme }) => theme.themePurple};
    font-weight: 500;
  }
`;

export default MyPagePersonal;
