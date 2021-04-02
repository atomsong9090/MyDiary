import React, { ReactElement, useState } from "react";
import styled from "styled-components";

export default function Diary(): ReactElement {
  const [workoutStatus, setWorkoutStatus] = useState(false);
  console.log(workoutStatus);
  const [Emotion1, SetEmoticon1] = useState(false);
  const [Emotion2, SetEmoticon2] = useState(false);
  const [Emotion3, SetEmoticon3] = useState(false);
  const [Emotion4, SetEmoticon4] = useState(false);
  const [Emotion5, SetEmoticon5] = useState(false);
  const [Weather1, SetWeather1] = useState(false);
  const [Weather2, SetWeather2] = useState(false);
  const [Weather3, SetWeather3] = useState(false);
  const [Weather4, SetWeather4] = useState(false);
  const [Weather5, SetWeather5] = useState(false);

  function statusHandler(status: string) {
    if (status === "workout") {
      if (workoutStatus === false) {
        setWorkoutStatus(true);
      } else {
        setWorkoutStatus(false);
      }
    }
  }

  function emotionHandler(EmoticonId: number) {
    if (EmoticonId === 1) {
      if (Emotion1 === false) {
        SetEmoticon1(true);
        SetEmoticon2(false);
        SetEmoticon3(false);
        SetEmoticon4(false);
        SetEmoticon5(false);
      } else {
        SetEmoticon1(false);
      }
    } else if (EmoticonId === 2) {
      if (Emotion2 === false) {
        SetEmoticon1(false);
        SetEmoticon2(true);
        SetEmoticon3(false);
        SetEmoticon4(false);
        SetEmoticon5(false);
      } else {
        SetEmoticon2(false);
      }
    } else if (EmoticonId === 3) {
      if (Emotion3 === false) {
        SetEmoticon1(false);
        SetEmoticon2(false);
        SetEmoticon3(true);
        SetEmoticon4(false);
        SetEmoticon5(false);
      } else {
        SetEmoticon3(false);
      }
    } else if (EmoticonId === 4) {
      if (Emotion4 === false) {
        SetEmoticon1(false);
        SetEmoticon2(false);
        SetEmoticon3(false);
        SetEmoticon4(true);
        SetEmoticon5(false);
      } else {
        SetEmoticon4(false);
      }
    } else if (EmoticonId === 5) {
      if (Emotion5 === false) {
        SetEmoticon1(false);
        SetEmoticon2(false);
        SetEmoticon3(false);
        SetEmoticon4(false);
        SetEmoticon5(true);
      } else {
        SetEmoticon5(false);
      }
    }
  }

  function weatherHandler(WeatherId: number) {
    if (WeatherId === 1) {
      if (Weather1 === false) {
        SetWeather1(true);
        SetWeather2(false);
        SetWeather3(false);
        SetWeather4(false);
        SetWeather5(false);
      } else {
        SetWeather1(false);
      }
    } else if (WeatherId === 2) {
      if (Weather2 === false) {
        SetWeather1(false);
        SetWeather2(true);
        SetWeather3(false);
        SetWeather4(false);
        SetWeather5(false);
      } else {
        SetWeather2(false);
      }
    } else if (WeatherId === 3) {
      if (Weather3 === false) {
        SetWeather1(false);
        SetWeather2(false);
        SetWeather3(true);
        SetWeather4(false);
        SetWeather5(false);
      } else {
        SetWeather3(false);
      }
    } else if (WeatherId === 4) {
      if (Weather4 === false) {
        SetWeather1(false);
        SetWeather2(false);
        SetWeather3(false);
        SetWeather4(true);
        SetWeather5(false);
      } else {
        SetWeather4(false);
      }
    } else if (WeatherId === 5) {
      if (Weather5 === false) {
        SetWeather1(false);
        SetWeather2(false);
        SetWeather3(false);
        SetWeather4(false);
        SetWeather5(true);
      } else {
        SetWeather5(false);
      }
    }
  }

  return (
    <Main>
      <DayInfoBox>
        <TodayInfo className="Today">
          <InfoBox>
            <Option>Today</Option>
            <Description>2021-04-02</Description>
          </InfoBox>
          <InfoBox>
            <Option>Emotion</Option>
            <Description style={{ height: "2.5rem" }}>
              <EmoticonBox>
                <Emoticon onClick={() => emotionHandler(1)} theme={Emotion1}>
                  🥰
                </Emoticon>
              </EmoticonBox>
              <EmoticonBox>
                <Emoticon onClick={() => emotionHandler(2)} theme={Emotion2}>
                  😄
                </Emoticon>
              </EmoticonBox>
              <EmoticonBox>
                <Emoticon onClick={() => emotionHandler(3)} theme={Emotion3}>
                  😐
                </Emoticon>
              </EmoticonBox>
              <EmoticonBox>
                <Emoticon onClick={() => emotionHandler(4)} theme={Emotion4}>
                  😭
                </Emoticon>
              </EmoticonBox>
              <EmoticonBox>
                <Emoticon onClick={() => emotionHandler(5)} theme={Emotion5}>
                  😡
                </Emoticon>
              </EmoticonBox>
            </Description>
          </InfoBox>
          <InfoBox>
            <Option>Weather</Option>
            <Description style={{ height: "2.5rem" }}>
              <EmoticonBox>
                <Emoticon onClick={() => weatherHandler(1)} theme={Weather1}>
                  🌞
                </Emoticon>
              </EmoticonBox>
              <EmoticonBox>
                <Emoticon onClick={() => weatherHandler(2)} theme={Weather2}>
                  ⛅
                </Emoticon>
              </EmoticonBox>
              <EmoticonBox>
                <Emoticon onClick={() => weatherHandler(3)} theme={Weather3}>
                  🌧
                </Emoticon>
              </EmoticonBox>
              <EmoticonBox>
                <Emoticon onClick={() => weatherHandler(4)} theme={Weather4}>
                  💨
                </Emoticon>
              </EmoticonBox>
              <EmoticonBox>
                <Emoticon onClick={() => weatherHandler(5)} theme={Weather5}>
                  🌨
                </Emoticon>
              </EmoticonBox>
            </Description>
          </InfoBox>
        </TodayInfo>
        <Content>
          {workoutStatus ? (
            <AddBtn onClick={() => statusHandler("workout")}>-</AddBtn>
          ) : (
            <AddBtn onClick={() => statusHandler("workout")}>+</AddBtn>
          )}
          {workoutStatus ? (
            <Value>
              <ValueInput type="number" placeholder="number" />
              <ValueUnit>Min</ValueUnit>
            </Value>
          ) : (
            <WorkOut>Workout</WorkOut>
          )}
        </Content>
      </DayInfoBox>
    </Main>
  );
}

