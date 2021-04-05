import React, { ReactElement } from "react";
import styled from "styled-components";
import avatar from "../assets/turtle.jpeg";
import country from "../assets/country.svg";
import heart from "../assets/heart.svg";
import heartSolid from "../assets/heart-solid.svg";

export default function Banner(): ReactElement {
  return (
    <Main>
      <ContentBox className="content">
        <Content>
          <ContentInfo>
            <TitleInfo className="userInfo">
              <UserAvatar src={avatar} style={{ height: "4rem", width: "4rem" }} />
              <TitleBox>
                <UserInfo>
                  <UserName>TurtleMan</UserName>
                  <CountryImg src={country} />
                  <CountryName> South Korea</CountryName>
                </UserInfo>
                <Title>How to Say Orange in korean?</Title>
                <CreatedAt>2021-04-05</CreatedAt>
              </TitleBox>
            </TitleInfo>
          </ContentInfo>
          <Ask>
            <AskText>i've watched it in drama lastnight</AskText>
            <CommentBtnBox>
              <CommentBtn> 1 Comments</CommentBtn>
            </CommentBtnBox>
          </Ask>
        </Content>
        <Comments>
          <CommentBox>
            <CreateComment>
              <CommentInputBox>
                <UserAvatar src={avatar} style={{ height: "2.5rem", width: "2.5rem", margin: "auto 1rem" }} />
                <CreateCommentInput placeholder="Leave Your Comment & Enter" />
              </CommentInputBox>
            </CreateComment>
            <Comment>
              <TitleInfo>
                <UserAvatar src={avatar} style={{ height: "2.5rem", width: "2.5rem", marginLeft: "1rem" }} />
                <TitleBox>
                  <UserInfo>
                    <UserName>꼬부기</UserName>
                    <CountryImg src={country} />
                    <CountryName> South Korea</CountryName>
                  </UserInfo>
                  <CommentText>한국어로 "오렌지" 입니다.</CommentText>
                </TitleBox>
              </TitleInfo>
              <LikesCount>0 Likes</LikesCount>
            </Comment>
            <CommentLikeBox>
              <LikeBox>
                <LikeImg src={heart} />
                <Like>Like</Like>
              </LikeBox>
              <CommentFixBtn>· FIX ·</CommentFixBtn>
              <CommentCreatedAt>2021-04-05</CommentCreatedAt>
            </CommentLikeBox>
          </CommentBox>
        </Comments>
      </ContentBox>
    </Main>
  );
}

const Main = styled.div`
  margin: 1rem;
  display: flex;
  border: 0.1rem solid grey;
  width: 50rem;
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
const ContentInfo = styled.div`
  align-items: flex-end;
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
`;
const CommentBtnBox = styled.div`
  border-bottom: 0.1rem solid grey;
  display: flex;
  justify-content: flex-end;
`;
const CommentBtn = styled.div`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  border: 0;
  color: grey;
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
  align-items: center;
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
  margin-top: 1rem;
`;
const CommentText = styled.div``;
const CommentLikeBox = styled.div`
  display: flex;
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
  border: 0.1rem solid grey;
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
