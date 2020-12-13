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
  const [show, setShow] = useState(1);
  // const [offset, setOffset] = useState({ x: 0 });
  // const [deltaX, setDeltaX] = useState();

  // const handleMouseMove = (e) => {
  //   console.log(offset.x - e.clientX);
  //   const _deltaX = offset.x - e.clientX;
  //   setDeltaX(_deltaX);

  //   setOffset((offset) => ({ ...offset, x: e.clientX }));
  // };

  // const handleMouseDown = (e) => {
  //   const el = e.target;
  //   setDeltaX(0);
  //   setOffset({ x: e.clientX });

  //   el.addEventListener("mousemove", handleMouseMove);
  //   el.addEventListener("mouseup", handleMouseUp);
  // };

  // const handleMouseUp = (e) => {
  //   const el = e.target;
  //   if (Math.abs(deltaX) > 50) {
  //     if (deltaX > 0) {
  //       setShow((show) => {
  //         let newShow = show + 1;
  //         return newShow > 3 ? 1 : show;
  //       });
  //     } else {
  //       setShow((show) => {
  //         let newShow = show - 1;
  //         return newShow < 1 ? 3 : show;
  //       });
  //     }
  //   }
  //   el.removeEventListener("mousemove", handleMouseMove);
  // };
  const handleClick = (e) => {
    setShow(e.target.id);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (show > 0) {
        setShow((show) => {
          let newShow = show + 1;
          return newShow > 3 ? 1 : newShow;
        });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [show]);

  return (
    <S.Slider>
      <div className="row">
        {content.map((item) => (
          <S.Carousel className={`show${show}`} key={item.id}>
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

      <S.Dotes>
        <S.Doteitem
          id="1"
          onClick={handleClick}
          className={`${show === 1 ? "active" : ""}`}
        />
        <S.Doteitem
          id="2"
          onClick={handleClick}
          className={`${show === 2 ? "active" : ""}`}
        />
        <S.Doteitem
          id="3"
          onClick={handleClick}
          className={`${show === 3 ? "active" : ""}`}
        />
      </S.Dotes>
    </S.Slider>
  );
}
