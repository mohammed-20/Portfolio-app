import React from "react";
import styled from "styled-components";
import { device } from "../../responsive";
import * as T from "../../Components/Typography";
import { Banner } from "../../images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCheckSquare,
  faTrophy,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.section`
  background-image: url(${Banner});
  background-size: cover;
  background-position: center;
  padding-top: 7.5em;
  padding-bottom: 7.5em;

  display: block;
  position: relative;
  width: 101%;
  height: 60vh;
  z-index: 2;
  @media ${device.laptop} {
    width: 102%;
  }
  @media ${device.mobileL} {
    padding-top: 6em;
    padding-bottom: 2em;
    display: flex;
    flex-direction: column;
    margin-left: -5px;
    width: 132%;
    height: 130vh;
  }
`;
const Overlay = styled.div`
  background-color: rgb(0, 0, 0, 0.7);
  position: absolute;
  height: 60vh;
  width: 101%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  padding-left: 3em;
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    margin-left: -7px;
    padding-left: 1em;
    width: 115%;
    height: 130vh;
    padding-bottom: 3em;
  }
`;

const Future = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5em;
  margin-left: 1em;
  @media ${device.laptop} {
    margin-right: 7em;
    margin-left: 2em;
    font-size: 10px;
  }
  @media ${device.mobileL} {
    margin-top: 5em;
    margin-left: 1em;
  }
`;
const Number = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0.2em 0 0.2em 0;
  color: ${(props) => props.theme.primary};
  @media ${device.laptop} {
    font-size: 2rem;
  }
`;
const Iconbanner = styled.div`
  color: ${(props) => props.theme.primary};
`;
export default function InfoSection() {
  return (
    <Wrapper>
      <Overlay>
        <Future>
          <Iconbanner>
            <FontAwesomeIcon icon={faHeart} size="3x" />
          </Iconbanner>
          <Number>820</Number>
          <T.Head4>Happy Clients</T.Head4>
        </Future>

        <Future>
          <Iconbanner>
            <FontAwesomeIcon icon={faCheckSquare} size="3x" />
          </Iconbanner>
          <Number>120</Number>
          <T.Head4>Success Projects</T.Head4>
        </Future>

        <Future>
          <Iconbanner>
            <FontAwesomeIcon icon={faTrophy} size="3x" />
          </Iconbanner>
          <Number>20</Number>
          <T.Head4>Awards Received</T.Head4>
        </Future>

        <Future>
          <Iconbanner>
            <FontAwesomeIcon icon={faCoffee} size="3x" />
          </Iconbanner>
          <Number>624</Number>
          <T.Head4>Cups Of Coffee</T.Head4>
        </Future>
      </Overlay>
    </Wrapper>
  );
}
