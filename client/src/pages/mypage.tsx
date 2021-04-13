import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import UserInfo from "../components/userstatus";
import Content from "../components/mycontent";

export default function Mypage(): ReactElement {
  const accessToken = sessionStorage.getItem("accessToken");
  const [mycontents, setMycontents] = useState([]);

  useEffect(() => {
    async function getMyContents() {
      await axios
        .get("/mycontents", {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((res) => setMycontents(res.data.data));
    }
    getMyContents();
  }, []);

  return (
    <>
      <Main>
        <UserInfo />
        {mycontents ? (
          <ContentsBox>
            {mycontents.map((el: any) => {
              return <Content content={el} key={el.id} />;
            })}
          </ContentsBox>
        ) : (
          ""
        )}
      </Main>
    </>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentsBox = styled.div`
  width: 52rem;
  min-height: 28rem;
  background-color: #fafafa;
  border: 0.1rem solid #dfdada;
  display: flex;
  margin: auto;
  flex-direction: column;
`;
