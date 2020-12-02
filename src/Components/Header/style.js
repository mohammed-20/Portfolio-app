import styled from "styled-components";
import { NavLink } from "react-router-dom";
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
  overflow: hidden;
  transition: 0.3s;
`;

export const NavBar = styled.ul`
  margin-top: 0.1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  .active {
    background-color: #000000;
    color: #ffffff;
  }
`;
export const NavItme = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  list-style: none;
  padding: 0.7em 3em;
  font-size: 21px;
  line-height: 1.3;
  &:hover {
    color: #fff;
    background-color: #000;
  }
`;
