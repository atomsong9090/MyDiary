import React, { ReactElement, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import countries from "../common/countries";

export default function Settings(): ReactElement {
  const accessToken = sessionStorage.getItem("accessToken");
  const [image, setImage] = React.useState<string>("");
  const [userData, setUserData] = useState({ nickname: "", country: "", password: "", newPassword: "" });

  function getNickname(e: React.ChangeEvent<HTMLInputElement>) {
    setUserData({ ...userData, nickname: e.target.value });
  }
  function getCountry(e: React.ChangeEvent<HTMLSelectElement>) {
    setUserData({ ...userData, country: e.target.value });
  }
  function getPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setUserData({ ...userData, password: e.target.value });
  }
  function getNewPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setUserData({ ...userData, newPassword: e.target.value });
  }
  function setNewInformation() {
    axios
      .patch(
        "/uuser",
        {
          nickname: userData.nickname,
          country: userData.country,
          pasword: userData.password,
          newPassword: userData.newPassword,
          avatarUrl: image,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        alert("오류가 발생했습니다.");
      });
  }
  async function imageOnchange(event: React.ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();
    const file: any = event.target.files;
    const previewImgs: any = document.querySelector(".imgbox");

    reader.onload = () => {
      const img: any = document.createElement("img");
      img.setAttribute("src", reader.result);
      img.setAttribute("style", "border-radius: 50%; border:0.1rem solid white; width:12rem; height:12rem;");
      previewImgs.appendChild(img);
    };
    if (file.length !== 0) {
      reader.readAsDataURL(file[0]);
      if (event.target.files !== null) {
        const fd: any = new FormData();
        fd.append("imgs", event.target.files[0]);
        axios.post("/image", fd).then((res) => setImage(res.data[0].location));
      }
    }
  }

  return (
    <Main>
      <ImgBox>
        <ImgPreview className="imgbox" />
        <ImgBtnLabel htmlFor="input-file">Upload Image</ImgBtnLabel>
        <UploadImgBtn
          accept=" image/png, image/jpeg"
          id="input-file"
          style={{ display: "none" }}
          onChange={imageOnchange}
          type="file"
        />
      </ImgBox>
      <UserInfoBox>
        <Option>
          <TypeWrapper>
            <Type>NickName</Type>
          </TypeWrapper>
          <Description onChange={getNickname} placeholder="New nickname (maximum 10 letter)" maxLength={10} />
        </Option>
        <Option>
          <TypeWrapper>
            <Type>Country</Type>
          </TypeWrapper>

          <DescriptionSelect onChange={getCountry}>
            {countries.map((el: any) => {
              return <DescriptionOption key={el}>{el}</DescriptionOption>;
            })}
          </DescriptionSelect>
        </Option>
        <Option>
          <TypeWrapper>
            <Type>Password</Type>
          </TypeWrapper>
          <Description type="password" onChange={getPassword} placeholder="Current Password" maxLength={15} />
        </Option>

        <Option>
          <TypeWrapper>
            <Type>New Password</Type>
          </TypeWrapper>
          <Description type="password" onChange={getNewPassword} placeholder="New Password" maxLength={15} />
        </Option>
        <NoticeBox>
          <SaveBtn onClick={setNewInformation}>Save</SaveBtn>
          <Notificate></Notificate>
        </NoticeBox>
      </UserInfoBox>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  margin: auto;
  width: 52rem;
  height: 23rem;
  background-color: white;
  border: 0.1rem solid grey;
`;
const ImgBox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem;
  flex-direction: column;
  height: 15rem;
  width: 15rem;
  //background-color: #e7d8d8;
`;

const ImgPreview = styled.div`
  display: flex;
  width: 12.3rem;
  height: 12.3rem;
  border: 0.1rem solid black;
  border-radius: 50%;
`;
const UploadImgBtn = styled.input`
  width: 7.7rem;
  margin-top: 1rem;
`;
const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 21rem;
  margin: 1rem;
`;
const TypeWrapper = styled.div`
  display: flex;
  width: 15rem;
  // background-color: pink;
`;
const Type = styled.div`
  font-size: 1.2rem;
  height: 2rem;
  align-items: center;
  display: flex;
`;
const Description = styled.input`
  width: 25rem;
  height: 1.5rem;
  border: 0.1rem solid black;
  font-size: 1.1rem;
`;
const DescriptionSelect = styled.select`
  width: 25.5rem;
  height: 1.8rem;
  border: 0.1rem solid black;

  font-size: 1.1rem;
`;
const DescriptionOption = styled.option``;
const Option = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`;

const ImgBtnLabel = styled.label`
  background-color: pink;
  padding: 0.5rem;
  margin-top: 1rem;
  font-weight: bold;
  color: blue;
  border: 0.1rem solid grey;
  &:hover {
    cursor: pointer;
    background-color: grey;
    color: white;
  }
`;

const NoticeBox = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const SaveBtn = styled.button`
  width: 4rem;
  height: 2rem;
  background-color: pink;
  border: 0;
  color: blue;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: grey;
    color: white;
  }
`;
const Notificate = styled.div``;
