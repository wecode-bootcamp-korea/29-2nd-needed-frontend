import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const JobsListHeader = ({ data, category, subcategory }) => {
  return (
    <div>
      <Header>
        <HeaderTitle>{data.title}</HeaderTitle>
        <HeaderList>
          {category && (
            <HeaderItems active={!subcategory}>
              <Link to={'/recruitments/' + category}>{data.title} 전체</Link>
            </HeaderItems>
          )}
          {data.categories.map(x => (
            <HeaderItems key={x.id} active={x.linkto === subcategory}>
              <Link
                to={
                  x.linkto !== subcategory && category
                    ? '/recruitments/' + category + '/' + x.linkto
                    : '/recruitments/' + x.linkto
                }
              >
                {x.category}
              </Link>
            </HeaderItems>
          ))}
        </HeaderList>
      </Header>
    </div>
  );
};

const Header = styled.header`
  color: ${({ theme }) => theme.fontBlack};
  border-bottom: 1px ${({ theme }) => theme.borderGray} solid;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const HeaderTitle = styled.h1`
  max-width: 1060px;
  margin: 0 auto;
  padding: 40px 0 15px;
  font-size: 24px;
  font-weight: 700;
`;

const HeaderList = styled.ul`
  display: flex;
  max-width: 1060px;
  margin: 0 auto 20px;
`;

const HeaderItems = styled.li`
  padding-right: 35px;
  font-size: 13px;
  font-weight: ${props => (props.active ? 600 : 400)};
  line-height: 2.69;
  color: ${props =>
    props.active ? props => props.theme.themePurple : 'inherit'};
`;

export default JobsListHeader;
