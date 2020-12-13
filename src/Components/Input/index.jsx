import React from "react";
import * as S from "./style";
export default function Input(props) {
  const { name, value, placeholder, type, id, handleChange, error } = props;
  return (
    <S.Divinput>
      <label htmlFor={id} />
      <S.Input
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Divinput>
  );
}
