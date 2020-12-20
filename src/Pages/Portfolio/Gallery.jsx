import React, { useState } from "react";
import {
  cunter,
  calculator,
  signuphook,
  praxis,
  crowdme,
  greatidea,
  stopwhatch,
  signupclass,
  movies,
} from "../../images";
import { Plus } from "../../Components/Icons";
import * as G from "./stylegallery";

const portfolio = [
  {
    id: 1,
    img: signuphook,
    filter: ["all", "react", "brand"],
    title: "signin",
    subtitle: "Category",
    link: "https://digitalsignin.netlify.app",
  },
  {
    id: 2,
    img: crowdme,
    filter: ["all", "brand", "design", "js"],
    title: "crowdme",
    subtitle: "Category",
    link: "https://mohammed-20.github.io/my-project/",
  },
  {
    id: 3,
    img: praxis,
    filter: ["all", "design"],
    title: "praxis",
    subtitle: "Category",
    link: "https://mohammed-20.github.io/naimdesign/",
  },
  {
    id: 4,
    img: cunter,
    filter: ["all", "react"],
    title: "cunter",
    subtitle: "Category",
    link: "https://appcounter.netlify.app",
  },
  {
    id: 5,
    img: greatidea,
    filter: ["all", "js", "design"],
    title: "greatidea",
    subtitle: "Category",
    link: "https://mohammed-20.github.io/assignment-js/",
  },
  {
    id: 6,
    img: calculator,
    filter: ["all", "react"],
    title: "calculator",
    subtitle: "Category",
    link: "https://app-calculator.netlify.app",
  },
  {
    id: 7,
    img: stopwhatch,
    filter: ["all", "js", "design"],
    title: "stopwhatch",
    subtitle: "Category",
    link: "https://mohammed-20.github.io/stopWatch/",
  },
  {
    id: 8,
    img: signupclass,
    filter: ["all", "react", "brand"],
    title: "signup",
    subtitle: "Category",
    link: "https://signingamer.netlify.app",
  },
  {
    id: 9,
    img: movies,
    filter: ["all", "js"],
    title: "movies",
    subtitle: "Category",
    link: "https://mohammed-20.github.io/Api-Mohammed/",
  },
];

export default function Gallery() {
  const [active, setActive] = useState("all");

  return (
    <G.Content>
      <G.Nav>
        <G.NavItem
          onClick={() => setActive("all")}
          className={`${active === "all" ? "active" : ""}`}
        >
          All
        </G.NavItem>
        <G.NavItem
          onClick={() => setActive("brand")}
          className={`${active === "brand" ? "active" : ""}`}
        >
          Brand
        </G.NavItem>
        <G.NavItem
          onClick={() => setActive("design")}
          className={`${active === "design" ? "active" : ""}`}
        >
          Design
        </G.NavItem>
        <G.NavItem
          onClick={() => setActive("react")}
          className={`${active === "react" ? "active" : ""}`}
        >
          Photos
        </G.NavItem>
        <G.NavItem
          onClick={() => setActive("js")}
          className={`${active === "js" ? "active" : ""}`}
        >
          Videos
        </G.NavItem>
      </G.Nav>
      <G.Picture>
        {portfolio.map((item) => (
          <G.DivImg
            className={
              item.filter.includes(active) ? "animationIn" : "animationOut"
            }
            key={item.id}
          >
            <G.Image src={item.img} alt={item.img} />
            <G.Overlay>
              <h3 className="project-title">{item.title}</h3>
              <h6 className="project-subtitle">{item.subtitle}</h6>
              <a href={item.link}>
                <Plus className="plus" />
              </a>
            </G.Overlay>
          </G.DivImg>
        ))}
      </G.Picture>
    </G.Content>
  );
}
