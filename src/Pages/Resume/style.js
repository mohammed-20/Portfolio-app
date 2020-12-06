import styled from "styled-components";
import { BounceInUp, Fade } from "../../animation";

export const Wrapper = styled.main`
  /* width: 100%; */
  height: 100%;
  padding-top: 7.5em;
  padding-bottom: 7.5em;
  display: flex;
  background-color: ${(props) => props.theme.backgroundPages};
  align-items: center;
  flex-direction: column;
  z-index: -2;
  transition: 0.3s;
`;
export const Container = styled.div`
  padding-right: 0.9375em;
  width: 100%;
  padding-left: 0.9375em;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: 1;
  transition: 0.3s;
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-name: ${BounceInUp};
  .fade {
    animation-duration: 0.15s;
    animation-name: ${Fade};
  }
`;
export const Row = styled.div`
  margin-bottom: 3.125em;
`;

export const TableTitle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 1.875em;
  list-style: none;
  border: 0;
  width: 85%;
  margin-left: -5.3125em;
`;
export const Tablelabel = styled.li`
  margin-bottom: -1px;
  width: 50%;
  background-color: ${(props) => props.theme.backgroundLabel};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
  .active {
    color: ${(props) => props.theme.primary};
  }
  &:hover {
    transform: scale(0.95);
  }
`;
export const TableItem = styled.a`
  display: block;
  text-align: center;
  border-radius: unset;
  font-weight: 600;
  border: unset;
  text-transform: uppercase;
  cursor: pointer;

  padding: 0.625em 0;
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  &:hover {
    color: ${(props) => props.theme.colorhover};
  }
`;

export const ExperienceContent = styled.div`
  margin: auto;

  ${(props) =>
    props.displayed === "experience" ? `display:block;` : "display:none; "};
`;
export const EducationContent = styled.div`
  margin: auto;

  ${(props) =>
    props.displayed === "education" ? "display:block;" : "display:none;"};
`;
