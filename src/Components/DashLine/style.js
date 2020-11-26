import styled from "styled-components";

export const GruopLine = styled.div`
  position: relative;
  height: 2px;
  z-index: 1;
  width: 70%;
`;
export const Line1 = styled.div`
  background: linear-gradient(
    to right,
    transparent 30%,
    ${(props) => props.theme.primary} 30%
  );
  position: absolute;
  top: 90px;
  left: -30%;
  width: 100%;
  height: 100%;
  background-size: 20px 100%;
  transform: rotate(-45deg);
  transform: rotate(-45deg);
  left: -52%;
  transform: rotate(-60deg);
`;
export const Line2 = styled.div`
  background: linear-gradient(
    to right,
    transparent 30%,
    ${(props) => props.theme.primary} 30%
  );
  position: absolute;
  top: -30px;
  left: -30%;
  width: 100%;
  height: 100%;
  background-size: 20px 100%;
  transform: rotate(-45deg);
  transform: rotate(-45deg);
  left: unset;
  right: -38%;
  transform: rotate(40deg);
`;
export const Line3 = styled.div`
  background: linear-gradient(
    to right,
    transparent 30%,
    ${(props) => props.theme.primary} 30%
  );
  position: absolute;
  top: 110px;
  width: 100%;
  height: 100%;
  background-size: 20px 100%;
  transform: rotate(-45deg);
  transform: rotate(-45deg);
  left: -770px;
  transform: rotate(50deg);
`;
export const Line4 = styled.div`
  background: linear-gradient(
    to right,
    transparent 30%,
    ${(props) => props.theme.primary} 30%
  );
  position: absolute;
  top: 90px;
  width: 100%;
  height: 100%;
  background-size: 20px 100%;
  transform: rotate(-45deg);
  transform: rotate(-45deg);
  left: unset;
  right: -67%;
  transform: rotate(-70deg);
`;
