import styled from "styled-components";

export const Wrapper = styled.div`
  border: 3px dashed ${(props) => props.theme.backgroundprogress};
  text-align: center;
  padding: 20px;
  margin: 30px 30px;
  &:hover {
    border-color: ${(props) => props.theme.colorhover};
  }
`;
export const Content = styled.div`
  padding: 20px;
  overflow: auto;
  padding-left: 10px;
  padding-right: 10px;
  color: ${(props) => props.theme.fontColor};
  .description {
    font-size: 0.86rem;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 15px;
    margin-right: 5em;
    font-weight: 500;
    text-align: center;
    line-height: 1.5;
    color: ${(props) => props.theme.colorparagraph};
  }
  .icon {
    border-bottom: 5px solid;
    display: inline-block;
  }
  .title {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.2;
    color: ${(props) => props.theme.fontColor};
    margin: 15px 0;
  }
  &:hover {
    background-color: ${(props) => props.theme.colorhover};
    transition: all 0.3s ease-in-out;
  }
`;
