import styled from "styled-components";
import Slider from "../../images/slider-1.jpg";
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${Slider});
  background-position: -72px -65px;
  background-attachment: fixed;
  background-size: cover;
  position: absolute;
  overflow: hidden;
  right: 30px;
`;
export const Overlay = styled.div`
  background-color: rgb(0, 0, 0, 0.65);
  z-index: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  margin: 0 0 0 23.7em;
  width: 35.5em;
  height: 19.5em;
  z-index: 1;
`;

export const Line = styled.div`
  width: 90%;
  background-image: linear-gradient(to right, transparent 30%, #999999 30%);
  background-size: 20px 100%;
  height: 1px;
  margin-left: 30px;
`;

export const IconGroup = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextLogo = styled.h2`
  position: absolute;
  right: 50px;
  top: -5px;
  z-index: 10;
  height: 96px;
  width: 230px;
  color: #fff;
  background-color: rgba(250, 183, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 2.2rem;
  line-height: 1.2;

  &::after {
    content: "";
    position: absolute;
    right: 0px;
    top: 32px;
    width: 40px;
    height: 40px;
    transform: rotate(45deg);
    z-index: 0;
    background-color: #fab700;
    margin-right: -4px;
  }
`;
