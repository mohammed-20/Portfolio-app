import styled from "styled-components";
import { BounceInUp } from "../../animation";
import { device } from "../../responsive";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundPages};
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const Main = styled.main`
  width: 93%;
  transition: 0.3s;
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-name: ${BounceInUp};
  @media ${device.tablet} {
    width: 89%;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;
export const Content1 = styled.section`
  padding: 8em 0;
  width: 85%;
  margin-right: auto;
  margin-left: 7em;
  display: flex;
  justify-content: center;
  @media ${device.mobileL} {
    padding: 8em 0 5em 0;
  }

  @media ${device.laptop} {
    width: 95%;
    margin-left: 2.5em;
  }
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
  }
`;

export const Describtion = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding-right: 0.9375em;
  padding-left: 2.1875em;
  align-items: flex-start;
  justify-content: center;
  @media ${device.mobileL} {
    margin-left: -3.8em;
  }
`;
export const DivImg = styled.div`
  border: 4px dashed ${(props) => props.theme.primary};
  @media ${device.laptop} {
    width: 15em;
  }
  @media ${device.mobileL} {
    width: 14em;
    margin-left: 60px;
    margin-top: -40px;
    margin-bottom: 50px;
  }
  @media ${device.mobileM} {
    margin-left: 35px;
    margin-top: -45px;
  }
  @media ${device.mobileS} {
    margin-left: 25px;
    margin-top: -40px;
    width: 13.6em;
  }
`;
export const AboutImg = styled.img`
  max-height: 28.125em;
  margin: 0.93em 1em -0.93em -0.93em;
  @media ${device.laptop} {
    max-height: 19em;
    margin: 0.93em 1em -0.93em -0.93em;
  }
  @media ${device.tablet} {
    margin: 0.93em 1em -0.93em -1.7em;
  }
  @media ${device.mobileL} {
    max-height: 20.5em;
    margin-right: 15px;
    margin-top: 15px;
    margin-bottom: -15px;
    margin-left: -15px;
  }
  @media ${device.mobileS} {
    max-height: 20em;
    margin-top: 17px;
  }
`;

export const DivBtn = styled.div`
  display: flex;
  padding-top: 0.25rem;
  @media ${device.mobileL} {
    padding-top: 0.25rem;
    margin-top: -0.8em;
  }
`;
export const TitlePage = styled.div`
  margin-bottom: 1.875em;
  position: relative;
  margin-top: -1.875em;
  color: ${(props) => props.theme.titlespancolor};
  @media ${device.laptop} {
    margin-top: -1em;
  }
  @media ${device.mobileL} {
    margin-top: -0.2em;
    font-size: 2rem;
    margin-bottom: 0.9em;
  }
`;
export const TitleSpan = styled.span`
  border-bottom: 3px dashed;
  padding-bottom: 0.3em;
  color: ${(props) => props.theme.primary};
  padding-right: 0.625em;
  @media ${device.laptop} {
    padding-bottom: 0.325em;
    padding-right: 0.2em;
  }
`;

export const HeadSpan = styled.span`
  position: absolute;
  right: -5px;
  top: -43px;
  font-weight: 700;
  font-size: 5rem;
  z-index: -1;
  color: ${(props) => props.theme.headSpancolor};
  @media ${device.laptop} {
    right: -28px;
    top: -35px;
  }
  @media ${device.mobileL} {
    right: -22px;
    top: -15px;
    font-size: 3rem;
    letter-spacing: 2px;
  }
`;
