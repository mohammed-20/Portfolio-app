import styled from "styled-components";
import { ZoomIn, ZoomOut } from "../../animation";
import { device } from "../../responsive";
export const Content = styled.div`
  margin-bottom: -18px;
  width: 85%;
  z-index: 0;
  text-align: center;
  margin-top: 2.5em;
`;
export const Nav = styled.div`
  margin: auto;
  width: 40%;
  display: flex;
  justify-content: space-between;
  z-index: 0;
  margin-left: 19em;
  cursor: pointer;
  @media ${device.laptop} {
    width: 50%;
    margin-left: 11em;
  }
  @media ${device.mobileL} {
    margin-left: 4.5em;
  }
  @media ${device.mobileM} {
    margin-left: 3.5em;
  }
  @media ${device.mobileS} {
    margin-left: 2em;
  }
  .active {
    color: ${(props) => props.theme.primary};
  }
`;
export const NavItem = styled.span`
  border-left: 2px solid ${(props) => props.theme.colorparagraph};
  padding-left: 25px;
  line-height: 1.5;
  font-weight: 500;
  z-index: 0;
  color: ${(props) => props.theme.colorparagraph};
  &:hover {
    color: ${(props) => props.theme.primary};
  }
  @media ${device.laptop} {
    padding-left: 20px;
  }
  @media ${device.mobileL} {
    padding-left: 15px;
    padding-right: 10px;
    font-size: 0.8rem;
  }
  &:first-child {
    border-left: none;
    padding-right: 1.4em;
    &:hover {
      color: ${(props) => props.theme.primary};
    }
  }
`;
export const Picture = styled.div`
  margin-top: 2.5em;
  margin-right: -15px;
  margin-left: -30px;
  padding-right: 20px;
  display: flex;
  flex-wrap: wrap;
  @media ${device.mobileL} {
    flex-direction: column;
    margin-left: 2.5em;
    width: 280vw;
  }

  .animationIn {
    animation-duration: 0.5s;
    animation-name: ${ZoomIn};
    animation-fill-mode: forwards;
  }
  .animationOut {
    animation-duration: 0.5s;
    animation-name: ${ZoomOut};
    animation-fill-mode: forwards;
  }
`;

export const DivImg = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  float: left;
  margin-bottom: 0.75rem;
  margin-left: 1em;
  min-width: 0;
  z-index: 0;
  border-radius: 0.25rem;
`;
export const Image = styled.img`
  z-index: 0;
  vertical-align: middle;
  border-style: none;
  margin: auto;
  height: 150px;
  max-width: 100%;
  height: auto;
`;
export const Overlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0, 0.7);
  color: #fff;
  z-index: 1;
  align-items: center;
  justify-content: center;
  top: 8px;
  width: 90%;
  margin: 10px 10px;
  left: 8px;
  height: 88%;
  border-radius: 3%;
  line-height: 2;
  visibility: hidden;
  .project-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.primary};
    line-height: 1.2;
  }
  .project-subtitle {
    margin: 0.5em 0 1em 0;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.2;
    color: ${(props) => props.theme.white};
  }
  .plus {
    cursor: pointer;
    color: ${(props) => props.theme.primary};
  }
  ${DivImg}:hover & {
    visibility: visible;
  }
`;
