import React, { ReactElement } from "react";
import styled from "styled-components";
import turtle from "../assets/turtle.jpeg";
import create from "../assets/plus.svg";
import read from "../assets/book.svg";
import user from "../assets/user.svg";

export default function Navbar(): ReactElement {
  return (
    <Main>
      <MenuBox>
        <Title>MyDiary</Title>
        <UserStatusBox>
          <IconBox>
            <UserAvatar src={turtle} />
            <WriteDiary src={create} />
            <ReadDiary src={read} />
            <UserInfo src={user} />
          </IconBox>
          <SignInBtn>Sign In</SignInBtn>
          <SignUpBtn>Sign Up</SignUpBtn>
        </UserStatusBox>
      </MenuBox>
    </Main>
  );
}

const Main = styled.div`
  background-color: #ffffff;
  height: 4rem;
  border-bottom: 0.1rem solid #646363;
`;
const MenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 50%;

  margin: auto;
`;
const Title = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  font-size: 2.5rem;
`;
const UserStatusBox = styled.div`
  display: flex;
  align-items: flex-end;
`;
const UserAvatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid black;
`;
const IconBox = styled.div`
  width: 13rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`;

const WriteDiary = styled.img`
  width: 2rem;
  height: 2rem;
`;
const ReadDiary = styled.img`
  width: 2rem;
  height: 2rem;
`;
const UserInfo = styled.img`
  width: 2rem;
  height: 2rem;
`;
const SignInBtn = styled.button`
  height: 1.5rem;
  background-color: #ffffff;
  border: 0px;
  margin-left: 2rem;
`;
const SignUpBtn = styled.button`
  height: 1.5rem;
  background-color: #ffffff;
  border: 0px;
`;
