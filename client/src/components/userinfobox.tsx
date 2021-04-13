import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import avatar from "../assets/pika.png";
import backgroundimg from "../assets/images.svg";

axios.defaults.baseURL = "http://52.79.253.196:4000/";

export default function UserInfoBox(props: any): ReactElement {
  const accessToken = sessionStorage.getItem("accessToken");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = React.useState<string[]>([]);

  async function createNewContent() {
    await axios
      .post(
        "/content",
        { title: title, text: text, category: category, imgUrls: JSON.stringify(images) },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
      .catch((err) => {
        window.location.reload();
        console.log(err);
      });
    window.location.reload();
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
  useEffect(() => {
    if (pageName === "") {
      setCategory("Language");
      props.getCategory("Language");
    } else {
      setCategory(pageName);
      props.getCategory(pageName);
    }
  }, [pageName, props]);

  async function imageOnchange(event: React.ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();
    const file: any = event.target.files;
    const previewImgs: any = document.querySelector(".imgs");
    const previewImgLength = previewImgs.childElementCount;

    reader.onload = () => {
      const img: any = document.createElement("img");
      img.setAttribute("src", reader.result);
      img.setAttribute("style", "border:1px solid black");
      img.setAttribute("style", "width:4rem");
      img.setAttribute("style", "height:4rem");

      if (previewImgLength >= 3) {
        alert("you can upload maximum 3 images");
      } else {
        previewImgs.appendChild(img);
      }
    };
    if (file.length !== 0) {
      reader.readAsDataURL(file[0]);
      if (event.target.files !== null && previewImgLength < 3) {
        const fd: any = new FormData();
        fd.append("imgs", event.target.files[0]);
        axios.post("/image", fd).then((res) => setImages(images.concat(res.data[0].location)));
      }
    }
  }

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
        <UploadSection className="upload" method="post" target="imgs" encType="multipart/form-data" action="uploadForm">
          <ImgUploadBtn htmlFor="input-file"></ImgUploadBtn>
          <Picture
            id="input-file"
            type="file"
            accept="image/png, image/jpeg"
            onChange={imageOnchange}
            style={{ display: "none" }}
          />
          <Imgs className="imgs"> </Imgs>
        </UploadSection>
      </InfoBox>
      <SubmitBtn onClick={createNewContent}>submit</SubmitBtn>
    </Main>
  );
}
const Main = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  //position: fixed;
  margin-left: 3rem;
  margin-top: 1rem;
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
const UploadSection = styled.form`
  margin-top: 1rem;
`;
const Imgs = styled.div`
  width: 11rem;
  height: 4rem;
  background-color: #eeeaea;
  display: flex;
  margin-top: 1.2rem;
  margin-left: 0.8rem;
`;

const ImgUploadBtn = styled.label`
  padding: 1.2rem 1.05rem;
  font-size: 0rem;
  margin: 0.8rem;
  background-image: url(${backgroundimg});
  &:hover {
    cursor: pointer;
  }
`;
