import React, { useState, useEffect } from "react";
import { Testimonialsimg } from "../../images";
import { Quote } from "../../Components/Icons";
import * as S from "./style";

const content = [
  {
    id: 1,
    qouteicon: <Quote />,
    descraption:
      "Lorem ipsum dolor sitamet consectetur adipisicing elit.Autem tenetur ratione quod.Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem teneturratione quod.",
    img: Testimonialsimg,
    name: "Lisa John",
    subtitle: "Ceo, Smart Company",
  },
  {
    id: 2,
    qouteicon: <Quote />,
    descraption:
      "Lorem ipsum dolor sitamet consectetur adipisicing elit.Autem tenetur ratione quod.Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem teneturratione quod.",
    img: Testimonialsimg,
    name: "mohammed",
    subtitle: "Ceo, Smart Company",
  },
  {
    id: 3,
    qouteicon: <Quote />,
    descraption:
      "Lorem ipsum dolor sitamet consectetur adipisicing elit.Autem tenetur ratione quod.Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem teneturratione quod.",
    img: Testimonialsimg,
    name: "Ahmed",
    subtitle: "Ceo, Smart Company",
  },
];

export default function Slider() {
  const [show, setShow] = useState("1");
  // const [offset, setOffset] = useState({ x: 0, y: 0 });

  // const sliderRef = useRef(null);
  // const CarouselRef = useRef(null);

  // let offsetX;
  // const handleMouseMove = (e) => {
  //   const el = e.target;
  //   setOffset((offset) => ({ ...offset, x: e.clientX, y: 0 }));
  //   el.style.left = offsetX + "px";
  // };

  // const handleMouseDown = (e) => {
  //   const el = e.target;
  //   console.log(el);
  //   // el.style.transform = "translateX(" + "px)";
  //   el.addEventListener("mousedown", handleMouseMove);

  //   offsetX = el.getBoundingClientRect().left;

  //   // el.addEventListener("mouseup", handleMouseUp);
  // };

  // const handleMouseUp = (e) => {
  //   const el = e.target;
  //   // el.removeEventListener("mousedwon", handleMouseMove);
  //   if (show === "1") {
  //     setShow((show) => (show = "2"));
  //   }
  //   if (show === "2") {
  //     setShow((show) => (show = "3"));
  //   }
  //   if (show === "3") {
  //     setShow((show) => (show = "1"));
  //   }
  // };
  const handleClick = (e) => {
    setShow(e.target.id);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (show === "1") {
        setShow((show) => (show = "2"));
      }
      if (show === "2") {
        setShow((show) => (show = "3"));
      }
      if (show === "3") {
        setShow((show) => (show = "1"));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [show]);

  return (
    <S.Slider>
      {/* <S.SliderCont> */}
      <div className="row">
        {content.map((item) => (
          <S.Carousel
            // offset={offset}
            className={`show${show}`}
            key={item.id}
            // ref={CarouselRef}
            // onMouseDown={handleMouseDown}
            // onMouseMove={handleMouseDown}
            // onMouseUp={handleMouseUp}
          >
            {item.qouteicon}
            <p className="para">{item.descraption}</p>
            <div className="image">
              <div className="img-style">
                <div className="img-frame">
                  <S.PersonImg src={item.img} alt="img" />
                </div>
              </div>
            </div>
            <h2 className="name-person">{item.name}</h2>
            <p className="subtitle">{item.subtitle}</p>
          </S.Carousel>
        ))}
      </div>
      {/* </S.SliderCont> */}
      <S.Dotes>
        <S.Doteitem
          id={1}
          onClick={handleClick}
          className={`${show === "1" ? "active" : ""}`}
        />
        <S.Doteitem
          id={2}
          onClick={handleClick}
          className={`${show === "2" ? "active" : ""}`}
        />
        <S.Doteitem
          id={3}
          onClick={handleClick}
          className={`${show === "3" ? "active" : ""}`}
        />
      </S.Dotes>
    </S.Slider>
  );
}
