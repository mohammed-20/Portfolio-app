import React from "react";
import ColorPicker from "../../Components/ColorPicker";
import Header from "../../Components/Header";

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
        </S.Container>
        <Header />
      </S.Overlay>
    </S.Wrapper>
  );
}
