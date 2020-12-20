import styled from "styled-components";
import { device } from "../../responsive";
export const ProgressContainer = styled.div`
  display: flex;
  width: 100%;
`;
export const DivProgres = styled.div`
  border-radius: unset;
  background-color: ${(props) => props.theme.backgroundprogress};
  display: flex;
  height: 2rem;
  overflow: hidden;
  font-size: 0.75rem;
  width: 95%;
  margin-bottom: 1.5625em;
  @media ${device.mobileL} {
    height: 80%;
    margin-bottom: 1em;
  }
  @media ${device.mobileM} {
    /* margin-left: 35px; */
  }
  @media ${device.mobileS} {
    /* margin-left: 35px; */
  }
`;
export const Progres = styled.div`
  padding-left: 3.125em;
  justify-content: start;
  width: 99%;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  padding-top: 0.375em;
  font-weight: 500;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.9375rem;
  background-color: ${(props) => props.theme.primary};
  transition: none;
  color: ${(props) => props.theme.fontColor};
  @media ${device.mobileL} {
    height: 80%;
    padding-left: 2.125em;
    font-size: 0.7rem;
    padding-top: 0.2em;
  }
`;
export const LabelProgress = styled.span`
  width: 5%;
  margin-left: 1.25em;
  font-weight: 500;
  color: ${(props) => props.theme.fontColor};
  @media ${device.mobileL} {
    padding-left: 0;
    font-size: 0.78rem;
  }
  @media ${device.mobileM} {
    padding-left: 0.3em;
    font-size: 0.72rem;
  }
`;
