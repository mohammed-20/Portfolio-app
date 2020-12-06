import styled from "styled-components";
import { BgHome } from "../../images";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${BgHome});
  background-position: center;
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
  color: ${(props) => props.theme.white};
  width: 36.5em;
  height: 14em;
  z-index: 1;
  margin: auto;
`;

export const Line = styled.div`
  width: 90%;
  background-image: linear-gradient(to right, transparent 30%, #999999 30%);
  background-size: 20px 100%;
  height: 1px;
  margin-left: 1.875em;
`;

export const IconGroup = styled.div`
  display: flex;
  justify-content: center;
`;
