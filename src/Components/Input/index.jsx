import React from "react";
import * as S from "./style";
export default function Input(props) {
  const { name, value, placeholder, type, id } = props;
  return (
    <S.Divinput>
      <label htmlFor={id}></label>
      <S.Input
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
      />
    </S.Divinput>
  );
}
