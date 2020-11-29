import React from "react";
import * as S from "./style";
import * as T from "../Typography";
export default function Card(props) {
  const { dateparagraph, titleCard, subtitlecard, descriptioncard } = props;
  return (
    <S.DivCard>
      <S.DateCard>
        <p className="date">{dateparagraph}</p>
      </S.DateCard>
      <S.Card>
        <T.H4>{titleCard}</T.H4>
        <h6 className="subtitle">{subtitlecard}</h6>
        <p className="description">{descriptioncard}</p>
      </S.Card>
    </S.DivCard>
  );
}
