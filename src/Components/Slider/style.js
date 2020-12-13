import styled from "styled-components";
import { device } from "../../responsive";
export const Slider = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  color: #ffffff;

  .row {
    width: 3372px;
    cursor: pointer;
    left: 0px;
    display: block;
    position: relative;
    margin-bottom: 30px;
  }
  .show1 {
    transform: translateX(0);
    pointer-events: none;
  }
  .show2 {
    transform: translateX(-1070px);
    pointer-events: none;
    @media ${device.laptopL} {
      transform: translateX(-1100px);
    }
    @media ${device.laptop} {
      transform: translateX(-948px);
    }
    @media ${device.mobileL} {
      transform: translateX(-731px);
    }
  }
  .show3 {
    transform: translateX(-2138px);
    pointer-events: none;
    @media ${device.laptopL} {
      transform: translateX(-2196px);
    }
    @media ${device.laptop} {
      transform: translateX(-1887px);
    }
    @media ${device.mobileL} {
      transform: translateX(-1448px);
    }
  }
`;

export const Carousel = styled.div`
  float: left;
  height: 100%;
  width: 33.33333%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: -55px;
  margin-top: 30px;
  cursor: pointer;
  transition: all 800ms ease 0s;
  @media ${device.laptopL} {
    margin-left: -25px;
  }
  @media ${device.laptop} {
    margin-left: -11.8em;
  }
  @media ${device.mobileL} {
    margin-left: -25em;
  }
  .para {
    margin-top: 1.5em;
    margin-left: auto;
    margin-right: auto;
    max-width: 65%;
    font-weight: 400;
    color: #e6e6e6;
    font-size: 1rem;
    line-height: 1.5;
    @media ${device.mobileL} {
      font-size: 12px;
      width: 28%;
      margin-left: -0.7em;
      margin-right: 1.5em;
    }
  }
  .image {
    margin: 3em auto;
    width: auto;
    max-width: 100%;
  }
  .img-style {
    padding-bottom: 13px;
    margin-left: 16px;
  }
  .img-frame {
    border: 4px dashed;
    margin: auto;
    border-color: ${(props) => props.theme.primary};
  }
  .name-person {
    font-weight: 700;
    font-size: 2em;
    line-height: 1.2;
    color: #e6e6e6;
  }
  .subtitle {
    font-weight: 400;
    font-size: 1rem;
  }
`;

export const Dotes = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-left: -1em;
  top: 30px;
  position: relative;
  @media ${device.mobileL} {
    margin-left: 0.8em;
    top: 25px;
  }
  .active {
    background-color: ${(props) => props.theme.primary};
  }
`;
export const Doteitem = styled.span`
  width: 20px;
  height: 20px;
  margin: 5px 7px;
  background-color: #999999;
  @media ${device.mobileL} {
    width: 15px;
    height: 15px;
  }
  &:hover {
    background-color: #cccccc;
  }
`;
export const PersonImg = styled.img`
  margin-right: 15px;
  margin-top: 15px;
  margin-bottom: -15px;
  margin-left: -15px;
  max-width: 100%;
  height: auto;
  max-height: 100px;
  border: 3px solid;
  vertical-align: middle;
`;
