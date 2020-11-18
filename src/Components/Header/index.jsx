import React from "react";
import NavBar from "./NavBar";
import Logo from "../../images/Logo.png";
import * as S from "./style";
export default function Header() {
  return (
    <S.Wrapper>
      <S.Logo src={Logo} alt="Logo" />
      <NavBar />
    </S.Wrapper>
  );
}
