import React, { ReactElement } from "react";
import styled from "styled-components";
import Content from "../components/questioncard";
import UserInfo from "../components/userinfobox";

export default function Language(): ReactElement {
  return (
    <Main>
      <Contents>
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
    background-color: #cbddf0;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #6cd685;
  }
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;
