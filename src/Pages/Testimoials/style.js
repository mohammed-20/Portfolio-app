import styled from "styled-components";
import { BounceInUp } from "../../animation";
import { Testimonialsbg } from "../../images";
import { device } from "../../responsive";

export const Wrapper = styled.main`
  width: 100%;
  height: 140vh;
  background-image: url(${Testimonialsbg});
  z-index: -2;
  transition: 0.3s;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  @media ${device.laptopL} {
    height: 100vh;
    background-position: -54px -30px;
  }
  @media ${device.mobileL} {
    background-position: -345px 0px;
  }
`;
export const Overlay = styled.div`
  padding-top: 7em;
  background-color: rgb(0, 0, 0, 0.65);
  z-index: 1;
  width: 100%;
  height: 100%;
`;
export const Container = styled.div`
  padding-right: 2.9375em;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
  z-index: 1;
  transition: 0.3s;
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-name: ${BounceInUp};
  .slider {
    width: 100%;
    height: 100%;
  }
`;

export const TitlePage = styled.div`
  margin-bottom: 1.875em;
  position: relative;
  margin-top: -0.5em;
  color: ${(props) => props.theme.titlespancolor};
  display: flex;
  justify-content: center;
  margin-left: -3.3em;
  @media ${device.mobileL} {
    margin-left: 1em;
    margin-top: -4em;
  }
  .pagehead {
    font-size: 2.7rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 1px;
    color: #e6e6e6;
    @media ${device.mobileL} {
      font-size: 2rem;
    }
  }
`;
export const TitleSpan = styled.span`
  border-bottom: 3px dashed;
  padding-bottom: 0.3em;
  color: ${(props) => props.theme.primary};
  position: relative;
  margin-left: 0.3em;
  @media ${device.mobileL} {
    font-size: 2rem;
  }
`;

export const HeadSpan = styled.span`
  position: absolute;
  margin-left: 3.5em;
  top: -30px;
  font-weight: 700;
  font-size: 5rem;
  z-index: -1;
  color: ${(props) => props.theme.headSpancolor};
  @media ${device.mobileL} {
    font-size: 3rem;
    top: -13px;
    right: -3px;
  }
`;
