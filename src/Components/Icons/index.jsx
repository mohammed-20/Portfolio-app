import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faPlus, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Upwork from "./UpWork";
import UpworkFooter from "./UpWorkFooter";
import * as S from "./style";

export const Facebook = () => {
  return (
    <S.Icon href="https://www.facebook.com/mohammed.naim.12300">
      <FontAwesomeIcon icon={faFacebookF} size="2x" />
    </S.Icon>
  );
};
export const Twitter = () => {
  return (
    <S.Icon href="https://twitter.com/mohamme72976859">
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </S.Icon>
  );
};
export const LinkedIn = () => {
  return (
    <S.Icon href="https://www.linkedin.com/in/mohammed-naim-236160169/">
      <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
    </S.Icon>
  );
};

export const UpWork = () => {
  return (
    <S.Icon href="https://www.upwork.com">
      <Upwork />
    </S.Icon>
  );
};
export const UpWorkFooter = () => {
  return (
    <S.Icon href="https://www.upwork.com">
      <UpworkFooter />
    </S.Icon>
  );
};

export const Github = () => {
  return (
    <S.Icon href="https://github.com/mohammed-20">
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </S.Icon>
  );
};
export const Plus = () => {
  return (
    <S.PlusIcon>
      <FontAwesomeIcon icon={faPlus} size="2x" />
    </S.PlusIcon>
  );
};
export const Quote = () => {
  return (
    <S.QuotIcon>
      <FontAwesomeIcon icon={faQuoteRight} />
    </S.QuotIcon>
  );
};

export const BoxIcon = ({ children }) => {
  return (
    <S.DivIcon>
      <S.ShapBox>{children}</S.ShapBox>
    </S.DivIcon>
  );
};
