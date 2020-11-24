import styled from "styled-components";
import { Link } from "react-router-dom";
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
export const Logo = styled.img`
  height: 55px;
  width: 55px;
  margin-top: 1.25em;
`;
export const NavBar = styled.ul`
  margin-top: 0.1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const NavItme = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  list-style: none;
  padding: 0.5em 2em;
  font-size: 23px;
  margin-top: 0.5em;
  line-height: 1.3;
  &:hover {
    color: #fff;
    background-color: #000;
    transition: all 0.2s ease-in-out;
  }
`;
