import React, { useState } from "react";
import NavBar from "./NavBar";
import MenuBtn from "./MenuBtn";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import * as S from "./style";
export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);
  return (
    <>
      <S.Wrapper sideB={sidebar}>
        <div className="close" onClick={showSideBar}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </div>
        <Logo />
        <NavBar />
      </S.Wrapper>
      <MenuBtn onClick={showSideBar} btnSide={sidebar} />
    </>
  );
}
