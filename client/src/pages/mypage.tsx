import React, { ReactElement } from "react";
import styled from "styled-components";
import UserInfo from "../components/userstatus";
import Content from "../components/questioncard";

export default function Mypage(): ReactElement {
  return (
    <>
      <Main>
        <UserInfo />
        <ContentsBox>
          <Content />
        </ContentsBox>
      </Main>
    </>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentsBox = styled.div`
  width: 52rem;
  height: 28rem;
  background-color: white;
  border: 0.1rem solid #dfdada;
  display: flex;
  margin: auto;
`;
