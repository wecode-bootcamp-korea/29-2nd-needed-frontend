import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { api } from '../../../api/config';

function Files() {
  const [fetchedFiles, setFetchedFiles] = useState([]);

  useEffect(() => {
    fetch(api.fetchResume, {
      headers: {
        Authorization: sessionStorage.getItem('Authorization'),
      },
    })
      .then(res => res.json())
      .then(result => setFetchedFiles(result.results));
  }, []);

  return (
    <Container>
      {fetchedFiles.length > 0 &&
        fetchedFiles.map(data => (
          <MapBox key={data.id}>
            <span>{data.name}</span>
            <a target="_blank" href={data.url} rel="noreferrer">
              open
            </a>
            <div>삭제</div>
          </MapBox>
        ))}
    </Container>
  );
}

export default Files;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MapBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(25% - 20px);
  height: 190px;
  position: relative;
  border: 1px solid lightgray;
  background-color: white;
  padding: 10px 10px;
  margin: 20px 20px 0 0;

  span {
    padding: 0 10px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }

  div {
    font-size: 13px;
    font-weight: 400;
    line-height: 1.9;
    cursor: pointer;
    :hover & {
      background-color: gray;
    }
  }
`;
