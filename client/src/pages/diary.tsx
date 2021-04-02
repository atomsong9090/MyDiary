import React, { ReactElement } from "react";
import DiaryDetail from "../components/diary";
import DiaryList from "../components/diarylists";
import styled from "styled-components";

export default function Diary(): ReactElement {
  return (
    <Main>
      <DiaryDetail />
      <Diarys>
        <Title>Diary List</Title>
        <DiaryList />
        <DiaryList />
        <DiaryList />
        <DiaryList />
        <DiaryList />
      </Diarys>
    </Main>
  );
}
const Main = styled.div`
  width: 60rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const Diarys = styled.div`
  border: 0.1rem solid grey;
  overflow: scroll;
  width: 20rem;
  height: 30rem;
  margin-top: 2rem;
  ::-webkit-scrollbar-thumb {
    background-color: #f1ef79;
    border-radius: 10px;
  }
`;
const Title = styled.div`
  position: sticky;
  top: 0;
  height: 2rem;
  font-size: 1.5rem;
  background-color: white;
  border: 0.1rem solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;
