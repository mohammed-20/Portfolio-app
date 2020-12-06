import styled from "styled-components";
import { BounceInUp } from "../../animation";

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
  .content {
    display: flex;
    width: 90%;
    margin-right: 2.5em;
    width: 92%;
    margin-right: 2em;
  }
`;
export const LeftBox = styled.div`
  width: 33%;
`;
export const CentertBox = styled.div`
  border: 3px dashed ${(props) => props.theme.backgroundprogress};
  text-align: center;
  padding: 1.25em;
  margin: 1.875em 0;
  width: 30%;
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
  }
  &:hover {
    border-color: ${(props) => props.theme.primary};
    transition: all 0.3s ease-in-out;
  }
`;
export const RightBox = styled.div`
  width: 33%;
`;
