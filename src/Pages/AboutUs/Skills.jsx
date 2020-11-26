import React from "react";
import styled from "styled-components";

import Progress from "../../Components/Progress";
// import DashLine from "../../Components/DashLine";

import PageTitle from "../../Components/PageTitle";
const Wrapper = styled.section`
  padding-top: 120px;
  padding-bottom: 120px;
  display: flex;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 35px;
  align-items: center;
  justify-content: center;
  margin-top: 2.5em;
`;
const P = styled.p`
  line-height: 2;
  font-size: 1rem;
  width: 47em;
  margin-bottom: 20px;
  margin-right: 2em;
  font-weight: 400;
  text-align: center;
  color: ${(props) => props.theme.colorparagraph};
`;

export default function Skills() {
  return (
    <Wrapper>
      {/* <DashLine /> */}
      <Content>
        <PageTitle spanhead="My" spantext="My">
          Skills
        </PageTitle>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur
          ratione quod.
        </P>
        <Progress style={{ width: "95%" }} TextLabel="95%">
          Html
        </Progress>
        <Progress style={{ width: "90%" }} TextLabel="90%">
          CSS
        </Progress>
        <Progress style={{ width: "75%" }} TextLabel="75%">
          WordPress
        </Progress>
        <Progress style={{ width: "80%" }} TextLabel="80%">
          JAVASCRIPT
        </Progress>
        <Progress style={{ width: "85%" }} TextLabel="85%">
          REACT.JS
        </Progress>
      </Content>
    </Wrapper>
  );
}
