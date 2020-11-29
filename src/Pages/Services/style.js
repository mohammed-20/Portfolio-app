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
  height: 100%;
  padding-top: 120px;
  padding-bottom: 120px;
  display: flex;
  background-color: ${(props) => props.theme.backgroundPages};
  align-items: center;
  flex-direction: column;
  z-index: -2;
  transition: all 0.3s ease-in-out;
`;
export const Container = styled.div`
  padding-right: 15px;
  width: 100%;
  padding-left: 15px;
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
  .content {
    display: flex;
    width: 90%;
    margin-right: 40px;
    width: 92%;
    margin-right: 32px;
  }
`;
export const LeftBox = styled.div`
  width: 33%;
`;
export const CentertBox = styled.div`
  border: 3px dashed ${(props) => props.theme.backgroundprogress};
  text-align: center;
  padding: 20px;
  margin: 30px 0px;
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
    margin-bottom: 20px;
    margin-top: 15px;
    font-weight: 400;
    color: ${(props) => props.theme.colorparagraph};
    line-height: 1.5;
    margin: 20px auto;
  }
  &:hover {
    border-color: ${(props) => props.theme.primary};
    transition: all 0.3s ease-in-out;
  }
`;
export const RightBox = styled.div`
  width: 33%;
`;
