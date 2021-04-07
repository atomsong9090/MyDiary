import React, { ReactElement } from "react";
import styled from "styled-components";
import UserInfo from "../components/userstatus";

export default function Mypage(): ReactElement {
  return (
    <>
      <Main>
        <UserStatus>
          <UserInfo />
        </UserStatus>
      </Main>
    </>
  );
}

const Main = styled.div``;
const UserStatus = styled.div``;
