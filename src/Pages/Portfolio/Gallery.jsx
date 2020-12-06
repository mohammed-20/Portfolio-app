import React, { useState } from "react";
import { Gallery2, Blog1, Blog2, Blog3 } from "../../images";
import { Plus } from "../../Components/Icons";
import * as G from "./stylegallery";

const portfolio = [
  {
    id: 1,
    img: Blog1,
    filter: ["all", "design"],
    title: "Project title",
    subtitle: "Category",
  },
  {
    id: 2,
    img: Blog3,
    filter: ["all", "brand"],
    title: "Project title",
    subtitle: "Category",
  },
  {
    id: 3,
    img: Blog2,
    filter: ["all", "photos", "videos"],
    title: "Project title",
    subtitle: "Category",
  },
  {
    id: 4,
    img: Gallery2,
    filter: ["all", "videos", "design"],
    title: "Project title",
    subtitle: "Category",
  },
  {
    id: 5,
    img: Blog2,
    filter: ["all", "videos", "photos", "design"],
    title: "Project title",
    subtitle: "Category",
  },
  {
    id: 6,
    img: Gallery2,
    filter: ["all", "photos"],
    title: "Project title",
    subtitle: "Category",
  },
  {
    id: 7,
    img: Blog1,
    filter: ["all", "photos", "videos", "design"],
    title: "Project title",
    subtitle: "Category",
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
          onClick={() => setActive("photos")}
          className={`${active === "photos" ? "active" : ""}`}
        >
          Photos
        </G.NavItem>
        <G.NavItem
          onClick={() => setActive("videos")}
          className={`${active === "videos" ? "active" : ""}`}
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
              <Plus className="plus" />
            </G.Overlay>
          </G.DivImg>
        ))}
      </G.Picture>
    </G.Content>
  );
}
