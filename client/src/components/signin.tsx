import axios from "axios";
import React, { ReactElement, useState } from "react";
import styled from "styled-components";
axios.defaults.baseURL = "http://52.79.253.196:4000/";

export default function SingIn(): ReactElement {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errNotice, setErrnotice] = useState("");

  async function signInAction() {
    await axios
      .post("/signin", { email: email, password: password })
      .then((res) => {
        sessionStorage.setItem("accessToken", res.data.data.accessToken);
        sessionStorage.setItem("login", "ok");
        sessionStorage.setItem("nickname", res.data.data.userData.nickname);
        sessionStorage.setItem("id", res.data.data.userData.id);
        sessionStorage.setItem("c", res.data.data.userData.country);
        sessionStorage.setItem("when", res.data.data.userData.createdAt);
        sessionStorage.setItem("avatar", res.data.data.userData.avatarUrl);
        window.location.reload();
      })
      .catch((err) => {
        setErrnotice("Invalid Email & Password");
        setTimeout(() => {
          setErrnotice("");
        }, 3000);
      });
  }

  function getEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    setErrnotice("");
  }
  function getPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
    setErrnotice("");
  }

  function closeModal() {
    const modal: any = document.querySelector(".signin");
    modal.style.display = "none";
    setErrnotice("");
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
          <MenuInput onChange={getEmail} placeholder="Enter your Email" />
          <Menu>Password</Menu>
          <MenuInput onChange={getPassword} type="password" placeholder="Enter your Password" />
        </InfoBox>

        <SingInBtn onClick={signInAction}>Sign In</SingInBtn>
        {errNotice ? <Notificate>{errNotice}</Notificate> : ""}
      </Main>
    </Background>
  );
}
const Background = styled.div`
  width: 99%;
  height: 93%;
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
const MenuInput: any = styled.input`
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
  animation: fadein 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
