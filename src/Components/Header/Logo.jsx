import React from "react";
import styled from "styled-components";
import { device } from "../../responsive";

const SvgLogo = styled.svg`
  height: 56px;
  width: 55px;
  font-weight: 900;
  margin-top: 0.65em;
  margin-bottom: 0.4em;
  font-size: 2rem;
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: ${(props) => props.theme.fontColor};
  @media ${device.laptop} {
    height: 50px;
    width: 50px;
  }
  @media ${device.mobileL} {
    height: 40px;
    width: 40px;
    margin-top: 0.3em;
    margin-left: -0.65em;
    z-index: 22;
    position: relative;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.primary};
  }
`;

export default function Logo() {
  return (
    <SvgLogo
      width="50"
      height="52"
      viewBox="0 0 50 52"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.9 1.7C22.6 3.3 22.7 3.4 24.3 2.1C25.9 0.8 26.4 5.60021e-07 25.6 5.60021e-07C25.4 5.60021e-07 24.6 0.8 23.9 1.7Z" />
      <path d="M31.1 21.1C28.7 24.9 26.5 28 26.1 28C25.8 28 25.6 26.3 25.8 24.2C26.2 20.1 24.6 15 23 15C22.5 15 22 15.7 22 16.5C22 17.4 20.4 21.2 18.5 25C15.2 31.6 14 37 15.9 37C16.4 37 17 35.6 17.4 34C17.7 32.3 18.9 28.7 20.1 25.9C22.7 19.8 24 20.9 24 29.2C24 32.3 24.4 35.1 24.9 35.4C25.4 35.7 27 33.4 28.5 30.2C33.4 20.1 34.2 19.6 33.4 26.7C32.6 34.3 34.2 37.9 35.1 30.5C35.5 27.7 36.1 23.2 36.5 20.4C36.9 17.4 36.9 15 36.3 14.7C35.8 14.4 33.5 17.2 31.1 21.1Z" />
      <path d="M10.5 36C16 41.5 20.7 46 21 46C21.2 46 17 41.5 11.5 36C6 30.5 1.3 26 0.999996 26C0.799996 26 5 30.5 10.5 36Z" />
      <path d="M42.5 34.2L35.5 41.5L42.8 34.5C49.5 28.1 50.5 27 49.7 27C49.6 27 46.3 30.3 42.5 34.2Z" />
      <path d="M28.3 48.2C26.1 50.3 26 50.3 23.8 48.5L21.5 46.6L23.8 49L26 51.4L28.7 48.7C30.2 47.2 31.2 46 30.9 46C30.7 46 29.5 47 28.3 48.2Z" />
    </SvgLogo>
  );
}
