import React, { ReactElement } from "react";
import styled from "styled-components";
import UserInfo from "../components/userstatus";

export default function Mypage(): ReactElement {
  return (
    <>
      <Main>
        <UserInfo />
      </Main>
    </>
  );
}

const Main = styled.div`
  display: flex;
`;
