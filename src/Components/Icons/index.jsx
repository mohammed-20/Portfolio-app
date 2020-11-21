import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Upwork from "../../images/Icons/Upwork.svg";

import * as S from "./style";
export const Facebook = () => {
  return (
    <S.Icon>
      <FontAwesomeIcon icon={faFacebookF} size="2x" />
    </S.Icon>
  );
};
export const Twitter = () => {
  return (
    <S.Icon>
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </S.Icon>
  );
};
export const LinkedIn = () => {
  return (
    <S.Icon>
      <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
    </S.Icon>
  );
};

export const UpWork = () => {
  return (
    <S.Icon>
      <S.ImgIcon src={Upwork} alt="UpWork" />
    </S.Icon>
  );
};

export const Fiverr = () => {
  return (
    <S.Icon>
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </S.Icon>
  );
};
