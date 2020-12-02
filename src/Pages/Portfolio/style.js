import styled, { keyframes } from "styled-components";
const bounceInUp = keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

export const Wrapper = styled.main`
  /* width: 100%; */
  height: 100vh;
  padding-top: 7.5em;
  padding-bottom: 7.5em;
  display: flex;
  background-color: ${(props) => props.theme.backgroundPages};
  align-items: center;
  flex-direction: column;
  z-index: -2;
  transition: 0.3s;
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
  animation-name: ${bounceInUp};
`;
export const Row = styled.div`
  margin-bottom: 3.125em;
`;