const Main = styled.div`
  width: 38rem;
  height: 48rem;
  border: 0.1rem solid grey;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  background-color: white;
`;

const DayInfoBox = styled.div`
  width: 35rem;
  margin: auto;
  margin-top: 1rem;
`;

const Option = styled.div`
  background-color: pink;
  width: 7rem;
  height: 2.5rem;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid grey;
  width: 27rem;
  margin-left: 1rem;
  font-size: 1.4rem;
`;

const TodayInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoBox = styled.div`
  display: flex;
  margin: 0.2rem 0rem;
`;

const Emoticon = styled.div`
  font-size: 1.75rem;
  transform-origin: ${(props) => (props.theme === true ? "50% 50%" : "")};
  animation: ${(props) => (props.theme === true ? "rotate_image 1.5s linear infinite" : "")};
  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 480px) {
    display: none;
  }
  &:hover {
    font-size: 2rem;
  }
`;
const EmoticonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 3rem;
  &:hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  border: 0.1rem solid grey;
  display: flex;
  flex-direction: column;
  width: 8rem;
  height: 5rem;
`;
const AddBtn = styled.button`
  width: 100%;
  height: 1.5rem;
  margin: auto;
  border: 0px;
  &:hover {
    cursor: pointer;
  }
`;

const WorkOut = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Value = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const ValueInput = styled.input`
  width: 50%;
  height: 1.5rem;
  margin: 0.5rem auto;
  text-align: center;
`;
const ValueUnit = styled.div`
  display: flex;
  align-items: center;
`;
