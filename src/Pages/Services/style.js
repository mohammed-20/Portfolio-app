import styled from "styled-components";
import { BounceInUp } from "../../animation";
import { device } from "../../responsive";
export const Wrapper = styled.main`
  height: 100%;
  padding-top: 7.5em;
  padding-bottom: 7.5em;
  display: flex;
  background-color: ${(props) => props.theme.backgroundPages};
  align-items: center;
  flex-direction: column;
  z-index: -2;
  transition: all 0.3s ease-in-out;
  @media ${device.mobileL} {
    padding-bottom: 3em;
  }
`;
export const Container = styled.div`
  padding-right: 0.9375em;
  width: 100%;
  padding-left: 0.9375em;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: 1;
  transition: 0.3s;
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-name: ${BounceInUp};
  @media ${device.mobileL} {
    padding-right: 0;
    padding-left: 0;
    margin-right: 80px;
    margin-left: -24px;
  }
  .content {
    display: flex;
    width: 90%;
    margin-right: 2.5em;
    width: 92%;
    margin-right: 2em;
    @media ${device.laptop} {
      flex-direction: column;
      width: 95%;
    }
    @media ${device.mobileL} {
      width: 95%;
      margin-left: 10em;
    }
  }
`;
export const LeftBox = styled.div`
  width: 33%;
  @media ${device.laptop} {
    width: 101%;
    margin-left: -33px;
  }
  @media ${device.mobileL} {
    width: 93.5%;
    margin-left: 0.03em;
  }
`;
export const CentertBox = styled.div`
  border: 3px dashed ${(props) => props.theme.backgroundprogress};
  text-align: center;
  padding: 1.25em;
  margin: 1.875em 0;
  width: 30%;
  @media ${device.laptop} {
    width: 95%;
    margin: 0.3em -7px;
  }
  @media ${device.mobileL} {
    width: 93.5%;
    margin-left: 0.03em;
  }
  .title-do {
    font-weight: 700;
    padding-top: 2rem;
    font-size: 2.5rem;
    line-height: 1.2;
    color: ${(props) => props.theme.titlespancolor};
  }
  .para {
    font-size: 0.9rem;
    width: 95%;
    margin-bottom: 1.25em;
    margin-top: 0.9375em;
    font-weight: 400;
    color: ${(props) => props.theme.colorparagraph};
    line-height: 1.5;
    margin: 1.25em auto;
    @media ${device.laptop} {
      font-size: 0.95rem;
      line-height: 1.3;
      font-weight: 500;
      width: 100%;
      margin: 1.7em auto;
    }
  }
  &:hover {
    border-color: ${(props) => props.theme.primary};
    transition: all 0.3s ease-in-out;
  }
`;
export const RightBox = styled.div`
  width: 33%;
  @media ${device.laptop} {
    width: 101%;
    margin-left: -33px;
  }
  @media ${device.mobileL} {
    width: 93.5%;
    margin-left: 0.03em;
  }
`;
