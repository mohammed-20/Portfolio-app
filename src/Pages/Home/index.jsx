import React from "react";
import Header from "../../Components/Header";
import ParticlesShap from "../../Components/Particles";
import ColorPicker from "../../Components/ColorPicker";
import * as S from "./style";
import * as T from "../../Components/Typography";
import * as I from "../../Components/Icons";
export default function Home() {
  return (
    <S.Wrapper>
      <S.Overlay>
        <ParticlesShap />
        <T.H2>M7.N3im</T.H2>
        <ColorPicker />
        <S.Content>
          <T.H1>welcome</T.H1>
          <T.Head1> I AM Mohammed</T.Head1>
          <S.Line />
          <T.P>REACT DEVELOPER - PHOTOGRAPHER - WEB DESIGNER</T.P>
          <S.Line />
          <S.IconGroup>
            <I.Facebook />
            <I.Twitter />
            <I.UpWork />
            <I.Github />
            <I.LinkedIn />
          </S.IconGroup>
        </S.Content>
        <Header topclose />
      </S.Overlay>
    </S.Wrapper>
  );
}
