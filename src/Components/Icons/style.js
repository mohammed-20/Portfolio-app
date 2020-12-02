import styled from "styled-components";

export const Icon = styled.div`
  margin: 1.25em 2.5em;
  margin-right: 0.6rem;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colorhover};
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
`;
