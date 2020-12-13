import styled from "styled-components";
import { device } from "../../responsive";
export const GruopLine = styled.div`
  position: relative;
  height: 2px;
  z-index: 0;
  width: 70%;
  display: block;
  @media ${device.laptop} {
    display: none;
  }
`;
export const Line1 = styled.div`
  background: linear-gradient(
    to right,
    transparent 30%,
    ${(props) => props.theme.primary} 30%
  );
  position: absolute;
  margin-top: 11.625em;
  width: 100%;
  height: 100%;
  background-size: 20px 100%;
  transform: rotate(-45deg);
  transform: rotate(-45deg);
  margin-left: -31em;
  transform: rotate(-60deg);
`;
export const Line2 = styled.div`
  background: linear-gradient(
    to right,
    transparent 30%,
    ${(props) => props.theme.primary} 30%
  );
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: 20px 100%;
  transform: rotate(-45deg);
  transform: rotate(-45deg);
  left: unset;
  margin-left: 22em;
  transform: rotate(40deg);
`;
export const Line3 = styled.div`
  background: linear-gradient(
    to right,
    transparent 30%,
    ${(props) => props.theme.primary} 30%
  );
  margin-top: 9.875em;
  margin-left: -46.875em;
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: 20px 100%;
  transform: rotate(-45deg);
  transform: rotate(-45deg);
  transform: rotate(50deg);
`;
export const Line4 = styled.div`
  background: linear-gradient(
    to right,
    transparent 30%,
    ${(props) => props.theme.primary} 30%
  );
  position: absolute;
  margin-top: 10em;
  width: 100%;
  height: 100%;
  background-size: 20px 100%;
  transform: rotate(-45deg);
  transform: rotate(-45deg);
  left: unset;
  margin-left: 35em;
  transform: rotate(-70deg);
`;
