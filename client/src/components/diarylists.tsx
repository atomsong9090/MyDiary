import React, { ReactElement } from "react";
import styled from "styled-components";
import workout from "../assets/running.svg";
import bed from "../assets/bed.svg";
import water from "../assets/water.svg";
import food from "../assets/food.svg";
import book from "../assets/book.svg";
import fun from "../assets/fun.svg";

export default function DiaryList(): ReactElement {
  return (
    <Main>
      <Date>2021-04-02 FRI</Date>
      <SubjectBox>
        <Title>Health Report</Title>
        <Subject>
          <Mission>
            <ContentBox>
              <ContentImg src={workout} />
              <Type>Workout</Type>
            </ContentBox>
            <ContentBox>
              <Description>50 min</Description>
            </ContentBox>
          </Mission>
          <Mission>
            <ContentBox>
              <ContentImg src={water} />
              <Type>Water</Type>
            </ContentBox>
            <ContentBox>
              <Description>1,500 ml</Description>
            </ContentBox>
          </Mission>
          <Mission>
            <ContentBox>
              <ContentImg src={bed} />
              <Type>Sleep</Type>
            </ContentBox>
            <ContentBox>
              <Description> 12 Hours</Description>
            </ContentBox>
          </Mission>
        </Subject>
      </SubjectBox>
      <SubjectBox>
        <Title>Money Spent</Title>
        <Subject>
          <Mission>
            <ContentBox>
              <ContentImg src={food} />
              <Type>For Food</Type>
            </ContentBox>
            <ContentBox>
              <Description>20 $</Description>
            </ContentBox>
          </Mission>
          <Mission>
            <ContentBox>
              <ContentImg src={fun} />
              <Type>For Fun</Type>
            </ContentBox>
            <ContentBox>
              <Description>3 $</Description>
            </ContentBox>
          </Mission>
          <Mission>
            <ContentBox>
              <ContentImg src={book} />
              <Type>For Study</Type>
            </ContentBox>
            <ContentBox>
              <Description> 0 $</Description>
            </ContentBox>
          </Mission>
        </Subject>
      </SubjectBox>
    </Main>
  );
}
const Main = styled.div`
  width: 18rem;
  height: 11rem;
  margin-top: 2rem;
  border: 0.1rem solid grey;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;
const ContentBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Mission = styled.div`
  width: 33%;
  flex-direction: column;
  display: flex;
`;
const ContentImg = styled.img`
  width: 1rem;
`;
const Type = styled.div`
  //border: 0.1rem solid grey;
`;

const Description = styled.div`
  // border: 0.1rem solid grey;
  width: 12rem;
  display: flex;
  justify-content: center;
`;

const Date = styled.div`
  background-color: #ecf5f8;
  height: 1.7rem;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Subject = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const SubjectBox = styled.div``;
const Title = styled.h3`
  margin: 0rem 0rem 0.5rem 0rem;
  text-align: center;
  border-top: 0.1rem solid grey;
  border-bottom: 0.1rem solid grey;
`;
