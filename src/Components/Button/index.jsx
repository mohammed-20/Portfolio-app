import React from "react";
import * as S from "./style";
export default function Button({ children, type }) {
  return (
    <S.Button type={type} className="button">
      {children}
    </S.Button>
  );
}
