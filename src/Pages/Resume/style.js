import styled from "styled-components";
import { BounceInUp, Fade } from "../../animation";
import { device } from "../../responsive";
export const Wrapper = styled.main`
  height: 100%;
  padding-top: 7.5em;
  padding-bottom: 7.5em;
  display: flex;
  background-color: ${(props) => props.theme.backgroundPages};
  align-items: center;
  flex-direction: column;
  z-index: -2;
  transition: 0.3s;
  @media ${device.mobileL} {
    padding-bottom: 3em;
  }
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
  @media ${device.mobileL} {
    margin-right: 80px;
    margin-left: -24px;
  }
  .fade {
    animation-duration: 0.15s;
    animation-name: ${Fade};
  }
`;
export const Row = styled.div`
  margin-bottom: 3.125em;
  @media ${device.mobileL} {
    margin-bottom: 1em;
  }
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
  @media ${device.laptopL} {
    width: 84.3%;
  }
  @media ${device.laptop} {
    width: 89%;
  }
  @media ${device.tablet} {
    width: 74%;
    margin-left: -4em;
  }
  @media ${device.tabletM} {
    width: 75%;
    margin-left: -2em;
  }
  @media ${device.tabletS} {
    width: 75%;
    margin-left: 1em;
  }
  @media ${device.mobileL} {
    width: 92%;
    margin-left: 6em;
    margin-bottom: 1em;
  }
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
  @media ${device.mobileL} {
    padding: 0.4em 0;
    font-size: 0.8rem;
  }
`;

export const ExperienceContent = styled.div`
  width: 85%;
  margin: auto;
  display: block;
  margin-left: 4.2em;
  @media ${device.laptop} {
    width: 88%;
    margin-left: 1.9em;
  }
  @media ${device.mobileL} {
    width: 90%;
  }
  ${(props) =>
    props.displayed === "experience" ? `display:block;` : "display:none; "};
`;
export const EducationContent = styled.div`
  width: 85%;
  margin: auto;
  display: block;
  margin-left: 4.2em;
  @media ${device.laptop} {
    width: 88%;
    margin-left: 1.9em;
  }
  @media ${device.mobileL} {
    width: 90%;
  }
  ${(props) =>
    props.displayed === "education" ? "display:block;" : "display:none;"};
`;
