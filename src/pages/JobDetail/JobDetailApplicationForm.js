import React, { useState } from 'react';
import styled from 'styled-components';

const JobDetailApplicationForm = ({ setIsApplicationFormOpen }) => {
  const [information, setInformation] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [uploadedFile, setUploadedFile] = useState('');

  const handleInputChange = e => {
    setInformation({ ...information, [e.target.name]: e.target.value });
  };

  const handleFileUpload = e => {
    setUploadedFile(e.target.files[0]);
  };

  const verifyAllFields = () => {
    return !!(
      uploadedFile &&
      information.name &&
      information.email &&
      information.phone
    );
  };

  const submitApplication = () => {
    if (verifyAllFields()) {
      alert('지원 완료!');
      setInformation({
        name: '',
        email: '',
        phone: '',
      });
      setUploadedFile('');
      setIsApplicationFormOpen(false);
    }
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
        <button>
          <span>{uploadedFile ? uploadedFile.name : '파일 업로드'}</span>
          <UploadInput onChange={handleFileUpload} />
        </button>
        <SideDesc>하나의 파일만 업로드할 수 있습니다.</SideDesc>
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
`;

const UploadInput = styled.input.attrs(props => ({
  type: 'file',
}))`
  height: 100%;
  opacity: 0;
`;

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
