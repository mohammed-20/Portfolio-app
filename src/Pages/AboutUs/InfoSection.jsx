import React from "react";
import styled from "styled-components";
import * as T from "../../Components/Typography";
import Banner from "../../images/banner.jpg";
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
  padding-top: 120px;
  padding-bottom: 120px;

  display: block;
  position: relative;
  width: 79em;
  height: 60vh;
`;
const Overlay = styled.div`
  background-color: rgb(0, 0, 0, 0.7);
  position: absolute;
  height: 60vh;
  width: 79em;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  padding-left: 5em;
`;

const Future = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5em;
  margin-left: 1em;
`;
const Number = styled.h1`
  font-size: 2.5rem;

  font-weight: 700;
  text-transform: uppercase;
  margin: 0.2em 0 0.2em 0;
  color: ${(props) => props.theme.primary};
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
