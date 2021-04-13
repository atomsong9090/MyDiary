import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import avatar from "../assets/turtle.jpeg";
import country from "../assets/country.svg";
import heart from "../assets/heart.svg";
import heartSolid from "../assets/heart-solid.svg";

export default function Mycontents(props: any): ReactElement {
  const { content } = props;
  const accessToken = sessionStorage.getItem("accessToken");
  const [comments, setComments] = useState([]);
  const [textValue, setTextValue] = useState("");
  let imgs;
  let color;

  if (content) {
    imgs = JSON.parse(content.imgUrls);
    if (content.category === "Language") {
      color = "#8469E3";
    } else if (content.category === "Culture") {
      color = "#44CF86";
    } else if (content.category === "History") {
      color = "#FFC0CB";
    } else {
      color = "#87CEEB";
    }
  }

  async function getComments() {
    if (content.comments.length > 0) {
      await axios({
        url: "/comments",
        method: "get",
        params: {
          contentId: content.id,
        },
      }).then((res) => setComments(res.data.rows));
    }
  }
  async function deleteContent() {
    await axios
      .delete("/dcontent", {
        params: { contentId: content.id },
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .catch((err) => console.log(err));
    window.location.reload();
  }
  async function onKeyPress(e: React.KeyboardEvent) {
    if (e.key == "Enter") {
      await axios
        .post(
          "/comment",
          { text: textValue, contentId: content.id },
          { headers: { Authorization: `Bearer ${accessToken}` } }
        )
        .then(() => window.location.reload());
    }
  }

  function getTextValue(e: React.ChangeEvent<HTMLInputElement>) {
    setTextValue(e.target.value);
  }
  return (
    <Main>
      <ContentBox className="content">
        <Content>
          <ContentInfo>
            <TitleInfo className="userInfo">
              <ContentDescription>
                <UserAvatar src={avatar} style={{ height: "4rem", width: "4rem" }} />
                <TitleBox>
                  <UserInfo>
                    <UserName>{content.user.nickname}</UserName>
                    <CountryImg src={country} />
                    <CountryName> {content.user.country}</CountryName>
                  </UserInfo>
                  <Title>{content.title}</Title>
                  <CreatedAt>{content.createdAt}</CreatedAt>
                </TitleBox>
              </ContentDescription>
              <ContentController>
                <Category style={{ backgroundColor: color }}>{content.category}</Category>
                <DeleteBtn onClick={deleteContent}>×</DeleteBtn>
              </ContentController>
            </TitleInfo>
          </ContentInfo>

          <Ask>
            <ContentImgs>
              {imgs
                ? imgs.map((el: string) => {
                    return <ContentImg src={el} key={Math.random()} />;
                  })
                : ""}
            </ContentImgs>
            <AskText>{content.text}</AskText>
            <CommentBtnBox>
              <CreateComment>
                <CommentInputBox>
                  <UserAvatar src={avatar} style={{ height: "2.5rem", width: "2.5rem", margin: "auto 1rem" }} />
                  <CreateCommentInput
                    onChange={getTextValue}
                    onKeyPress={onKeyPress}
                    placeholder="Leave Your Comment & Enter"
                  />
                </CommentInputBox>
              </CreateComment>
              <CommentResponseBox>
                <CommentResponseLikes>{content.likes.length} Likes</CommentResponseLikes>
                <CommentBtn onClick={getComments}> {content.comments.length} Comments</CommentBtn>
              </CommentResponseBox>
            </CommentBtnBox>
          </Ask>
        </Content>
        {content && comments.length > 0
          ? comments.map((el: any) => {
              return (
                <Comments className="comments" style={{ display: "flex" }}>
                  <CommentBox>
                    <Comment>
                      <CommentInfo>
                        <UserAvatar src={avatar} style={{ height: "2.5rem", width: "2.5rem", marginLeft: "1rem" }} />
                        <TitleBox>
                          <UserInfo>
                            <UserName>{el.user.nickname}</UserName>
                            <CountryImg src={country} />
                            <CountryName> {el.user.country}</CountryName>
                          </UserInfo>
                          <CommentText>{el.text}</CommentText>
                        </TitleBox>
                      </CommentInfo>
                      <LikesCount>{el.likes.length} Likes</LikesCount>
                    </Comment>
                    <CommentLikeBox>
                      <LikeBox>
                        <LikeImg src={heart} />
                        <Like>Like</Like>
                      </LikeBox>
                      <CommentCreatedAt>{el.createdAt}</CommentCreatedAt>
                    </CommentLikeBox>
                  </CommentBox>
                </Comments>
              );
            })
          : null}
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
const ContentController = styled.div`
  display: flex;
  width: 12rem;
  justify-content: space-between;
`;
const ContentInfo = styled.div`
  align-items: flex-end;
`;
const TitleBox = styled.div`
  margin-left: 1rem;
`;
const ContentDescription = styled.div`
  display: flex;
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
const CommentInfo = styled.div`
  display: flex;
`;

const Category = styled.div`
  border: 0.1rem solid grey;
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
  border-radius: 1rem;
  width: 8rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border: 1px solid grey;
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

const ContentImgs = styled.div`
  width: 16rem;
  margin-top: 1rem;
`;
const ContentImg = styled.img`
  border: 0.1rem solid grey;
  width: 7rem;
  height: 7rem;
`;

const AskText = styled.div`
  margin-top: 1rem;
  width: 40rem;
  min-height: 3rem;
  font-size: 1.2rem;
  word-break: break-all;
`;
const CommentBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid grey;
  padding-bottom: 1rem;
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
const CommentBox = styled.div`
  margin-left: 1rem;
`;
const CreateComment = styled.div`
  background-color: #e9ecef;
  border: 0.1rem solid #e9ecef;
  border-radius: 1rem;
  width: 26rem;
  min-height: 3rem;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;
const CreateCommentInput = styled.input`
  width: 20rem;
  height: 2rem;
  border: 1px solid black;
  border-radius: 1rem;
  margin-top: 0.1rem;
  font-size: 1.2rem;
`;
const CommentInputBox = styled.div`
  display: flex;
`;
const Comment = styled.div`
  background-color: #e9ecef;
  border: 0.1rem solid #e9ecef;
  border-radius: 1rem;
  min-height: 4rem;
  min-width: 25rem;
  margin-top: 1rem;
  //position: relative;
`;
const CommentText = styled.div`
  z-index: 0;
  //position: absolute;
`;
const CommentLikeBox = styled.div`
  display: flex;
`;
const LikesCount = styled.div`
  display: flex;
  justify-content: flex-end;
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
  //border-radius: 50%;
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

const CommentFixBtn = styled.button`
  border: none;
  background-color: white;
  color: grey;
  font-weight: bold;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    color: black;
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
