import React, { useState } from "react";

import PageTitle from "../../Components/PageTitle";
import ColorPicker from "../../Components/ColorPicker";
import Header from "../../Components/Header";
import Card from "../../Components/Card";
import * as T from "../../Components/Typography";
import * as S from "./style";
export default function Resume() {
  const [state, setState] = useState("experience");
  const [active, setActive] = useState("experience");
  return (
    <S.Wrapper>
      <ColorPicker />
      <S.Container>
        <S.Row>
          <PageTitle spanhead="My" spantext="My">
            Resume
          </PageTitle>
          <T.Subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            tenetur ratione quod.
          </T.Subtitle>
        </S.Row>
        <S.TableTitle>
          <S.Tablelabel onClick={() => setState("experience")}>
            <S.TableItem
              onClick={() => setActive("experience")}
              className={`${active === "experience" ? "active" : ""}`}
            >
              experience
            </S.TableItem>
          </S.Tablelabel>
          <S.Tablelabel onClick={() => setState("education")}>
            <S.TableItem
              onClick={() => setActive("education")}
              className={`${active === "education" ? "active" : ""}`}
            >
              education
            </S.TableItem>
          </S.Tablelabel>
        </S.TableTitle>
        <S.ExperienceContent displayed={state} className="fade">
          <Card
            dateparagraph="January 2019 to Present"
            titleCard="Website Developer"
            subtitlecard="ABC Company"
            descriptioncard=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            tenetur ratione quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            tenetur ratione quod."
          />
          <Card
            dateparagraph="February 2018 to 2019"
            titleCard="Website Designer"
            subtitlecard="ABC Company"
            descriptioncard=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            tenetur ratione quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            tenetur ratione quod."
          />
          <Card
            dateparagraph="January 2016 to 2018"
            titleCard="UI Developer"
            subtitlecard="ABC Company"
            descriptioncard=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            tenetur ratione quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            tenetur ratione quod."
          />
        </S.ExperienceContent>
        <S.EducationContent displayed={state} className="fade">
          <Card
            dateparagraph="January 2014 to 2019"
            titleCard="B.Sc Civil engineering"
            subtitlecard="IUG University"
            descriptioncard="Faculty of Engineering at Islamic University of Gaza (IUG), Gaza, Palestine. Good general grade."
          />
          <Card
            dateparagraph="june 2012 to 2014"
            titleCard="Higher School Graduation"
            subtitlecard="Al Taqwa School"
            descriptioncard="Al Taqwa school, Gaza, Palestine Honor's Degree with GPA 83%."
          />
        </S.EducationContent>
      </S.Container>
      <Header />
    </S.Wrapper>
  );
}
