import React, { ReactElement } from "react";
import styled from "styled-components";

export default function SingUp(): ReactElement {
  function closeModal() {
    const modal: any = document.querySelector(".signup");
    modal.style.display = "none";
  }

  return (
    <Main className="signup">
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
  );
}

const Main = styled.div`
  width: 40rem;
  height: 35rem;
  margin-left: 40rem;
  margin-top: 6rem;
  border: 0.1rem solid grey;
  background-color: white;
  position: absolute;
  flex-direction: column;
  display: none;
  z-index: 1;
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
  background-color: grey;
  color: white;
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
  border: 0.2rem solid grey;
  border-radius: 1rem;
  height: 2rem;
  width: 5rem;
  font-weight: 600;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
