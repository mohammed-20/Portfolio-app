import styled from "styled-components";
import { device } from "../../responsive";
export const DivCard = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-right: -4.5em;
  @media ${device.tablet} {
    flex-direction: column;
    margin-left: 2.5em;
    width: 100%;
    margin-top: -20px;
  }
  @media ${device.mobileL} {
    margin-left: 2.5em;
    width: 100%;
    margin-top: -20px;
  }
`;
export const DateCard = styled.div`
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 37px;
    width: 1.875em;
    height: 1.875em;
    border-radius: 50%;
    background-color: ${(props) => props.theme.primary};
    @media ${device.tablet} {
      display: none;
    }
  }

  .date {
    padding: 3.125em 0;
    font-weight: 400;
    color: ${(props) => props.theme.colorparagraph};
    font-size: 1.05rem;
    line-height: 1.5;
    width: 65%;
    @media ${device.laptop} {
      font-size: 1.05rem;
    }
    @media ${device.tablet} {
      width: 100%;
      font-size: 1.05rem;
      padding: 1em 0;
    }
    @media ${device.mobileL} {
      font-size: 0.85rem;
    }
  }

  position: relative;
  flex: 0 0 16%;
  max-width: 16.666667%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  @media ${device.tablet} {
    font-size: 1.05rem;
    max-width: 83%;
    font-size: 1.05rem;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0px;
    right: 50px;
    width: 3px;
    height: 100%;
    background-color: ${(props) => props.theme.primary};
    @media ${device.tablet} {
      display: none;
    }
  }
`;
export const Card = styled.div`
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 1.875em;
    height: 1.875em;
    border-radius: 50% 0 0 0;
    background-color: ${(props) => props.theme.primary};
  }
  .subtitle {
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme.primary};
    @media ${device.mobileL} {
      font-size: 0.9rem;
    }
    @media ${device.mobileM} {
      font-size: 0.85rem;
    }
  }
  .description {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    color: ${(props) => props.theme.colorparagraph};
    @media ${device.mobileL} {
      font-size: 0.8rem;
    }
    @media ${device.mobileM} {
      font-size: 0.75rem;
    }
    @media ${device.mobileS} {
      font-size: 0.7rem;
    }
  }
  padding: 2.5em;
  position: relative;
  margin: 0 0 30px 0;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  width: 83.3%;
  border-right: 3px solid ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.backgroundLabel};
  @media ${device.mobileL} {
    width: 100%;
    padding: 1.5em;
  }
`;
