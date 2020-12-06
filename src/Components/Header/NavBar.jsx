import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfo,
  faFileAlt,
  faListUl,
  faImage,
  faQuoteLeft,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./style";

export default function NavBar() {
  return (
    <S.NavBar>
      <S.NavItme exact to="/">
        <FontAwesomeIcon icon={faHome} />
        <S.Title className="title">Home</S.Title>
      </S.NavItme>

      <S.NavItme to="/About">
        <FontAwesomeIcon icon={faInfo} />
        <S.Title className="title">About</S.Title>
      </S.NavItme>

      <S.NavItme to="/Resume">
        <FontAwesomeIcon icon={faFileAlt} />
        <S.Title className="title">Resume</S.Title>
      </S.NavItme>

      <S.NavItme to="/Services">
        <FontAwesomeIcon icon={faListUl} />
        <S.Title className="title">Services</S.Title>
      </S.NavItme>

      <S.NavItme to="/Portfolio">
        <FontAwesomeIcon icon={faImage} />
        <S.Title className="title">Portfolio</S.Title>
      </S.NavItme>

      <S.NavItme to="/Testimoials">
        <FontAwesomeIcon icon={faQuoteLeft} />
        <S.Title className="title">Testimoials</S.Title>
      </S.NavItme>

      <S.NavItme to="/ContactUs">
        <FontAwesomeIcon icon={faPhoneAlt} />
        <S.Title className="title">Contact</S.Title>
      </S.NavItme>
    </S.NavBar>
  );
}
