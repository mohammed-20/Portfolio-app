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
  height: 100%;
  padding-top: 3.4375em;

  z-index: -2;
  transition: 0.3s;
  background-color: ${(props) => props.theme.backgroundContact};
`;
export const Container = styled.div`
  width: 95%;
  align-items: center;
  display: flex;
  z-index: 1;
  padding-bottom: 7.5em;
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-name: ${bounceInUp};
`;
export const LeftSide = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding-left: 5em;
  letter-spacing: 1px;
  .feel {
    color: ${(props) => props.theme.titlespancolor};
    margin-bottom: 0.25em;
    padding-bottom: 0.25rem;
    text-align: left;
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 1.2;
  }
  .rowcontanct {
    display: flex;
    align-items: center;
    .concontact {
      margin-left: 1.5em;
      font-size: 1.5rem;
      font-weight: 400;
      color: ${(props) => props.theme.textbalck7};
    }
  }
`;
export const RightSide = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding-top: 0.1875em;
  top: 50px;
  position: relative;
  .textarea {
    height: 41vh;
    width: 83%;
    font-size: 1.2rem;
    font-weight: 400;
    resize: vertical;
    line-height: 1.5;
    position: relative;
    margin-bottom: 1em;
    padding: 0.375rem 0.75rem;
    outline: none;
    background-color: ${(props) => props.theme.backgroundPages};
    background-clip: padding-box;
    border: 1px solid ${(props) => props.theme.backgroundPages};
    &:focus {
      background-color: ${(props) => props.theme.hoverInput};
    }
  }
  .button {
    width: 83%;
  }
`;

export const TitlePage = styled.div`
  position: relative;
  padding-bottom: 2em;
  color: ${(props) => props.theme.titlespancolor};
`;
export const TitleSpan = styled.span`
  border-bottom: 3px dashed;
  padding-bottom: 0.4em;
  color: ${(props) => props.theme.primary};
  padding-right: 0.625em;
`;

export const HeadSpan = styled.span`
  position: absolute;
  top: -31px;
  left: 170px;
  font-weight: 700;
  font-size: 5rem;
  z-index: -1;
  color: ${(props) => props.theme.headSpancolor};
  letter-spacing: 7px;
`;
