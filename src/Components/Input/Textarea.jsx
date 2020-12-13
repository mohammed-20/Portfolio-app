import React from "react";
import styled from "styled-components";
import { FadeRight } from "../../animation";
import { device } from "../../responsive";
const TextAera = styled.textarea`
  height: 41vh;
  width: 95%;
  font-size: 1.2rem;
  font-weight: 400;
  resize: vertical;
  line-height: 1.5;
  position: relative;
  margin-bottom: 1em;
  padding: 0.375rem 0.75rem;
  outline: none;
  background-color: ${(props) => props.theme.backgroundPages};
  background-clip: padding-box;
  border: 1px solid ${(props) => props.theme.backgroundPages};
  @media ${device.laptop} {
    width: 100%;
  }
  @media ${device.mobileL} {
    font-size: 0.8rem;
    padding: 0.4em 4.5em;
    text-align: center;
  }
  &:focus {
    background-color: ${(props) => props.theme.hoverInput};
  }
`;
const Error = styled.span`
  float: right;
  position: relative;
  top: 10px;
  right: 35px;
  font-size: 12px;
  z-index: 2;
  animation: 0.5s ${FadeRight} linear;
  @media ${device.mobileL} {
    top: -225px;
    right: 10px;
    font-size: 11px;
  }
`;

export default function Textarea(props) {
  const { value, error, handleChange } = props;
  return (
    <>
      <TextAera
        className={`textarea`}
        name="message"
        id="message"
        placeholder="Message"
        onChange={handleChange}
        value={value}
      />
      {error && <Error>{error}</Error>}
    </>
  );
}
