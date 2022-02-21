import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Card({ data }) {
  const { id, name, compensation } = data;

  return (
    <CardContainer>
      <StyledLink to={`/recruitment/${id}`}>
        <Heading1>{name}</Heading1>
        <Caption>채용보상금 {compensation.toLocaleString()}원</Caption>
        <JobAttribute>상시 채용</JobAttribute>
      </StyledLink>
      <Bookmark>
        <i className="far fa-bookmark" />
      </Bookmark>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: calc(50% - 10px);
  border: 1px solid ${({ theme }) => theme.borderGray};
  min-height: 108px;
  padding: 16px 20px 19px;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.fontBlack};
  margin-right: 10px;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.fontBlack};
  width: calc(100% - 40px);

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: ${({ theme }) => theme.fontBlack};
  }
`;

const Heading1 = styled.div`
  font-size: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  margin-bottom: 3px;
`;

const Caption = styled.div`
  font-size: 14px;
  color: #86939e;
  margin-bottom: 15px;
`;

const JobAttribute = styled.div`
  font-size: 14px;
  color: #666;
`;

const Bookmark = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.themePurple};
  right: 0;
  width: 34px;
  height: 34px;
  border-radius: 17px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  cursor: pointer;
`;

export default Card;
