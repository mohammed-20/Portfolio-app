import styled from "styled-components";
import { FadeInDownBig } from "../../animation";

export const H1 = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 400;
  letter-spacing: 15px;
  text-transform: uppercase;
  animation-name: ${FadeInDownBig};
  animation-fill-mode: both;
  animation-duration: 1s;
`;
export const Head1 = styled.h1`
  font-size: 3.5rem;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0.2em 0 0.2em 0;
  animation-name: ${FadeInDownBig};
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-delay: 1s;
`;
export const PageHead1 = styled.h1`
  font-size: 2.7rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 1px;
`;
export const H2 = styled.h2`
  position: absolute;
  right: 1.4em;
  top: -0.2em;
  z-index: 10;
  height: 15.5vh;
  width: 6.7em;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.backgroundLogo};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 1.2;
  padding-right: 0.8em;
`;
export const H3 = styled.h3`
  color: ${(props) => props.theme.titlespancolor};
  margin-bottom: 0.7em;
  text-align: left;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.2;
`;
export const H4 = styled.h4`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.2;
  color: ${(props) => props.theme.textblack};
`;
export const Head4 = styled(H4)`
  color: ${(props) => props.theme.white};
`;

export const H6 = styled.h6`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  color: ${(props) => props.theme.fontColor};
`;

export const P = styled.p`
  line-height: 1;
  font-size: 1.3rem;
  margin: 1.25em 0;
  animation-name: ${FadeInDownBig};
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-delay: 2s;
`;
export const ParaPage = styled(P)`
  line-height: 2;
  font-size: 1rem;
  width: 47em;
  animation-name: none;
  margin-bottom: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.colorparagraph};
`;
export const Subtitle = styled.p`
  line-height: 2;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 0.5em;
  margin-right: 5em;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.colorparagraph};
`;
