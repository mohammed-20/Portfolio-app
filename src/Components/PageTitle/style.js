import styled from "styled-components";

export const TitlePage = styled.div`
  margin-bottom: 30px;
  position: relative;
  margin-top: -8px;
  color: ${(props) => props.theme.titlespancolor};
  display: flex;
  justify-content: center;
  margin-left: 44px;
`;
export const TitleSpan = styled.span`
  border-bottom: 3px dashed;
  padding-bottom: 10px;
  color: ${(props) => props.theme.primary};

  position: relative;
  left: -11px;
  margin-left: -162px;
`;

export const HeadSpan = styled.span`
  position: absolute;

  top: -34px;
  font-weight: 700;
  font-size: 80px;
  z-index: -1;
  color: ${(props) => props.theme.headSpancolor};
`;
