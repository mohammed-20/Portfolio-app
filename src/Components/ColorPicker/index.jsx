import React from "react";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
export default function ColorPicker() {
  return (
    <S.ColorBtn>
      {" "}
      <FontAwesomeIcon icon={faCogs} />
    </S.ColorBtn>
  );
}
