import React from "react";
import * as S from "./style";
export const H1 = (props) => {
  const { children } = props;
  return <S.H1>{children}</S.H1>;
};
export const Head1 = (props) => {
  const { children } = props;
  return <S.Head1>{children}</S.Head1>;
};
export const PageHead1 = (props) => {
  const { children } = props;
  return <S.PageHead1>{children}</S.PageHead1>;
};

export const H4 = (props) => {
  const { children } = props;
  return <S.H4>{children}</S.H4>;
};

export const H6 = (props) => {
  const { children } = props;
  return <S.H6>{children}</S.H6>;
};

export const P = (props) => {
  const { children } = props;
  return <S.P>{children}</S.P>;
};
