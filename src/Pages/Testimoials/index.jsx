import React from "react";
import ColorPicker from "../../Components/ColorPicker";
import Header from "../../Components/Header";
import Slider from "../../Components/Slider";
import * as S from "./style";
export default function Testimoials() {
  return (
    <S.Wrapper>
      <S.Overlay>
        <ColorPicker />
        <S.Container>
          <S.TitlePage>
            <S.HeadSpan>Cl</S.HeadSpan>
            <h1 className="pagehead">
              Client
              <S.TitleSpan>Reviews</S.TitleSpan>
            </h1>
          </S.TitlePage>
          <div className="slider">
            <Slider />
          </div>
        </S.Container>
        <Header />
      </S.Overlay>
    </S.Wrapper>
  );
}
