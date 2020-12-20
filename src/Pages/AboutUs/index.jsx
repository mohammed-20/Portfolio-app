import React from "react";
import ColorPicker from "../../Components/ColorPicker";
import Header from "../../Components/Header";
import { About } from "../../images";
import * as T from "../../Components/Typography";
import * as S from "./style";
import Button from "../../Components/Button";
import InfoSection from "./InfoSection";
import Skills from "./Skills";

export default function AboutUs() {
  return (
    <S.Wrapper>
      <ColorPicker />
      <S.Main>
        <S.Content1>
          <S.DivImg>
            <S.AboutImg src={About} alt="About" />
          </S.DivImg>
          <S.Describtion>
            <S.TitlePage>
              <S.HeadSpan>Me</S.HeadSpan>
              <T.PageHead1>
                <S.TitleSpan>About</S.TitleSpan>
                Me
              </T.PageHead1>
            </S.TitlePage>

            <T.H4>Front-End developer</T.H4>
            <T.ParaPage>
              Mohammed Naim from Palestine. Working on different projects since
              2017. I am familiar with creating flexible and perfect pixels UI
              websites by using React Js. I also enjoy fixing the bugs while
              coding the application. Don't hesitate to contact me if you need
              to help.
            </T.ParaPage>
            <S.DivBtn>
              <Button>Download Resume</Button>
            </S.DivBtn>
          </S.Describtion>
        </S.Content1>
        <InfoSection />
        <Skills />
      </S.Main>
      <Header />
    </S.Wrapper>
  );
}
