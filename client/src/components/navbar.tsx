import React, { ReactElement } from "react";
import styled from "styled-components";
import search from "../assets/search.svg";

export default function Navbar(): ReactElement {
  return (
    <Main>
      <MenuBox>
        <Title>
          ABC NATION
          <a href="#" />
        </Title>
        <SearchBar>
          <SerchBarInput maxLength={30} placeholder="Ask your Question in here😌" />
          <SearchIcon src={search} />
        </SearchBar>
        <UserStatusBox>
          <SignUpBtn>Sign Up</SignUpBtn>
          <SignInBtn>Sign In</SignInBtn>
        </UserStatusBox>
      </MenuBox>
    </Main>
  );
}

const Main = styled.div`
  height: 4rem;
  border-bottom: 0.1rem solid #646363;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #424040;
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
