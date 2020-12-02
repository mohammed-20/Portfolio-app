import styled from "styled-components";

export const Divinput = styled.div`
  height: 45px;
  margin: 0.9375em 0;
`;
export const Input = styled.input`
  letter-spacing: 1px;
  outline: none;
  display: block;
  width: 83%;
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
`;
