import React, { ReactElement, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import avatar from "../assets/avatar.svg";
import country from "../assets/country.svg";
import heart from "../assets/heart.svg";

export default function Contents(props: any): ReactElement {
  const accessToken = sessionStorage.getItem("accessToken");
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState({});
  const [textValue, setTextValue] = useState("");
  const myId = Number(sessionStorage.getItem("id"));
  let { contentData } = props;
  let imgs;
  const loginState = sessionStorage.getItem("login");

  async function onKeyPress(e: React.KeyboardEvent) {
    if (e.key === "Enter" && loginState === "ok") {
      await axios
        .post(
          "/comment",
          { text: textValue, contentId: contentData.id },
          { headers: { Authorization: `Bearer ${accessToken}` } }
        )
        .then(() => window.location.reload());
    }
    if (!loginState) {
      alert("you have to login");
    }
  }

  function getTextValue(e: React.ChangeEvent<HTMLInputElement>) {
    setTextValue(e.target.value);
  }

  if (contentData) {
    imgs = JSON.parse(contentData.imgUrls);
    if (Object.keys(content).length === 0) {
      setContent(contentData);
    }
  }

  async function deleteContent() {
    await axios
      .delete("/dcontent", {
        params: { contentId: contentData.id },
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .catch((err) => console.log(err));
    window.location.reload();
  }

  async function deleteConmment(id: number) {
    await axios
      .delete("/dcomment", {
        params: { commentId: id },
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  }

  async function getComments() {
    if (contentData.comments.length > 0) {
      await axios({
        url: "/comments",
        method: "get",
        params: {
          contentId: contentData.id,
        },
      }).then((res) => setComments(res.data.rows));
    }
  }

  function openUserInfoModal() {
    const modal: any = document.querySelector(".modal");

    if (modal.style.display === "flex") {
      modal.style.display = "none";
    } else {
      modal.style.display = "flex";
    }
  }

  return (
    <Main>
      <ContentBox className="content">
        {contentData ? (
          <Content>
            <ContentInfo>
              <TitleInfo className="userInfo">
                <UserAvatar
                  src={contentData.user.avatarUrl ? contentData.user.avatarUrl : avatar}
                  style={{ height: "4rem", width: "4rem" }}
                />
                <TitleBox>
                  <UserInfo>
                    <UserName>{contentData.user.nickname}</UserName>
                    <CountryImg src={country} />
                    <CountryName> {contentData.user.country}</CountryName>
                  </UserInfo>

                  <Title>{contentData.title}</Title>
                  <CreatedAt>{contentData.createdAt}</CreatedAt>
                </TitleBox>
              </TitleInfo>
              {myId === contentData.user.id ? (
                <DeleteBtn onClick={deleteContent}>×</DeleteBtn>
              ) : (
                <LikeBox className="likebtn">
                  <LikeImg src={heart} />
                  <Like>Like</Like>
                </LikeBox>
              )}
            </ContentInfo>
            <Ask>
              <ContentImgs>
                {imgs
                  ? imgs.map((el: string) => {
                      return <ContentImg src={el} key={Math.random()} />;
                    })
                  : ""}
              </ContentImgs>
              <AskText>{contentData.text}</AskText>
              <CommentBtnBox>
                <CreateComment>
                  <CommentInputBox>
                    <UserAvatar
                      src={contentData.user.avatarUrl ? contentData.user.avatarUrl : avatar}
                      style={{ height: "2.5rem", width: "2.5rem", margin: "auto 1rem" }}
                    />
                    <CreateCommentInput
                      onChange={getTextValue}
                      onKeyPress={onKeyPress}
                      placeholder="Leave Your Comment & Enter"
                    />
                  </CommentInputBox>
                </CreateComment>
                <CommentResponseBox>
                  <CommentResponseLikes>{contentData.likes.length} Likes</CommentResponseLikes>
                  <CommentBtn onClick={getComments}> {contentData.comments.length} Comments</CommentBtn>
                </CommentResponseBox>
              </CommentBtnBox>
            </Ask>
          </Content>
        ) : (
          ""
        )}

        {contentData && comments.length > 0
          ? comments.map((el: any) => {
              return (
                <Comments className="comments" key={el.id} style={{ display: "flex" }}>
                  <CommentBox>
                    <Comment>
                      <TitleInfo>
                        <CommentInfoWrapper>
                          <UserAvatar
                            src={el.user.avatarUrl ? el.user.avatarUrl : avatar}
                            style={{ height: "2.5rem", width: "2.5rem", marginLeft: "1rem" }}
                          />
                          <TitleBox>
                            <UserInfo>
                              <UserName onClick={() => openUserInfoModal()}>{el.user.nickname}</UserName>
                              <CountryImg src={country} />
                              <CountryName> {el.user.country}</CountryName>
                            </UserInfo>
                            <CommentText>{el.text}</CommentText>
                          </TitleBox>
                        </CommentInfoWrapper>
                        {el.userId === myId ? (
                          <DeleteBtn onClick={() => deleteConmment(el.id)} style={{ border: 0, fontSize: "2rem" }}>
                            ×
                          </DeleteBtn>
                        ) : null}
                      </TitleInfo>
                      <CommentLikeBox>
                        <CommentInfo>
                          <LikeBox>
                            <LikeImg src={heart} />
                            <Like>Like</Like>
                          </LikeBox>
                          <CommentCreatedAt>{el.createdAt}</CommentCreatedAt>
                        </CommentInfo>
                        <LikesCount>{el.likes.length} Likes</LikesCount>
                      </CommentLikeBox>
                    </Comment>
                  </CommentBox>
                </Comments>
              );
            })
          : ""}
      </ContentBox>
    </Main>
  );
}

const Main = styled.div`
  margin: 1rem;
  display: flex;
  border: 0.1rem solid grey;
  width: 50rem;
  background-color: white;
  //min-height: 15rem;
`;
const ContentBox = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  width: 50rem;
  //height: 14rem;
`;
const Content = styled.div`
  margin: 1rem;
`;
const ContentImgs = styled.div`
  width: 16rem;
  margin-top: 1rem;
`;
const ContentImg = styled.img`
  border: 0.1rem solid grey;
  width: 7rem;
  height: 7rem;
`;
const ContentInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleBox = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h3`
  color: grey;
  margin: 0;
`;
const CreatedAt = styled.span``;
const TitleInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CommentInfoWrapper = styled.div`
  display: flex;
`;
const CommentResponseBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 11rem;
`;
const CommentResponseLikes = styled.div`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  border: 0;
  color: grey;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: flex-start;
  height: 1.5rem;
`;
const CountryImg = styled.img`
  width: 1.3rem;
  margin-left: 1rem;
`;
const CountryName = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 0.3rem;
`;
const UserAvatar = styled.img`
  border: 0.15rem solid black;
  border-radius: 50%;
`;
const UserName = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
  }
`;

const Ask = styled.div`
  display: flex;
  flex-direction: column;
`;

const AskText = styled.div`
  margin-top: 1rem;
  width: 40rem;
  min-height: 3rem;
  font-size: 1.2rem;
  word-break: break-all;
`;
const CommentBtnBox = styled.div`
  border-bottom: 0.1rem solid grey;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const CommentBtn = styled.div`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  border: 0;
  color: grey;
  &:hover {
    cursor: pointer;
  }
`;

const Comments = styled.div`
  width: 27rem;
`;
const CommentBox = styled.div``;
const CreateComment = styled.div`
  background-color: #e9ecef;
  border: 0.1rem solid #e9ecef;
  border-radius: 1rem;
  min-height: 3rem;
  display: flex;
  width: 25rem;
  align-items: center;
`;
const CreateCommentInput = styled.input`
  width: 19rem;
  height: 2rem;
  border: 1px solid black;
  border-radius: 1rem;
  margin-top: 0.1rem;
  font-size: 1.2rem;
  word-break: break-all;
`;
const CommentInputBox = styled.div`
  display: flex;
  align-items: center;
`;
const Comment = styled.div`
  background-color: #e9ecef;
  border: 0.1rem solid #e9ecef;
  border-radius: 1rem;
  min-height: 4rem;
  margin-top: 1rem;
  width: 25rem;
`;
const CommentText = styled.div`
  z-index: 0;
  //position: absolute;
`;
const CommentInfo = styled.div`
  display: flex;
`;
const CommentLikeBox = styled.div`
  display: flex;
  margin-left: 1.2rem;
  margin-top: 1rem;
  justify-content: space-between;
`;
const LikesCount = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Like = styled.div`
  display: none;
  color: grey;
  font-weight: bold;
`;
const LikeImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
const LikeBox = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  //border: 0.1rem solid grey;
  border-radius: 50%;
  &:hover {
    ${Like} {
      display: flex;
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
    }
    ${LikeImg} {
      display: none;
    }
    cursor: pointer;
  }
`;

const CommentCreatedAt = styled.div`
  color: grey;
  display: flex;
  align-items: center;
`;
const DeleteBtn = styled.div`
  font-size: 1.4rem;
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
  border: 0.15rem solid black;
  &:hover {
    cursor: pointer;
  }
`;
