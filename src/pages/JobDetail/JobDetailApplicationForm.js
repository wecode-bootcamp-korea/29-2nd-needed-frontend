import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { api } from '../../api/config';

const JobDetailApplicationForm = ({ setIsApplicationFormOpen }) => {
  const params = useParams();

  const [information, setInformation] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [fetchedUserInfo, setFetchedUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [resumes, setResumes] = useState({});
  const [selectedFile, setSelectedFile] = useState([]);

  // initial 세팅하는 useEffect
  useEffect(() => {
    const initialInformation = {
      name: fetchedUserInfo.name || '',
      email: fetchedUserInfo.email || '',
      phone: fetchedUserInfo.phone_number || '',
    };

    setInformation(initialInformation);
  }, [
    fetchedUserInfo.name,
    fetchedUserInfo.email,
    fetchedUserInfo.phone_number,
  ]);

  // 개인 정보 가져오는 useEffect
  useEffect(() => {
    const token = sessionStorage.getItem('Authorization');

    axios
      .get(api.fetchProfile, {
        headers: {
          Authorization: token,
        },
      })
      .then(res => {
        setFetchedUserInfo(res.data.result);
      });
  }, []);

  // Resume들 불러오는 useEffect
  useEffect(() => {
    const token = sessionStorage.getItem('Authorization');

    axios
      .get(api.fetchResume, {
        headers: {
          Authorization: token,
        },
      })
      .then(res => {
        setResumes(res.data.results);
      });
  }, []);

  const handleInputChange = e => {
    setInformation({ ...information, [e.target.name]: e.target.value });
  };

  const selectFileToUpload = e => {
    if (!selectedFile.includes(e.target.getAttribute('name'))) {
      setSelectedFile(prev => [...prev, e.target.getAttribute('name')]);
    } else {
      setSelectedFile(prev =>
        prev.filter(id => id !== e.target.getAttribute('name'))
      );
    }
  };

  const verifyAllFields = () => {
    return !!(
      information.name &&
      information.email &&
      information.phone &&
      selectedFile.length !== 0
    );
  };

  const submitApplication = () => {
    if (verifyAllFields) {
      axios
        .post(
          `${api.fetchApplication}/${params.id}`,
          { resume_id: selectedFile.map(x => Number(x)) },
          {
            headers: { Authorization: sessionStorage.getItem('Authorization') },
          }
        )
        .then(res => {
          if (res.data.message === 'SUCCESS') {
            alert('지원 완료!');
          } else {
            alert('이미 지원한 공고입니다.');
          }
        });
    }

    setSelectedFile([]);
    setIsApplicationFormOpen(false);
  };

  return (
    <Application>
      <ApplicationHeader>
        <h1>지원하기</h1>
        <CloseBtn onClick={() => setIsApplicationFormOpen(false)}>
          뒤로
        </CloseBtn>
      </ApplicationHeader>

      <Information>
        <H2Titles>지원 정보</H2Titles>
        <InformationForm>
          <div>
            <Label>이름</Label>
            <Input
              type="text"
              value={information.name}
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label>이메일</Label>
            <Input
              type="email"
              value={information.email}
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label>휴대폰 번호</Label>
            <Input
              type="number"
              value={information.phone}
              name="phone"
              onChange={handleInputChange}
            />
          </div>
        </InformationForm>
      </Information>

      <FileUpload>
        <H2Titles>첨부파일</H2Titles>
        {resumes.length > 0 ? (
          resumes.map((file, index) => (
            <File
              name={file.id}
              key={index}
              onClick={selectFileToUpload}
              selected={selectedFile.includes(`${file.id}`)}
            >
              <i className="fa-regular fa-file" />
              {file.name}
            </File>
          ))
        ) : (
          <SideDesc>
            업로드하신 이력서가 없습니다! <br /> 이력서 탭으로 이동하신 후
            업로드를 해주세요
          </SideDesc>
        )}
        {/* TODO: 파일 업로드는 추가구현입니다. */}
        {/* <button>
          <span>파일 업로드</span>
          <UploadInput onChange={handleFileUpload} />
        </button> */}
        <SideDesc>모든 필드를 입력해주시고, 파일을 선택해주세요.</SideDesc>
      </FileUpload>

      <ApplicationFooter>
        <PostBtn active={verifyAllFields()} onClick={submitApplication}>
          제출하기
        </PostBtn>
      </ApplicationFooter>
    </Application>
  );
};

const Application = styled.div`
  position: sticky;
  top: 70px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 3px;
  font-size: 15px;
`;

const ApplicationHeader = styled.header`
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.borderGray};
`;

const CloseBtn = styled.button`
  border: none;
  background-color: #fff;
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 16px;
  font-weight: 500;
  color: #999;
  cursor: pointer;
`;

const Information = styled.div`
  padding: 20px 20px;
`;

const H2Titles = styled.h2`
  padding-left: 16px;
  margin-left: -20px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  border-left: 2px solid ${({ theme }) => theme.themePurple};
`;

const File = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 3px;
  margin-bottom: 12px;
  padding: 16px;
  text-align: center;
  ${({ selected, theme }) =>
    selected &&
    `border: 1px solid ${theme.themePurple}; background-color: #F6F3FF;`}

  i {
    margin-right: 8px;
  }
`;

const InformationForm = styled.div`
  div {
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.borderGray};
    font-size: 14px;
    font-weight: 500;
  }
`;

const Label = styled.h3`
  width: 80px;
`;

const Input = styled.input`
  flex-grow: 1;
  border: none;
  height: 50px;

  &:focus {
    outline: none;
  }

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const FileUpload = styled.div`
  padding: 20px;

  button {
    position: relative;
    height: 50px;
    margin-top: 18px;
    border: 1px solid ${({ theme }) => theme.borderGray};
    border-radius: 25px;
    background-color: #fff;

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${({ theme }) => theme.fontGray};
      font-weight: 500;
    }
  }
`;

const SideDesc = styled.aside`
  margin-top: 36px;
  font-size: 12px;
  color: #999;
  text-align: center;
  line-height: 1.4;
`;

// TODO : 파일 업로드는 추가구현입니다
// const UploadInput = styled.input.attrs(props => ({
//   type: 'file',
// }))`
//   height: 100%;
//   opacity: 0;
// `;

const ApplicationFooter = styled.div`
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme.borderGray};
`;

const PostBtn = styled.button`
  width: 100%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 25px;
  background-color: ${({ active, theme }) =>
    active ? theme.themePurple : '#EFEFEF'};
  color: ${({ active, theme }) => (active ? '#fff' : '#999')};
`;

export default JobDetailApplicationForm;
