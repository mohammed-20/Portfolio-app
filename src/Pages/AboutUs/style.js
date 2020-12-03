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

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundPages};
  height: 100%;
  width: 100%;
`;

export const Main = styled.main`
  margin-right: 6.25em;
  transition: 0.3s;
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-name: ${bounceInUp};
`;
export const Content1 = styled.section`
  padding: 8em 0;
  width: 70em;
  margin-right: auto;
  margin-left: 7em;
  display: flex;
  justify-content: center;
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
`;
export const DivImg = styled.div`
  border: 4px dashed ${(props) => props.theme.primary};
`;
export const AboutImg = styled.img`
  max-height: 28.125em;
  margin: 0.93em 1em -0.93em -0.93em;
`;

export const DivBtn = styled.div`
  display: flex;
  padding-top: 0.25rem;
`;
export const TitlePage = styled.div`
  margin-bottom: 1.875em;
  position: relative;
  margin-top: -1.875em;
  color: ${(props) => props.theme.titlespancolor};
`;
export const TitleSpan = styled.span`
  border-bottom: 3px dashed;
  padding-bottom: 0.625em;
  color: ${(props) => props.theme.primary};
  padding-right: 0.625em;
`;

export const HeadSpan = styled.span`
  position: absolute;
  right: -5px;
  top: -43px;
  font-weight: 700;
  font-size: 5rem;
  z-index: -1;
  color: ${(props) => props.theme.headSpancolor};
`;
