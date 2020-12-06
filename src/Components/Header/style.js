import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Fade } from "../../animation";
export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  position: fixed;
  right: 0px;
  top: 0;
  height: 100%;
  width: 7%;
  z-index: 20;
  transition: 0.3s;
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
`;
export const NavItme = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  list-style: none;
  padding: 0.9em;
  font-size: 21px;
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
  ${NavItme}:hover & {
    display: block;
  }
`;
