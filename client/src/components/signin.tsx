import React, { ReactElement } from "react";
import styled from "styled-components";

export default function SingIn(): ReactElement {
  function closeModal() {
    const modal: any = document.querySelector(".signin");
    modal.style.display = "none";
  }

  return (
    <Background className="signin" style={{ display: "none" }}>
      <Main>
        <Title>
          Sign In
          <ControllerBox>
            <BackToMain onClick={closeModal}>X</BackToMain>
          </ControllerBox>
        </Title>
        <InfoBox>
          <Menu>Email</Menu>
          <MenuInput placeholder="Enter your Email" />
          <Menu>Password</Menu>
          <MenuInput type="password" placeholder="Enter your Password" />
        </InfoBox>
        <Notificate>Wrong ID & Password</Notificate>
        <SingInBtn>Sign In</SingInBtn>
      </Main>
    </Background>
  );
}
const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(111, 122, 112, 0.5);
  position: absolute;
  z-index: 1;
  margin: 0;
  display: none;
`;

const Main = styled.div`
  width: 18rem;
  height: 17rem;
  margin: 6rem auto;
  border: 0.1rem solid grey;
  background-color: white;
  flex-direction: column;
  // z-index: 2;
`;
const ControllerBox = styled.div`
  //width: 18rem;
  display: flex;
  justify-content: flex-end;

  &:hover {
    cursor: pointer;
  }
`;
const BackToMain = styled.div`
  border: 1px solid grey;
  width: 1.8rem;
  height: 1.8rem;
  font-weight: bold;
  font-size: 1.5rem;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  margin: 1rem 1rem;
  display: flex;
  justify-content: space-between;
`;

const InfoBox = styled.div`
  //background-color: grey;
  height: 7rem;
  margin: 0rem 1rem;
  display: flex;
  flex-direction: column;
`;
const Menu = styled.h2`
  display: flex;
  margin: 0;
`;
const MenuInput = styled.input`
  display: flex;
  height: 1.5rem;
  width: 15rem;
`;
const Notificate = styled.div`
  border: 0.1rem solid #e68686;
  background-color: #e68686;
  color: white;
  justify-content: center;
  display: flex;
  width: 15.3rem;
  margin: 0.2rem 1rem;
  //display: none;
`;

const SingInBtn = styled.div`
  background-color: grey;
  margin: 0.2rem 1rem;
  height: 2rem;
  width: 15.5rem;
  font-weight: 600;
  font-size: 1.2rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
