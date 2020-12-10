import styled from "styled-components";

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
    left: 0px;
    display: block;
    position: relative;
    margin-bottom: 30px;
  }
  .show1 {
    transform: translate3d(0, 0, 0);
    transition: all 800ms ease 0s;
  }
  .show2 {
    transition: all 800ms ease 0s;
    transform: translate3d(-1070px, 0, 0);
  }
  .show3 {
    transition: all 800ms ease 0s;
    transform: translate3d(-2138px, 0, 0);
  }
`;

export const SliderCont = styled.div`
  height: 80vh;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
  .row {
    width: 3372px;
    left: 0px;
    display: block;
    position: relative;
  }
  .show1 {
    transform: translate3d(0, 0, 0);
    transition: all 800ms ease 0s;
  }
  .show2 {
    transition: all 800ms ease 0s;
    transform: translate3d(-1070px, 0, 0);
  }
  .show3 {
    transition: all 800ms ease 0s;
    transform: translate3d(-2138px, 0, 0);
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

  .para {
    margin-top: 1.5em;
    margin-left: auto;
    margin-right: auto;
    max-width: 65%;
    font-weight: 400;
    color: #e6e6e6;
    font-size: 1rem;
    line-height: 1.5;
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
  .active {
    background-color: ${(props) => props.theme.primary};
  }
`;
export const Doteitem = styled.span`
  width: 20px;
  height: 20px;
  margin: 5px 7px;
  background-color: #999999;
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
