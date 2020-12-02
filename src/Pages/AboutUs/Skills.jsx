import React from "react";
import styled from "styled-components";
import Progress from "../../Components/Progress";
import DashLine from "../../Components/DashLine";
// import PageTitle from "../../Components/PageTitle";
import { Subtitle, PageHead1 } from "../../Components/Typography";
const Wrapper = styled.section`
  padding-top: 7.5em;
  padding-bottom: 7.5em;
  display: flex;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding-right: 0.9375em;
  padding-left: 2.1875em;
  align-items: center;
  justify-content: center;
  margin-top: 2.5em;
`;
const ContenrProgress = styled.div`
  margin-top: 2em;
  margin-left: 2em;
`;
const TitlePage = styled.div`
  margin-bottom: 1.875em;
  position: relative;
  margin-top: -1.875em;
  color: ${(props) => props.theme.titlespancolor};
  display: flex;
  justify-content: center;
`;
const TitleSpan = styled.span`
  border-bottom: 3px dashed;
  padding-bottom: 0.625em;
  color: ${(props) => props.theme.primary};

  left: -11px;
  position: relative;
`;
const HeadSpan = styled.span`
  position: absolute;
  left: 84px;
  top: -34px;
  font-weight: 700;
  font-size: 5rem;
  z-index: -1;
  color: ${(props) => props.theme.headSpancolor};
`;
export default function Skills() {
  return (
    <Wrapper>
      <Content>
        <DashLine />
        <TitlePage>
          <HeadSpan>My</HeadSpan>
          <PageHead1>
            <TitleSpan>My</TitleSpan>
            Skills
          </PageHead1>
        </TitlePage>
        <Subtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur
          ratione quod.
        </Subtitle>
        <ContenrProgress>
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
        </ContenrProgress>
      </Content>
    </Wrapper>
  );
}
