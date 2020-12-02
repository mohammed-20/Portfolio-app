import styled from "styled-components";

export const TitlePage = styled.div`
  margin-bottom: 1.875em;
  position: relative;
  margin-top: -0.5em;
  color: ${(props) => props.theme.titlespancolor};
  display: flex;
  justify-content: center;
  margin-left: 2.75em;
`;
export const TitleSpan = styled.span`
  border-bottom: 3px dashed;
  padding-bottom: 0.625em;
  color: ${(props) => props.theme.primary};

  position: relative;
  left: -11px;
  margin-left: -3.6em;
`;

export const HeadSpan = styled.span`
  position: absolute;

  top: -34px;
  font-weight: 700;
  font-size: 5rem;
  z-index: -1;
  color: ${(props) => props.theme.headSpancolor};
`;
