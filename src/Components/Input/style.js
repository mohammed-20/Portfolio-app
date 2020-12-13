import styled from "styled-components";
import { FadeRight } from "../../animation";
import { device } from "../../responsive";
export const Divinput = styled.div`
  height: 45px;
  margin: 0.9375em 0;
  ${(props) => (props.errors ? "border-color:red;" : "")}
`;
export const Input = styled.input`
  letter-spacing: 1px;
  outline: none;
  display: block;
  width: 95%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: ${(props) => props.theme.backgroundPages};
  background-clip: padding-box;
  border: 1px solid ${(props) => props.theme.backgroundPages};
  border-radius: 0.25rem;

  transition: all 0.3s border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:focus {
    background-color: ${(props) => props.theme.hoverInput};
  }
  @media ${device.laptop} {
    width: 100%;
  }
  @media ${device.mobileL} {
    height: calc(1.5em + 0.7rem + 2px);
    font-size: 0.8rem;
    padding: 0.4em 6em;
    text-align: center;
  }
`;

export const Error = styled.span`
  float: right;
  position: relative;
  top: -30px;
  right: 35px;
  font-size: 12px;
  z-index: 2;
  animation: 0.5s ${FadeRight} linear;
  @media ${device.mobileL} {
    top: -25px;
    right: 12px;
    font-size: 11px;
  }
`;
