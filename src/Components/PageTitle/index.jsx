import React from "react";
import * as S from "./style";
import { PageHead1 } from "../../Components/Typography";
export default function PageTitle(props) {
  const { children, spantext, spanhead } = props;
  return (
    <S.TitlePage>
      <S.HeadSpan>{spanhead}</S.HeadSpan>
      <PageHead1>
        <S.TitleSpan>{spantext}</S.TitleSpan>
        {children}
      </PageHead1>
    </S.TitlePage>
  );
}
