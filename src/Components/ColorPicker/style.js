import styled from "styled-components";

export const Wrapper = styled.div`
  width: auto;
  height: auto;
  position: fixed;
  top: 150px;
  left: 0;
  z-index: 9999;

  ${(props) =>
    props.toggleC ? "width: auto;height: auto;" : "width: 50px;height: 50px;"};
`;

export const ColorBtn = styled.div`
  width: 50px;
  background-color: ${({ theme }) => theme.primary};
  height: 50px;
  font-size: 1.95rem;
  align-items: center;
  color: ${(props) => props.theme.blackGray};
  display: flex;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  justify-content: center;
  box-shadow: 3px 1px 5px 0 rgba(0, 0, 0, 0.6);
`;
export const ColorLabel = styled.div`
  padding: 15px 15px 0px 20px;
  margin-top: 0.8em;

  display: block;
  background-color: ${({ theme }) => theme.backgroundLabel};

  box-shadow: -2px 1px 5px 1px rgba(0, 0, 0, 0.4);
  border-radius: 0 20px 20px 0;
  z-index: 2;
  width: 15em;
  transition-property: padding, height;
  transition: 0.3s;
  overflow: hidden;
  ${(props) =>
    props.toggleC
      ? "height:288px;"
      : "height:0; padding: 0 15px 0 20px; box-shadow:none;"};
`;
export const LightVersion = styled.div``;
export const LightVersionColor = styled.div`
  margin-left: 10px;
  margin-bottom: 17px;
`;
export const DarkVersion = styled.div``;
export const DarkVersionColor = styled.div`
  margin-left: 10px;
`;
export const ColorSpan = styled.span`
  display: inline-block;
  width: 35px;
  height: 35px;
  margin: 7px 7px 6px 6px;
  cursor: pointer;
  border-radius: 0 5px 0 5px;
  background-color: ${({ theme }) => theme};
  box-shadow: -1px 5px 5px 0 rgba(0, 0, 0, 0.4);
  transform: skew(-5deg) rotate(5deg);
  z-index: 9999;
  transition: 0.3s transform;

  &:hover {
    transform: skew(-5deg) rotate(5deg) scale(1.05) translateY(5px);
  }
`;
