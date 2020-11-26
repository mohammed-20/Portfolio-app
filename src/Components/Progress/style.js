import styled from "styled-components";
export const ProgressContainer = styled.div`
  display: flex;
`;
export const DivProgres = styled.div`
  border-radius: unset;
  background-color: ${(props) => props.theme.backgroundprogress};
  display: flex;
  height: 2rem;
  overflow: hidden;
  font-size: 0.75rem;
  width: 60em;
  margin-bottom: 25px;
`;
export const Progres = styled.div`
  padding-left: 50px;
  justify-content: start;
  width: 99%;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  padding-top: 6px;
  font-weight: 500;
  align-items: center;
  text-transform: uppercase;
  font-size: 15px;
  background-color: ${(props) => props.theme.primary};
  transition: none;
  color: ${(props) => props.theme.fontColor};
`;
export const LabelProgress = styled.span`
  margin-left: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.fontColor};
`;
