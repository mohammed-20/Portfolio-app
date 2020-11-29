import React from "react";
import { useHistory } from "react-router-dom";
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
  const currentRoute = useHistory().location.pathname.toLowerCase();
  return (
    <S.NavBar>
      <S.NavItme
        className={currentRoute.includes("/home") ? "active" : ""}
        to="/home"
      >
        <FontAwesomeIcon icon={faHome} />
      </S.NavItme>

      <S.NavItme
        className={currentRoute.includes("about") ? "active" : ""}
        to="/About"
      >
        <FontAwesomeIcon icon={faInfo} />
      </S.NavItme>

      <S.NavItme
        className={currentRoute.includes("resume") ? "active" : ""}
        to="/Resume"
      >
        <FontAwesomeIcon icon={faFileAlt} />
      </S.NavItme>

      <S.NavItme
        className={currentRoute.includes("services") ? "active" : ""}
        to="/Services"
      >
        <FontAwesomeIcon icon={faListUl} />
      </S.NavItme>

      <S.NavItme
        className={currentRoute.includes("portfolio") ? "active" : ""}
        to="/Portfolio"
      >
        <FontAwesomeIcon icon={faImage} />
      </S.NavItme>

      <S.NavItme
        className={currentRoute.includes("pricing") ? "active" : ""}
        to="/Pricing"
      >
        <FontAwesomeIcon icon={faDollarSign} />
      </S.NavItme>

      <S.NavItme
        className={currentRoute.includes("Testimoials") ? "active" : ""}
        to="/Testimoials"
      >
        <FontAwesomeIcon icon={faQuoteLeft} />
      </S.NavItme>

      <S.NavItme
        className={currentRoute.includes("ContactUs") ? "active" : ""}
        to="/ContactUs"
      >
        <FontAwesomeIcon icon={faPhoneAlt} />
      </S.NavItme>
    </S.NavBar>
  );
}
