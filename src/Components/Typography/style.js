import styled, { keyframes } from "styled-components";

const fadeInDownBig = keyframes`
   from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}`;
export const H1 = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 400;
  letter-spacing: 15px;
  text-transform: uppercase;
  animation-name: ${fadeInDownBig};
  animation-fill-mode: both;
  animation-duration: 1s;
`;
export const Head1 = styled.h1`
  font-size: 3.5rem;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  margin: 10px 0 20px 0;
  animation-name: ${fadeInDownBig};
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-delay: 1s;
`;
export const PageHead1 = styled.h1``;

export const H4 = styled.h4``;

export const H6 = styled.h6`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  color: ${(props) => props.theme.fontColor};
`;

export const P = styled.p`
  line-height: 1;
  font-size: 21px;
  margin: 20px 0;
  animation-name: ${fadeInDownBig};
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-delay: 2s;
`;
