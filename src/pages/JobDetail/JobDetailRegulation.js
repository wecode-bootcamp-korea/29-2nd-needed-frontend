import React, { useState } from 'react';
import styled from 'styled-components';

const JobDetailRegulation = ({ company }) => {
  const [isParagraphOpen, setIsParagraphOpen] = useState(false);

  return (
    <Regulation>
      <OpenParagraph onClick={() => setIsParagraphOpen(prev => !prev)}>
        <i className="fa-solid fa-circle-exclamation" />
        <p>
          본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수
          없으며, 구직활동 이외의 용도로 사용할 수 없습니다.
        </p>
        <ChevronDown
          isParagraphOpen={isParagraphOpen}
          className="fa-solid fa-chevron-down"
        />
      </OpenParagraph>
      <FoldParagraph isParagraphOpen={isParagraphOpen}>
        <hr />본 채용 정보는 <strong>{company}</strong>에서 제공한 자료를
        바탕으로 원티드랩에서 표현을 수정하고 이의 배열 및 구성을 편집하여
        완성한 원티드랩의 저작자산이자 영업자산입니다. 본 정보 및 데이터베이스의
        일부 내지는 전부에 대하여 원티드랩의 동의 없이 무단전재 또는 재배포,
        재가공 및 크롤링할 수 없으며, 게재된 채용기업의 정보는 구직자의 구직활동
        이외의 용도로 사용될 수 없습니다. 원티드랩은
        <strong>{company}</strong>에서 게재한 자료에 대한 오류나 그 밖에
        원티드랩이 가공하지 않은 정보의 내용상 문제에 대하여 어떠한 보장도 하지
        않으며, 사용자가 이를 신뢰하여 취한 조치에 대해 책임을 지지 않습니다.{' '}
        <strong>&lt; 저작권자 (주)원티드랩. 무단전재-재배포금지&gt;</strong>
      </FoldParagraph>
    </Regulation>
  );
};

const Regulation = styled.aside`
  margin-top: 10px;
  padding: 18px 30px;
  background-color: #f3f5f8;
  border-radius: 5px;
  font-size: 12px;
`;

const OpenParagraph = styled.aside`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  .fa-circle-exclamation {
    margin-right: 12px;
    font-size: 16px;
  }

  p {
    flex-grow: 1;
    margin-top: 2px;
    font-weight: 600;
  }
`;

const ChevronDown = styled.i`
  font-size: 10px;
  transform: rotate(
    ${({ isParagraphOpen }) => (isParagraphOpen ? '180deg' : '0deg')}
  );
  transition: 300ms ease;
`;

const FoldParagraph = styled.aside`
  /* display: ${({ isParagraphOpen }) =>
    isParagraphOpen ? 'block' : 'none'}; */
  max-height: ${({ isParagraphOpen }) => (isParagraphOpen ? '300px' : '0px')};
  overflow: hidden;
  font-size: 13px;
  line-height: 24px;
  color: ${({ theme }) => theme.fontGray};
  transition: max-height 800ms ease;

  hr {
    margin: 18px 0;
  }

  strong {
    font-weight: 600;
  }
`;

export default JobDetailRegulation;
