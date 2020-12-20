import styled from "styled-components";
import { device } from "../../responsive";
export const Icon = styled.a`
  margin: 1.25em 2.5em;
  margin-right: 0.6rem;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colorhover};
  }
  @media ${device.laptop} {
    margin: 1.25em 1.2em;
    font-size: 14px;
    margin-right: 0.6rem;
  }
  @media ${device.mobileL} {
    font-size: 12px;
  }
`;
export const PlusIcon = styled.span`
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colorhover};
  }
`;
export const QuotIcon = styled.div`
  color: ${(props) => props.theme.primary};
  font-size: 4.5em;
  vertical-align: -1.125em;
  @media ${device.mobileL} {
    font-size: 3.5em;
  }
`;
export const DivIcon = styled.div`
  border: 4px dashed ${(props) => props.theme.primary};
  padding-bottom: 1px;
  position: relative;
  margin: 0.9375em 0.6875em;
  padding-right: 0.9375em;
  padding-left: 0.9375em;
  width: 5em;
  @media ${device.laptop} {
    margin-top: 1em;
  }
  @media ${device.mobileL} {
    width: 4em;
  }
`;
export const ShapBox = styled.div`
  margin-right: 0.9375em;
  margin-top: 0.6em;
  margin-bottom: -0.9em;
  margin-left: -1.2em;
  background-color: ${(props) => props.theme.backgroundprogress};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 11vh;
  width: 3em;
  font-size: 1.5rem;
  color: ${(props) => props.theme.titlespancolor};
  @media ${device.laptop} {
    height: 13vh;
  }
  @media ${device.mobileL} {
    height: 11vh;
    width: 3em;
    font-size: 1.2rem;
  }
`;
