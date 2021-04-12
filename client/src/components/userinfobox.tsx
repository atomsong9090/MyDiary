import React, { ReactElement, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import avatar from "../assets/pika.png";

axios.defaults.baseURL = "http://52.79.253.196:4000/";

export default function UserInfoBox(): ReactElement {
  const accessToken = sessionStorage.getItem("accessToken");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  async function createNewContent() {
    await axios
      .post(
        "/content",
        { title: title, text: text, category: category },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
      .then((res) => console.log(res));
  }

  function getText(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }
  function getTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  const history = useHistory();
  let currentPage = history.location.pathname;
  let pageName = currentPage.slice(1);
  let pageColor = "#8469e3";
  pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  if (pageName === "Culture") {
    pageColor = "#44CF86";
  } else if (pageName === "History") {
    pageColor = "#FFC0CB";
  } else if (pageName === "Travel") {
    pageColor = "#87CEEB";
  }
  useState(() => {
    if (pageName === "") {
      setCategory("Language");
    } else {
      setCategory(pageName);
    }
  });

  return (
    <Main>
      <CurrentLocation style={{ backgroundColor: pageColor }}>{pageName ? pageName : "Language"}</CurrentLocation>
      <InfoBox>
        <UserInfo>
          <AvatarBox>
            <Avatar src={avatar} />
            <UserName>PikaPika</UserName>
            <MypageBtn>mypage</MypageBtn>
          </AvatarBox>
          <ConttentBox>
            <ContentTitle onChange={getTitle} />
            <ContentText onChange={getText} placeholder="Ask your question in here ..." />
          </ConttentBox>
        </UserInfo>
        <Picture type="file" accept="image/png, image/jpeg" />
      </InfoBox>
      <SubmitBtn onClick={createNewContent}>submit</SubmitBtn>
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
const ConttentBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentTitle = styled.input``;
const ContentText = styled.textarea`
  resize: none;
  margin-top: 1rem;
  height: 15rem;
  border: 0.1rem solid grey;
  border-radius: 0.5rem;
  //background-color: #f3e9e9;
`;
const SubmitBtn = styled.button``;
const Picture = styled.input``;
