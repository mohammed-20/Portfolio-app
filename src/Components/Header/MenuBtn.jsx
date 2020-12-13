import React from "react";
import Logo from "./Logo";
import styled from "styled-components";
import { device } from "../../responsive";
const Button = styled.span`
  position: fixed;
  right: 22px;
  top: -5px;
  z-index: 20;
  transition: 0.3s;
  display: none;
  width: 0;
  height: 0;
  border: 30px solid transparent;
  border-bottom-color: ${(props) => props.theme.primary};

  &::after {
    content: "";
    position: absolute;
    left: -30px;
    top: 30px;
    width: 0;
    height: 0;
    border: 30px solid transparent;
    border-top-color: ${(props) => props.theme.primary};
  }
  @media ${device.mobileL} {
    ${(props) => (props.btnSide ? "display:none" : "display:block")};
  }
`;

export default function MenuBtn({ onClick, btnSide }) {
  return (
    <Button onClick={onClick} btnSide={btnSide}>
      <Logo />
    </Button>
  );
}
