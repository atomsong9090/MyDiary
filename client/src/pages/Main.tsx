import React, { ReactElement } from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Questions from "../components/menubar";

export default function Main(): ReactElement {
  return (
    <>
      <Navbar />
      <Questions />
      <Contents></Contents>
    </>
  );
}

const Contents = styled.div`
  width: 75rem;
  min-height: 50rem;
  margin: 1rem auto;
  background-color: white;
`;
