import React, { ReactElement } from "react";
import styled from "styled-components";

export default function SingUp(): ReactElement {
  function closeModal() {
    const modal: any = document.querySelector(".signup");
    modal.style.display = "none";
  }

  return (
    <Background className="signup" style={{ display: "none" }}>
      <Main>
        <ControllerBox>
          <BackToMain onClick={closeModal}>X</BackToMain>
        </ControllerBox>
        <DescriptionBox>
          <DescriptioTitle>Sign Up</DescriptioTitle>
          <Description>Fill in this form to create an account</Description>
          <DescriptionLine />
        </DescriptionBox>
        <UserInfoBox>
          <InfoBox>
            <Type1>Email</Type1>
            <Type2 placeholder="Enter a Email" />
          </InfoBox>
          <InfoBox>
            <Type1>Nickname</Type1>
            <Type2 maxLength="10" placeholder="Enter a Nickname (5~10 letter )" />
          </InfoBox>
          <InfoBox>
            <Type1>Password</Type1>
            <Type2 maxLength="12" type="password" placeholder="Enter a Password (8~12 letter )" />
          </InfoBox>
          <InfoBox>
            <Type1>Confirm Password</Type1>
            <Type2 maxLength="12" type="password" placeholder="Confirm Password" />
          </InfoBox>
          <ButtonBox>
            <SubmitBtn onClick={closeModal}>Sign Up</SubmitBtn>
          </ButtonBox>
        </UserInfoBox>
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
  width: 40rem;
  height: 35rem;
  margin: 6rem auto;
  border: 0.1rem solid grey;
  background-color: white;
  flex-direction: column;
  // z-index: 2;
`;
const ControllerBox = styled.div`
  width: 40rem;
  display: flex;
  justify-content: flex-end;

  &:hover {
    cursor: pointer;
  }
`;
const DescriptionBox = styled.div`
  height: 7rem;
`;
const DescriptioTitle = styled.h1`
  margin-left: 1rem;
  width: 38rem;
`;
const Description = styled.div`
  margin-left: 1rem;
  font-weight: 600;
`;
const DescriptionLine = styled.div`
  border-bottom: 0.2rem solid grey;
  margin: 0.5rem auto;
  width: 38rem;
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

const UserInfoBox = styled.div`
  width: 38rem;
  height: 20rem;
  margin: 1rem;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem auto;
  justify-content: center;
`;
const Type1 = styled.div`
  height: 2rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 300;
`;
const Type2: any = styled.input`
  width: 35rem;
  height: 2rem;
  font-size: 1.3rem;
  margin-top: 0.1rem;
  border: 0.1rem solid grey;
  :focus {
    outline: none;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 35.5rem;
`;
const SubmitBtn = styled.div`
  border: 0.1rem solid black;
  width: 100%;
  background-color: #a19b9b;
  color: white;
  height: 2rem;
  font-weight: 600;
  font-size: 1.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
