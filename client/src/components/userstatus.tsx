import React, { ReactElement } from "react";
import styled from "styled-components";
import avatar from "../assets/turtle.jpeg";
import country from "../assets/country.svg";
import join from "../assets/join.svg";
import addfriend from "../assets/addfriend.svg";
import message from "../assets/message.svg";
import info from "../assets/info.svg";

export default function UserStatus(): ReactElement {
  return (
    <Main>
      <UserInfoBox>
        <AvatarWrapper>
          <Avatar src={avatar} />
        </AvatarWrapper>
        <UserName>면목동꿀주먹</UserName>
        <InfoBox>
          <InfoImg src={country} />
          <InfoDescription>South Korea</InfoDescription>
        </InfoBox>
        <InfoBox>
          <InfoImg src={join} />
          <InfoDescription>2021-04-07</InfoDescription>
        </InfoBox>
      </UserInfoBox>
      <ControllerBox>
        <ButtonWrapper>
          <ButtonImg src={addfriend} />
        </ButtonWrapper>
        <ButtonWrapper>
          <ButtonImg src={message} />
        </ButtonWrapper>
        <ButtonWrapper>
          <ButtonImg src={info} />
        </ButtonWrapper>
      </ControllerBox>
    </Main>
  );
}

const Main = styled.div`
  width: 50rem;
  height: 20rem;
  border: 1px solid black;
  margin: 2rem auto;
  background-color: white;
  display: flex;
  justify-content: space-between;
  //
`;
const UserInfoBox = styled.div`
  display: flex;
  width: 10.2rem;
  margin: 1.5rem;
  flex-direction: column;
`;
const AvatarWrapper = styled.div`
  display: flex;
  border-radius: 50%;
  background-color: grey;
  width: 10.2rem;
  height: 10.2rem;
  justify-content: center;
  align-items: center;
`;
const Avatar = styled.img`
  width: 10rem;
  height: 10rem;
  border: 0.1rem solid grey;
  border-radius: 50%;
`;
const InfoBox = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0.5rem;
`;
const UserName = styled.span`
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  font-weight: 600;
`;
const InfoImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
const InfoDescription = styled.span`
  margin-left: 0.3rem;
  color: grey;
`;
const ControllerBox = styled.div`
  display: flex;
  justify-content: center;
  width: 12rem;
  margin: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.6rem;
  height: 2.6rem;
`;
const ButtonImg = styled.img`
  width: 2rem;
  height: 2rem;
  &:hover {
    cursor: pointer;
    background-color: #a1a0a0;
    width: 2.3rem;
    height: 2.3rem;
  }
`;
