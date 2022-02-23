import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MyPageApplication from './MyPageApplication';
import MyPagePersonal from './MyPagePersonal';
import MyPageProfession from './MyPageProfession';
import EditProfession from './EditProfession';
import { api } from '../../api/config';

const MyPage = () => {
  const [isProfessionEdit, setIsProfessionEdit] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [isUpdated, setIsUpdated] = useState(0);

  const token = sessionStorage.getItem('Authorization');

  useEffect(() => {
    axios
      .get(api.fetchProfile, {
        headers: {
          Authorization: token,
        },
      })
      .then(res => {
        setUserInfo(res.data.result);
      });
  }, [token, isUpdated]);

  return (
    <BackgroundWrap>
      <My>
        <Heading>MY 니디드</Heading>
        <FlexRowWrap>
          <MyPagePersonal
            info={userInfo}
            token={token}
            setIsUpdated={setIsUpdated}
          />
          <FlexColumnWrap>
            <MyPageApplication info={userInfo} />
            {isProfessionEdit ? (
              <EditProfession
                info={userInfo}
                setIsProfessionEdit={setIsProfessionEdit}
                token={token}
                setIsUpdated={setIsUpdated}
              />
            ) : (
              <MyPageProfession
                info={userInfo}
                setIsProfessionEdit={setIsProfessionEdit}
              />
            )}
          </FlexColumnWrap>
        </FlexRowWrap>
      </My>
    </BackgroundWrap>
  );
};

const BackgroundWrap = styled.div`
  padding: 90px 0;
  background-color: #f8f8f8;
`;

const My = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  color: ${({ theme }) => theme.fontBlack};
`;

const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
`;

const FlexRowWrap = styled.div`
  display: flex;
`;

const FlexColumnWrap = styled.main`
  display: flex;
  flex-direction: column;
  width: calc(75% - 20px);
`;

export default MyPage;
