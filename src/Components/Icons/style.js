import styled from "styled-components";

export const Icon = styled.div`
  margin: 20px 40px;
  margin-right: 0.6rem;
  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;
export const ImgIcon = styled.img`
  height: 2rem;
  width: 2rem;
  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;
