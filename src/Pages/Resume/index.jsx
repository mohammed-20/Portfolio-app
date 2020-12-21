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
            Welcome into my resume to see my humble experiences. Stuff like
            that?
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
            dateparagraph="August 2020 to December"
            titleCard="Technical-Training-React.js"
            subtitlecard="Gaza Sky Geeks"
            descriptioncard="During a training period of 120 hours, I gained enough experience with react and learned how to interact with a team and make projects on github. The final project for the training was this website which you are looking at right now."
          />
          <Card
            dateparagraph="October 2019 to December"
            titleCard="Business English &amp; Communication Skills for Freelancing Course"
            subtitlecard="AMIDEAST"
            descriptioncard="The training focused on communication skills with customers and the community, and we learned how to write email in a professional way and negotiation skills on freelance platforms. The training was 60 hours and I passed it with an excellent grade."
          />
          <Card
            dateparagraph="Dec. 2018 to Feb. 2019"
            titleCard="Front-End web Development"
            subtitlecard="FreeSoft project"
            descriptioncard="A professional course about front-end, through which we learned about javascript and an introduction to react at the Islamic University by a professional trainer."
          />
          <Card
            dateparagraph="March 2017 to 2018"
            titleCard="Graphic Designer"
            subtitlecard="Volunteer at engineering club"
            descriptioncard="I worked as a volunteer in the engineering club at the Islamic university Gaza while I was studying in the university, I was working as a designer for a year."
          />
          <Card
            dateparagraph="August 5 to 14 2017"
            titleCard="Personal Website Designing Programming"
            subtitlecard="Al-Raed Educational Center for Training and Development Certifies"
            descriptioncard="The course was 15 hours in which I learned the basics of html and css languages, and we ended up making a final project at the end of the course."
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
