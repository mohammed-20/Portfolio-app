import React from "react";
import NavBar from "./NavBar";

import Logo from "./Logo";
import * as S from "./style";
export default function Header() {
  return (
    <S.Wrapper>
      <Logo />
      <NavBar />
    </S.Wrapper>
  );
}
