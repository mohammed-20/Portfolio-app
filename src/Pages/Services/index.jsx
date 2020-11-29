import React from "react";
import PageTitle from "../../Components/PageTitle";
import ColorPicker from "../../Components/ColorPicker";
import Header from "../../Components/Header";
import BoxService from "../../Components/BoxServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faEdit } from "@fortawesome/free-solid-svg-icons";
import { faReact, faJsSquare } from "@fortawesome/free-brands-svg-icons";
import * as S from "./style";
import * as T from "../../Components/Typography";
export default function Services() {
  return (
    <S.Wrapper>
      <ColorPicker />
      <S.Container>
        <PageTitle spanhead="My" spantext="My">
          Services
        </PageTitle>
        <T.Subtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur
          ratione quod
        </T.Subtitle>
        <div className="content">
          <S.LeftBox>
            <BoxService
              TitleBox="Web Design"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            >
              <FontAwesomeIcon icon={faLeaf} size="1x" />
            </BoxService>
            <BoxService
              TitleBox="React Js"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            >
              <FontAwesomeIcon icon={faReact} size="1x" />
            </BoxService>
          </S.LeftBox>
          <S.CentertBox>
            <h1 className="title-do">What I DO</h1>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </S.CentertBox>
          <S.RightBox>
            <BoxService
              TitleBox="Java Script"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            >
              <FontAwesomeIcon icon={faJsSquare} size="1x" />
            </BoxService>
            <BoxService
              TitleBox="Graphic Design"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            >
              <FontAwesomeIcon icon={faEdit} size="1x" />
            </BoxService>
          </S.RightBox>
        </div>
      </S.Container>
      <Header />
    </S.Wrapper>
  );
}
