import React from "react";
import styled from "styled-components";
import Progress from "../../Components/Progress";
import DashLine from "../../Components/DashLine";
import { device } from "../../responsive";
import { PageHead1 } from "../../Components/Typography";
const Wrapper = styled.section`
  padding-top: 7.5em;
  padding-bottom: 7.5em;
  display: flex;
  @media ${device.laptop} {
    padding-bottom: 2em;
    padding-top: 3em;
  }
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
  width: 60%;
  margin: 4em auto;
  @media ${device.laptopL} {
    width: 60%;
  }
  @media ${device.laptop} {
    width: 85%;
  }
  @media ${device.tablet} {
    width: 90%;
  }
  @media ${device.mobileL} {
    width: 85%;
  }
`;

const TitlePage = styled.div`
  margin-bottom: 1.875em;
  position: relative;
  margin-top: -1.875em;
  color: ${(props) => props.theme.titlespancolor};
  display: flex;
  justify-content: center;
  @media ${device.mobileL} {
    margin-left: 5em;
  }
`;
const TitleSpan = styled.span`
  border-bottom: 3px dashed;
  padding-bottom: 0.3em;
  color: ${(props) => props.theme.primary};
  left: -11px;
  position: relative;
  @media ${device.mobileL} {
    padding-bottom: 0.2em;
  }
`;
const HeadSpan = styled.span`
  position: absolute;
  left: 84px;
  top: -34px;
  font-weight: 700;
  font-size: 5rem;
  z-index: -1;
  color: ${(props) => props.theme.headSpancolor};
  @media ${device.mobileL} {
    right: -22px;
    top: -15px;
    font-size: 3rem;
    letter-spacing: 2px;
  }
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
