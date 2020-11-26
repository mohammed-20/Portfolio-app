import styled from "styled-components";

export const Icon = styled.div`
  margin: 20px 40px;
  margin-right: 0.6rem;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;
