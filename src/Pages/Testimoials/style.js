import styled from "styled-components";
import { BounceInUp } from "../../animation";
import { Testimonialsbg } from "../../images";

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${Testimonialsbg});
  z-index: -2;
  transition: 0.3s;
`;
export const Overlay = styled.div`
  padding-top: 7.5em;
  background-color: rgb(0, 0, 0, 0.65);
  z-index: 1;
  width: 100%;
  height: 100vh;
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
`;

export const TitlePage = styled.div`
  margin-bottom: 1.875em;
  position: relative;
  margin-top: -0.5em;
  color: ${(props) => props.theme.titlespancolor};
  display: flex;
  justify-content: center;
  margin-left: -3.3em;
  .pagehead {
    font-size: 2.7rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 1px;
    color: #e6e6e6;
  }
`;
export const TitleSpan = styled.span`
  border-bottom: 3px dashed;
  padding-bottom: 0.3em;
  color: ${(props) => props.theme.primary};
  position: relative;
  margin-left: 0.3em;
`;

export const HeadSpan = styled.span`
  position: absolute;
  margin-left: 3.5em;
  top: -30px;
  font-weight: 700;
  font-size: 5rem;
  z-index: -1;
  color: ${(props) => props.theme.headSpancolor};
`;
