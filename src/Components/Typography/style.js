import styled from "styled-components";
import { FadeInDownBig } from "../../animation";
import { device } from "../../responsive";
export const H1 = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 400;
  letter-spacing: 15px;
  text-transform: uppercase;
  animation-name: ${FadeInDownBig};
  animation-fill-mode: both;
  animation-duration: 1s;
  @media ${device.laptop} {
    font-size: 2.1rem;
  }
  @media ${device.mobileL} {
    font-size: 1.5rem;
  }
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
  @media ${device.laptop} {
    font-size: 2.9rem;
  }
  @media ${device.mobileL} {
    font-size: 2rem;
  }
`;
export const PageHead1 = styled.h1`
  font-size: 2.7rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 1px;
  @media ${device.laptop} {
    font-size: 2.5rem;
  }
  @media ${device.mobileL} {
    font-size: 2rem;
  }
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
  @media ${device.mobileL} {
    display: none;
  }

  @media ${device.laptopL} {
    max-width: 6.7em;
    height: 15vh;
  }
  @media ${device.laptop} {
    max-width: 5.7em;
    font-size: 2rem;
    height: 18vh;
    padding-right: 0.3em;
  }
`;
export const H3 = styled.h3`
  color: ${(props) => props.theme.titlespancolor};
  margin-bottom: 0.7em;
  text-align: left;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.2;
  @media ${device.laptop} {
    font-size: 1.7rem;
  }
  @media ${device.mobileL} {
    font-size: 1.5rem;
    text-align: center;
  }
`;
export const H4 = styled.h4`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.2;
  margin: 15px 0;
  color: ${(props) => props.theme.textblack};
  @media ${device.laptop} {
    font-size: 1.26rem;
  }
  @media ${device.mobileL} {
    font-size: 1.1rem;
    width: 18em;
  }
  @media ${device.mobileM} {
    font-size: 1rem;
  }
  @media ${device.mobileS} {
    font-size: 0.9rem;
  }
`;
export const Head4 = styled(H4)`
  color: ${(props) => props.theme.white};
  @media ${device.laptop} {
    font-size: 1rem;
    width: 8em;
  }
  @media ${device.mobileL} {
    margin-left: 1em;
  }
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
  @media ${device.laptop} {
    font-size: 1.2rem;
  }
  @media ${device.mobileL} {
    font-size: 1rem;
  }
  @media ${device.mobileS} {
    font-size: 1rem;
    width: 85%;
    margin-left: 1em;
  }
`;
export const ParaPage = styled(P)`
  line-height: 2;
  font-size: 1rem;
  width: 100%;
  animation-name: none;
  margin-bottom: 45px;
  font-weight: 400;
  color: ${(props) => props.theme.colorparagraph};
  @media ${device.laptop} {
    width: 90%;
    line-height: 2;
  }
  @media ${device.tablet} {
    width: 100%;
    line-height: 1.5;
  }
  @media ${device.mobileL} {
    width: 100%;
    line-height: 1.5;
    font-size: 1rem;
  }
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
  @media ${device.laptop} {
    margin-right: 1em;
  }
  @media ${device.tablet} {
    margin-right: auto;
    width: 90%;
    margin-bottom: 0;
  }
  @media ${device.mobileL} {
    font-size: 0.85rem;
    margin-left: 45px;
    margin-right: -4em;
    width: 100%;
  }
  @media ${device.mobileM} {
    font-size: 0.75rem;
    line-height: 1.5;
    margin-left: 25px;
  }
  @media ${device.mobileS} {
    font-size: 0.68rem;
    margin-left: 60px;
  }
`;
