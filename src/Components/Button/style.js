import styled from "styled-components";
import { device } from "../../responsive";
export const Button = styled.button`
  font-weight: 500;
  color: ${(props) => props.theme.fontColor};

  margin-right: 0.8rem;
  border-radius: 0;
  background-color: ${(props) => props.theme.primary};
  border: none;
  padding: 0.47rem 0.75rem;
  font-size: 1rem;
  line-height: 1.6;
  outline: none;
  &:hover {
    background-color: ${(props) => props.theme.backgroundhover};
  }
  @media ${device.mobileL} {
    padding: 0.47rem 0.75rem;
    font-size: 0.8rem;
  }
`;
