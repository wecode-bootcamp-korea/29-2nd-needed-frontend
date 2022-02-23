import React, { useState } from 'react';
import styled from 'styled-components';
import Chip from './Chip';

function CompanyAside({ companyData }) {
  const { tags } = companyData;
  const [modalState, setModalState] = useState({
    isModalShown: false,
  });

  const modalShowChange = () => {
    setModalState(prev => ({ ...prev, isModalShown: false }));
  };

  return (
    companyData && (
      <>
        <CompanyTags>
          <Heading3>태그</Heading3>
          <ChipsWrap>
            {tags?.map((tags, idx) => {
              return <Chip data={tags} key={idx} />;
            })}
          </ChipsWrap>
          <TagSuggest>+ 태그 제안하기</TagSuggest>
        </CompanyTags>

        <TagModalWrap isShown={modalState.isModalShown}>
          <TagModalBackground />
          <TagModalBody>
            <TagModalHeader>태그 의견</TagModalHeader>
            <i className="fas fa-times" onClick={modalShowChange} />
            <div>
              <div>
                해당 회사의 다양한 태그 의견을 받습니다
                <br />
                보내주신 태그는 니디드에서 검토 후 반영됩니다
              </div>
              <div>
                <div>#</div>
                <input type="text" />
                <div>추가</div>
              </div>
              <div>
                <div>태그으</div>
              </div>
              <button>의견 보내기</button>
            </div>
          </TagModalBody>
        </TagModalWrap>
      </>
    )
  );
}

const Heading3 = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.fontBlack};
  margin-bottom: 20px;
  font-weight: 500;
`;

const CompanyTags = styled.aside`
  width: calc(30% - 20px);
  margin-left: 10px;
`;

const ChipsWrap = styled.div`
  width: 100%;
`;

const TagSuggest = styled.div`
  color: #999;
  font-size: 14px;
  display: inline-block;
  border-radius: 20px;
  padding: 12px 16px;
  border: 1px dashed #ccc;
  margin: 0 6px 10px 0;
  cursor: pointer;
`;

const TagModalWrap = styled.div`
  z-index: 1000;
  display: ${({ isShown }) => (isShown ? 'flex' : 'none')};
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

const TagModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

const TagModalBody = styled.div`
  position: fixed;
  width: 500px;
  background-color: #fff;
  border-radius: 5px;
`;

const TagModalHeader = styled.div`
  padding: 18px 20px;
  display: flex;
  justify-content: center;
  color: #333;
  font-weight: 500;
  font-size: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.borderGray};
`;

export default CompanyAside;
