import React, { ReactElement } from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Menubar from "../components/menubar";
import Content from "../components/questioncard";

export default function Main(): ReactElement {
  return (
    <>
      <Navbar />
      <Menubar />
      <Contents>
        <Content />
        <Content />
        <Content />
        <Content />
      </Contents>
    </>
  );
}

const Contents = styled.div`
  width: 75rem;
  height: 35rem;
  margin: 1rem auto;
  background-color: white;
  flex-direction: column;
  display: flex;
  overflow-x: scroll;
`;
