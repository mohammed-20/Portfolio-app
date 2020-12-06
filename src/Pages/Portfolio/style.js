import styled from "styled-components";
import { BounceInUp } from "../../animation";

export const Wrapper = styled.main`
  width: 100%;
  height: 200vh;
  padding-top: 7.5em;
  padding-bottom: 7.5em;
  display: flex;
  background-color: ${(props) => props.theme.backgroundPages};
  align-items: center;
  flex-direction: column;
  z-index: -2;
  transition: 0.3s;
  overflow: hidden;
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
  z-index: 0;
  transition: 0.3s;
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-name: ${BounceInUp};
`;
export const Row = styled.div`
  margin-bottom: 3.125em;
`;
