import React, { ReactElement } from "react";
import styled from "styled-components";
import avatar from "../assets/pika.png";

export default function UserInfoBox(): ReactElement {
  return (
    <Main>
      <CurrentLocation>Language</CurrentLocation>
      <InfoBox>
        <UserInfo>
          <AvatarBox>
            <Avatar src={avatar} />
            <UserName>PikaPika</UserName>
            <MypageBtn>mypage</MypageBtn>
          </AvatarBox>
          <ContentText placeholder="Ask your question in here ..." />
        </UserInfo>
        <Picture type="file" accept="image/png, image/jpeg" />
      </InfoBox>
    </Main>
  );
}
const Main = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
`;

const CurrentLocation = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 3rem;
  font-size: 2.5rem;
  border: 0.1rem solid grey;
  //margin: auto;
  background-color: #8469e3;
  display: flex;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

const InfoBox = styled.div`
  margin-top: 0.5rem;
  width: 20rem;
  height: 31rem;
  background-color: white;
  border: 0.1rem solid grey;
`;

const UserInfo = styled.div`
  display: flex;
  margin: 0.5rem;
  flex-direction: column;
`;
const AvatarBox = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Avatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border: 0.1rem solid grey;
  border-radius: 50%;
`;
const UserName = styled.div`
  margin-left: 0.5rem;
  display: flex;
  font-size: 1.5rem;
  font-weight: 600;
  align-items: flex-end;
`;

const MypageBtn = styled.div`
  background-color: white;
  margin-left: 0.5rem;
  height: 1rem;
  width: 4rem;
  border: 1px solid grey;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  &:hover {
    background-color: #cedff0;
    color: white;
  }
`;
const ContentText = styled.textarea`
  resize: none;
  margin-top: 1rem;
  height: 18rem;
  border: 0.1rem solid grey;
  border-radius: 0.5rem;
  background-color: #f3e9e9;
`;
const Picture = styled.input``;
