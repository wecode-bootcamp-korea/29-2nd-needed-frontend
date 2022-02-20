import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MyPageApplication from './MyPageApplication';
import MyPagePersonal from './MyPagePersonal';
import MyPageProfession from './MyPageProfession';
import EditProfession from './EditProfession';

const MOCK_DATA = {
  src: 'https://k.kakaocdn.net/dn/bsQORn/btrr161cMhd/CqyTrjC6QdjgEXWnWp0BY1/img_110x110.jpg',
  userName: '윤남주',
  email: 'southpoley@gmail.com',
  tel: '010-1234-5678',
  isSubscribed: true,
  payday: 22,
  application: [
    { id: 1, label: '지원 완료', count: 2 },
    { id: 2, label: '서류 통과', count: 0 },
    { id: 3, label: '최종 합격', count: 0 },
    { id: 4, label: '불합격', count: 18 },
  ],
  profession: {
    category: '',
    subcategory: '',
    years: '',
    salary: '',
  },
};

function MyPage() {
  // TODO : token으로 유저 정보 get할 예정
  useEffect(() => {
    let token = sessionStorage.getItem('token');
    axios.get('http://15.165.203.121:8080/users/profile', {
      headers: {
        Authorization: token,
      },
    });
    //     .then(res => console.log(res));
  }, []);

  const [isProfessionEdit, setIsProfessionEdit] = useState(false);

  return (
    <BackgroundWrap>
      <My>
        <Heading>MY 니디드</Heading>
        <FlexRowWrap>
          <MyPagePersonal info={MOCK_DATA} />
          <FlexColumnWrap>
            <MyPageApplication info={MOCK_DATA} />
            {isProfessionEdit ? (
              <EditProfession
                info={MOCK_DATA}
                setIsProfessionEdit={setIsProfessionEdit}
              />
            ) : (
              <MyPageProfession
                info={MOCK_DATA}
                setIsProfessionEdit={setIsProfessionEdit}
              />
            )}
          </FlexColumnWrap>
        </FlexRowWrap>
      </My>
    </BackgroundWrap>
  );
}

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
