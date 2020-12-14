import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Fade } from "../../animation";
import { device } from "../../responsive";
export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 7%;
  z-index: 20;
  transition: 0.3s;
  @media ${device.laptopL} {
    width: 7%;
  }
  @media ${device.laptop} {
    width: 9%;
  }
  @media ${device.mobileL} {
    ${(props) =>
      props.sideB
        ? `right: 0; width:23%; 
      &::before {
      content: "";
      position: absolute;
      right: 98px;
      width: 350px;
      height: 100%;
      background:  rgb(0, 0, 0, 0.65);
    }`
        : `right: -100px;`}
  }
  @media ${device.mobileM} {
    ${(props) =>
      props.sideB
        ? ` 
      &::before {
      content: "";
      position: absolute;
      right: 85px;
      width: 350px;
      height: 100%;
      background:  rgb(0, 0, 0, 0.65);
    }`
        : ``}
  }
  @media ${device.mobileS} {
    ${(props) =>
      props.sideB
        ? `right: 0; width:27%; 
      &::before {
      content: "";
      position: absolute;
      right: 86px;
      width: 350px;
      height: 100%;
      background:  rgb(0, 0, 0, 0.65);
    }`
        : `right: -100px;`}
  }
`;

export const NavBar = styled.ul`
  margin-top: 0.1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .active {
    background-color: #000000;
    color: #ffffff;
  }
  @media ${device.laptopL} {
    margin-top: 1.1em;
  }
  @media ${device.laptop} {
    margin-top: 0.4em;
  }
`;
export const NavItme = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  list-style: none;
  padding: 1em;
  font-size: 1.125rem;
  line-height: 1.3;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #fff;
    background-color: #000;
  }
  .title {
    animation-duration: 0.25s;
    animation-name: ${Fade};
  }
  @media ${device.laptopL} {
    padding: 1.2em;
  }
`;

export const Title = styled.p`
  display: none;
  background-color: ${(props) => props.theme.titlecolor};
  position: absolute;
  color: #ffffff;
  font-size: 0.8rem;
  padding: 6px 11px;
  right: 8em;
  border-radius: 10%;
  &::after {
    content: "";
    position: absolute;
    right: -7px;
    top: 7px;
    width: 0px;
    border: 10px 10px 10px 10px;
    border-left: 8px solid ${(props) => props.theme.titlecolor};
    height: 0px;
    border-bottom: 7px solid transparent;
    border-top: 7px solid transparent;
    z-index: 0;
  }
  @media ${device.laptopL} {
    right: 8.5em;
  }
  ${NavItme}:hover & {
    display: block;
  }
`;

export const Close = styled.div`
  display: none;
  @media ${device.mobileL} {
    display: block;
  }
  ${(props) =>
    props.topclose
      ? ` 
  left: 30px;
  position: relative;
  top: 40px;
  z-index: 23;
  font-size: 20px;
  color: ${(props) => props.theme.fontColor};`
      : `
 left: 25px;
  position: relative;
  top: 10px;
  z-index: 23;
  font-size: 20px;
  color: ${(props) => props.theme.fontColor};`};
`;
