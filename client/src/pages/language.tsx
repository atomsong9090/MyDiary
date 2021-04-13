import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Content from "../components/content";

axios.defaults.baseURL = "http://52.79.253.196:4000";

export default function MainPage(props: any): ReactElement {
  const [contents, setContents]: any = useState([]);
  const { category } = props;
  useEffect(() => {
    if (category.length > 1) {
      async function get() {
        const contentsData = await axios({
          url: "/contents",
          method: "get",
          params: { category: category },
        });
        setContents(contentsData.data.data);
      }
      get();
    }
  }, [category]);

  return (
    <Main>
      <Contents className="contents">
        <ContentBox>
          {contents.length > 0 ? (
            contents.map((el: any) => {
              return <Content contentData={el} key={el.id} />;
            })
          ) : (
            <Content />
          )}
        </ContentBox>
      </Contents>
    </Main>
  );
}
const Main = styled.div`
  display: flex;
  flex-direction: column;
  // background-color: red;
  width: 52rem;
`;

const Contents = styled.div`
  width: 75rem;
  height: 35rem;
  margin: 1rem auto;
  display: flex;
  // overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: #4b4b4b;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #83e299;
  }
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  //margin: auto;
`;
