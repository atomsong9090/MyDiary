import React, { ReactElement, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { isEmailForm } from "../common/validation";

export default function SingUp(): ReactElement {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickname, setNickname] = useState("");
  const [validation, setValidation] = useState({
    validEmail: false,
    validPassword: false,
  });
  const [notificate, setNotificate] = useState({
    email: "",
    password: "",
  });
  function getEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    if (isEmailForm(email)) {
      setValidation({ ...validation, validEmail: true });
      setNotificate({ ...notificate, email: "" });
    } else {
      setValidation({ ...validation, validEmail: false });
      setNotificate({ ...notificate, email: "check your email (abcde@gmail.com)" });
    }
  }
  function getPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
    //setTimeout(setValidCheck(password === passwordConfirm), 100);
  }
  function getPasswordConfirm(e: React.ChangeEvent<HTMLInputElement>) {
    setPasswordConfirm(e.target.value);
    //setTimeout(setValidCheck(password === passwordConfirm), 100);
  }
  function getNickname(e: React.ChangeEvent<HTMLInputElement>) {
    setNickname(e.target.value);
  }
  async function signUpAction() {
    await axios
      .post("/signup", { email: email, nickname: nickname, password: password })
      .then((res) => {
        sessionStorage.setItem("accessToken", res.data.data.accessToken);
        sessionStorage.setItem("login", "ok");
        sessionStorage.setItem("nickname", res.data.data.userData.nickname);
        sessionStorage.setItem("id", res.data.data.userData.id);
        sessionStorage.setItem("avatar", res.data.data.userData.avatarUrl);
        closeModal();
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function closeModal() {
    const modal: any = document.querySelector(".signup");
    modal.style.display = "none";
    setNotificate({ password: "", email: "" });
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
            <Email theme={email} onChange={getEmail} placeholder="Enter a Email" />
          </InfoBox>
          <InfoBox>
            <Type1>Nickname</Type1>
            <Nickname
              theme={nickname}
              onChange={getNickname}
              maxLength="10"
              placeholder="Enter a Nickname (5~10 letter )"
            />
          </InfoBox>
          <InfoBox>
            <Type1>Password</Type1>
            <Password
              onChange={getPassword}
              maxLength="12"
              type="password"
              placeholder="Enter a Password (8~12 letter )"
            />
          </InfoBox>
          {password === passwordConfirm ? (
            <InfoBox>
              <Type1>Confirm Password</Type1>
              <PasswordConfirm
                onChange={getPasswordConfirm}
                maxLength="12"
                type="password"
                placeholder="Confirm Password"
              />
            </InfoBox>
          ) : (
            <InfoBox>
              <Type1>Confirm Password</Type1>
              <PasswordConfirm
                onChange={getPasswordConfirm}
                maxLength="12"
                type="password"
                placeholder="Confirm Password"
                style={{ border: "0.2rem solid red" }}
              />
            </InfoBox>
          )}
          <NotificationBox>
            <Notification>{notificate.email !== "" ? notificate.email : ""}</Notification>
          </NotificationBox>
          <ButtonBox>
            <SubmitBtn onClick={signUpAction}>Sign Up</SubmitBtn>
          </ButtonBox>
        </UserInfoBox>
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
  width: 40rem;
  height: 40rem;
  margin: 6rem auto;
  border: 0.1rem solid grey;
  background-color: white;
  flex-direction: column;
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

const UserInfoBox = styled.form`
  width: 38rem;
  height: 20rem;
  margin: 1rem;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem auto;
  justify-content: center;
  height: 5rem;
`;
const Type1 = styled.div`
  height: 2rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 300;
`;
const Email: any = styled.input`
  width: 35rem;
  height: 2rem;
  font-size: 1.3rem;
  margin-top: 0.1rem;
  border: 0.1rem solid grey;
  :focus {
    outline: none;
  }
`;
const Nickname: any = styled.input`
  width: 35rem;
  height: 2rem;
  font-size: 1.3rem;
  margin-top: 0.1rem;
  border: 0.1rem solid grey;
  :focus {
    outline: none;
  }
`;
const Password: any = styled.input`
  width: 35rem;
  height: 2rem;
  font-size: 1.3rem;
  margin-top: 0.1rem;
  border: 0.1rem solid grey;
  :focus {
    outline: none;
  }
`;
const PasswordConfirm: any = styled.input`
  width: 35rem;
  height: 2rem;
  font-size: 1.3rem;
  margin-top: 0.1rem;
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
const NotificationBox = styled.div`
  display: flex;
  height: 3rem;
  margin-left: 1rem;
  align-items: center;
`;
const Notification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 90%;
  //background-color: red;
  border-bottom: 0.1rem solid grey;
  color: red;
  font-size: 1.6rem;
  font-weight: bold;
  // border-radius: 2rem;
`;
