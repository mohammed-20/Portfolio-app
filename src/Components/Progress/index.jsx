import React from "react";
import * as S from "./style";
export default function Progress(props) {
  const { children, TextLabel, style } = props;
  return (
    <S.ProgressContainer>
      <S.DivProgres>
        <S.Progres style={style}>{children}</S.Progres>
      </S.DivProgres>
      <S.LabelProgress>{TextLabel}</S.LabelProgress>
    </S.ProgressContainer>
  );
}
