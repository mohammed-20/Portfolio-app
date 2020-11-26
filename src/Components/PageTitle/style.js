import styled from "styled-components";

export const TitlePage = styled.div`
  margin-bottom: 30px;
  position: relative;
  margin-top: -30px;
  color: ${(props) => props.theme.titlespancolor};
`;
export const TitleSpan = styled.span`
  border-bottom: 3px dashed;
  padding-bottom: 10px;
  color: ${(props) => props.theme.primary};
  padding-right: 10px;
`;

export const HeadSpan = styled.span`
  position: absolute;
  right: -31px;
  top: -45px;
  font-weight: 700;
  font-size: 80px;
  z-index: -1;
  color: ${(props) => props.theme.headSpancolor};
`;
