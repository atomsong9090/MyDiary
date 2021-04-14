import React, { ReactElement } from "react";
import styled from "styled-components";
import UserInfo from "../components/userstatus";
import Setting from "../components/settings";

export default function Settings(): ReactElement {
  return (
    <Main>
      <UserInfo />
      <Setting />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
