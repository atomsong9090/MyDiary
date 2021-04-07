import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import Content from "../components/questioncard";
import UserInfo from "../components/userinfobox";

export default function Language(): ReactElement {
  return (
    <Main>
      <Contents className="contents">
        <ContentBox>
          <Content />
          <Content />
        </ContentBox>
        <UserInfo />
      </Contents>
    </Main>
  );
}
const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contents = styled.div`
  width: 75rem;
  height: 35rem;
  margin: 1rem auto;
  display: flex;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: #4b4b4b;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #83e299;
  }
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;
