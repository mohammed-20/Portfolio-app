import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfo,
  faFileAlt,
  faListUl,
  faImage,
  faDollarSign,
  faQuoteLeft,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./style";

export default function NavBar() {
  return (
    <S.NavBar>
      <S.NavItme to="/">
        <FontAwesomeIcon icon={faHome} />
      </S.NavItme>

      <S.NavItme to="/About">
        <FontAwesomeIcon icon={faInfo} />
      </S.NavItme>

      <S.NavItme to="/Resume">
        <FontAwesomeIcon icon={faFileAlt} />
      </S.NavItme>

      <S.NavItme to="/Services">
        <FontAwesomeIcon icon={faListUl} />
      </S.NavItme>

      <S.NavItme to="/Portfolio">
        <FontAwesomeIcon icon={faImage} />
      </S.NavItme>

      <S.NavItme to="/Pricing">
        <FontAwesomeIcon icon={faDollarSign} />
      </S.NavItme>

      <S.NavItme to="/Testimoials">
        <FontAwesomeIcon icon={faQuoteLeft} />
      </S.NavItme>

      <S.NavItme to="/ContactUs">
        <FontAwesomeIcon icon={faPhoneAlt} />
      </S.NavItme>
    </S.NavBar>
  );
}
