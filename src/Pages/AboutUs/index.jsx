import React from "react";
import ColorPicker from "../../Components/ColorPicker";
import Header from "../../Components/Header";
import AboutImg from "../../images/about.jpg";
import * as T from "../../Components/Typography";
import * as S from "./style";
import Button from "../../Components/Button";
import InfoSection from "./InfoSection";
import Skills from "./Skills";

export default function AboutUs(props) {
  const { onClick } = props;
  return (
    <S.Wrapper>
      <ColorPicker onClick={onClick} />
      <S.Main>
        <S.Content1>
          <S.DivImg>
            <S.AboutImg src={AboutImg} alt="AboutImg" />
          </S.DivImg>
          <S.Describtion>
            <S.TitlePage>
              <S.HeadSpan>Me</S.HeadSpan>
              <T.PageHead1>
                <S.TitleSpan>About</S.TitleSpan>
                Me
              </T.PageHead1>
            </S.TitlePage>

            <T.H4>I am Mohammed, Web Designer &amp; Web Developer </T.H4>
            <T.ParaPage>
              I am a web developer and Web Developer living in California, Gaza.
              I spend my days with my hands in many different areas of web
              development from back end programming to front end engineering. I
              can provide clean code and pixel perfect design. I also make
              website more &amp; more interactive with web animations. I am a
              passionate with my work who loves simplicity in things and crafts
              beautiful user interfaces with love.
            </T.ParaPage>
            <S.DivBtn>
              <Button>Download Resume</Button>
              <Button>Hire me</Button>
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
