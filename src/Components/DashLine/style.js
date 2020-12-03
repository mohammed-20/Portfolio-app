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
  margin-top: 5.625em;
  width: 100%;
  height: 100%;
  background-size: 20px 100%;
  transform: rotate(-45deg);
  transform: rotate(-45deg);
  margin-left: -28em;
  transform: rotate(-60deg);
`;
export const Line2 = styled.div`
  background: linear-gradient(
    to right,
    transparent 30%,
    ${(props) => props.theme.primary} 30%
  );
  position: absolute;
  margin-top: -5.125em;
  width: 100%;
  height: 100%;
  background-size: 20px 100%;
  transform: rotate(-45deg);
  transform: rotate(-45deg);
  left: unset;
  margin-left: 20em;
  transform: rotate(40deg);
`;
export const Line3 = styled.div`
  background: linear-gradient(
    to right,
    transparent 30%,
    ${(props) => props.theme.primary} 30%
  );
  margin-top: 4.875em;
  margin-left: -47.125em;
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

  margin-top: 5.6em;
  width: 100%;
  height: 100%;
  background-size: 20px 100%;
  transform: rotate(-45deg);
  transform: rotate(-45deg);
  left: unset;

  margin-left: 33em;
  transform: rotate(-70deg);
`;
