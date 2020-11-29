import React from "react";

import * as S from "./style";

export default function BoxService(props) {
  const { children, TitleBox, description } = props;
  return (
    <S.Wrapper>
      <S.Content>
        <h1 className="icon">{children}</h1>
        <h4 className="title">{TitleBox}</h4>
        <p className="description">{description}</p>
      </S.Content>
    </S.Wrapper>
  );
}
