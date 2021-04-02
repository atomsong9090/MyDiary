import React, { ReactElement } from "react";
import DiaryList from "../components/diarylists";
import styled from "styled-components";

export default function Diary(): ReactElement {
  return (
    <Main>
      <DiaryList />
    </Main>
  );
}
const Main = styled.div`
  width: 60rem;
  margin: auto;
`;
