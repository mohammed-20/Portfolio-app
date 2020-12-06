import React from "react";
import ColorPicker from "../../Components/ColorPicker";
import Header from "../../Components/Header";
import DashLine from "../../Components/DashLine";
import PageTitle from "../../Components/PageTitle";
import * as S from "./style";
import * as T from "../../Components/Typography";
import Gallery from "./Gallery";
export default function Portfolio() {
  return (
    <S.Wrapper>
      <ColorPicker />
      <S.Container>
        <DashLine />
        <PageTitle spanhead="My" spantext="My">
          Portfolio
        </PageTitle>
        <T.Subtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur
          ratione quod.
        </T.Subtitle>
        <Gallery />
      </S.Container>
      <Header />
    </S.Wrapper>
  );
}
