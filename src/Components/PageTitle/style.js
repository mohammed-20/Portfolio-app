import styled from "styled-components";
import { device } from "../../responsive";
export const TitlePage = styled.div`
  margin-bottom: 1.875em;
  position: relative;
  margin-top: -0.5em;
  color: ${(props) => props.theme.titlespancolor};
  display: flex;
  justify-content: center;
  margin-left: 2.75em;
  @media ${device.mobileL} {
    margin-left: 13em;
    margin-top: -4em;
  }
`;
export const TitleSpan = styled.span`
  border-bottom: 3px dashed;
  padding-bottom: 0.3em;
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
  @media ${device.mobileL} {
    font-size: 3rem;
    top: -13px;
    right: 55px;
  }
  @media ${device.mobileS} {
    font-size: 3rem;
    top: -13px;
    right: 20px;
  }
`;
