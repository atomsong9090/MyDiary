import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import landmark from "../assets/landmark.svg";
import history from "../assets/history.svg";
import language from "../assets/alphabet.svg";
import travel from "../assets/travel.svg";

export default function Question(): ReactElement {
  const historys = useHistory();
  return (
    <Main>
      <ContentRank>
        <Contents>
          <ContentBox
            onClick={() => {
              historys.push("/");
            }}
          >
            {" "}
            <Content style={{ background: "#8469E3" }}>
              <ImgBox>
                <SubjectImg src={language} />
              </ImgBox>
              <Title style={{ color: "white" }}>Language</Title>
              <Detail>Show Detail ...</Detail>
              <Description style={{ color: "#eeeed4" }}>Word, Grammar</Description>
            </Content>
          </ContentBox>
          <ContentBox
            onClick={() => {
              historys.push("/culture");
            }}
          >
            {" "}
            <Content style={{ background: "#44CF86" }}>
              <ImgBox>
                <SubjectImg src={landmark} />
              </ImgBox>
              <Title style={{ color: "white" }}>Culture</Title>
              <Detail>Show Detail ...</Detail>
              <Description style={{ color: "#eeeed4" }}>Music, Drama, ETC..</Description>
            </Content>
          </ContentBox>

          <ContentBox
            onClick={() => {
              historys.push("/history");
            }}
          >
            {" "}
            <Content style={{ background: "#ffc0cb" }}>
              <ImgBox>
                <SubjectImg src={history} />
              </ImgBox>
              <Title style={{ color: "white" }}>History</Title>
              <Detail>Show Detail ...</Detail>
              <Description style={{ color: "#eeeed4" }}>K pop, Drama, ETC..</Description>
            </Content>
          </ContentBox>

          <ContentBox
            onClick={() => {
              historys.push("/travel");
            }}
          >
            {" "}
            <Content style={{ background: " skyblue" }}>
              <ImgBox>
                <SubjectImg src={travel} />
              </ImgBox>
              <Title style={{ color: "white" }}>Travel</Title>
              <Detail>Show Detail ...</Detail>
              <Description style={{ color: "white" }}>K pop, Drama, ETC..</Description>
            </Content>
          </ContentBox>
        </Contents>
      </ContentRank>
      <Info>
        <TitleBox>Top Searches</TitleBox>
        <TitleOutLine />
      </Info>
    </Main>
  );
}

const Main = styled.div`
  width: 75rem;
  height: 18rem;
  margin: auto;
  display: flex;
`;
const ContentRank = styled.div``;

const Contents = styled.div`
  display: flex;
  width: 80%;
  height: 15rem;
  //background-color: red;
`;
const Title = styled.h1`
  text-align: center;
  margin: 0;
`;
const Description = styled.h3`
  text-align: center;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;
const Detail = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 1rem;
  color: white;
  font-size: 1.2rem;
  width: 8rem;
  height: 2rem;
  border: 0.15rem solid white;
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
const Content = styled.div`
  margin-top: 2rem;
  width: 12.5rem;
  height: 12.5rem;
  //border: 1px solid grey;
  border-radius: 1.8rem;
  box-shadow: 3px 3px 3px;
  &:hover {
    ${Description} {
      display: none;
    }
    ${Detail} {
      display: flex;
    }
    cursor: pointer;
  }
`;

const ContentBox = styled.div`
  margin-left: 1rem;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
const SubjectImg = styled.img`
  margin-top: 2rem;
  width: 3rem;
  height: 3rem;
`;

const Info = styled.div`
  background-color: #f8f8f8;
  margin-top: 2rem;
  margin-left: 2.5rem;
  width: 100%;
  height: 12.5rem;
  border: 0.1rem solid grey;
`;
const TitleBox = styled.div`
  font-size: 1.8rem;
  display: flex;
  margin: 0.3rem 1rem;
  color: grey;
`;

const TitleOutLine = styled.div`
  width: 11rem;
  height: 0.1rem;
  margin-left: 1rem;
  border: 0.08rem solid grey;
  border-radius: 1rem;
  background-color: grey;
`;
