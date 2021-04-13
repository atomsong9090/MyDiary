import React, { ReactElement } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import search from "../assets/search.svg";
import home from "../assets/home.svg";
import guestBook from "../assets/guestbook.svg";
import userinfo from "../assets/user.svg";

export default function Navbar(): ReactElement {
  const history = useHistory();
  const isLogin = sessionStorage.getItem("login");
  const uid = sessionStorage.getItem("id");

  function openSignUpModal() {
    const SignUpModal: any = document.querySelector(".signup");
    const SignInModal: any = document.querySelector(".signin");

    if (SignInModal.style.display === "none") {
      SignUpModal.style.display = "flex";
    }
  }
  function openSignInModal() {
    const SignUpModal: any = document.querySelector(".signup");
    const SignInModal: any = document.querySelector(".signin");

    if (SignUpModal.style.display === "none") {
      SignInModal.style.display = "flex";
    }
  }
  function setLogOut(): any {
    sessionStorage.clear();
    history.push("/");
  }

  return (
    <Main>
      <MenuBox>
        <Title
          onClick={() => {
            history.push("/");
          }}
        >
          ABC NATION
        </Title>
        <SearchBar>
          <SerchBarInput maxLength={30} placeholder="search" />
          <SearchIcon src={search} />
        </SearchBar>
        {isLogin !== "ok" ? (
          <UserStatusBox>
            <SignUpBtn onClick={openSignUpModal}>Sign Up</SignUpBtn>
            <SignInBtn onClick={openSignInModal}>Sign In</SignInBtn>
          </UserStatusBox>
        ) : (
          <UserStatusBoxLogin>
            <BtnBox>
              <HomeBtn
                src={home}
                onClick={() => {
                  history.push("/");
                }}
              />
            </BtnBox>
            <BtnBox>
              <GuestBook src={guestBook} />
            </BtnBox>
            <BtnBox>
              <MyPage
                src={userinfo}
                onClick={() => {
                  history.push(`/mypage?u=${uid}`);
                }}
              />
            </BtnBox>
            <SignOutBtn onClick={() => setLogOut()}>Sign Out</SignOutBtn>
          </UserStatusBoxLogin>
        )}
      </MenuBox>
    </Main>
  );
}

const Main = styled.div`
  height: 4rem;
  border-bottom: 0.1rem solid #413f3f;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #272626;
`;
const MenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
  width: 60rem;
  margin: auto;
`;
const Title = styled.div`
  display: flex;
  align-items: flex-end;
  color: white;
  height: 100%;
  font-size: 2.5rem;
  font-weight: bold;
  font-style: oblique;
  &:hover {
    cursor: pointer;
  }
`;
const UserStatusBox = styled.div`
  display: flex;
  align-items: flex-end;
  width: 14rem;
`;

const UserStatusBoxLogin = styled.div`
  display: flex;
  align-items: flex-end;
  width: 14rem;
`;

const SignInBtn = styled.button`
  height: 1.5rem;
  background-color: #424040;
  border: 0px;
  color: white;
  font-size: 1.1rem;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
    background-color: #dfd7d9;
    color: white;
  }
`;
const SignOutBtn = styled.button`
  height: 1.5rem;
  background-color: #424040;
  border: 0px;
  color: white;
  font-size: 1.1rem;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
    //background-color: #dfd7d9;
    border: 0.1rem solid white;
    color: white;
  }
`;
const SignUpBtn = styled.button`
  height: 2rem;
  color: white;
  background-color: #424040;
  border: 0.1rem solid white;
  border-radius: 1rem;
  margin-left: 1rem;
  font-size: 1.1rem;
  &:hover {
    cursor: pointer;
    background-color: #dfd7d9;
    color: white;
  }
`;
const BtnBox = styled.div`
  width: 2.3rem;
  height: 2.3rem;
  border: 0.15rem solid white;
  margin-left: 0.3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HomeBtn = styled.img`
  width: 2rem;
  height: 2rem;
  &:hover {
    width: 2.2rem;
    height: 2.2rem;
    cursor: pointer;
  }
`;
const GuestBook = styled.img`
  width: 2rem;
  height: 2rem;
  &:hover {
    width: 2.2rem;
    height: 2.2rem;
    cursor: pointer;
  }
`;
const MyPage = styled.img`
  width: 2rem;
  height: 2rem;
  &:hover {
    width: 2.2rem;
    height: 2.2rem;
    cursor: pointer;
  }
`;
const SearchBar = styled.div`
  width: 24rem;
  height: 2rem;
  border: 0.01rem solid white;
  margin-left: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;
const SerchBarInput = styled.input`
  margin-left: 0.5rem;
  font-size: 1.2rem;
  border: 0px;
  :focus {
    outline: none;
  }
  width: 20.5rem;
  height: 2rem;
  background-color: rgba(255, 255, 255, 0);
`;
const SearchIcon = styled.img`
  width: 2rem;
`;
