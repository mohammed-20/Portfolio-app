import styled from "styled-components";
import { BounceInUp } from "../../animation";
import { device } from "../../responsive";
export const Wrapper = styled.main`
  height: 100%;
  padding-top: 3.4375em;
  z-index: -2;
  transition: 0.3s;
  background-color: ${(props) => props.theme.backgroundContact};
  @media ${device.mobileL} {
    padding-top: 2.4375em;
  }
`;
export const Container = styled.div`
  width: 95%;
  align-items: center;
  display: flex;
  z-index: 1;
  padding-bottom: 7.5em;
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-name: ${BounceInUp};
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;
export const LeftSide = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding-left: 5em;
  letter-spacing: 1px;
  @media ${device.laptop} {
    padding-left: 1em;
  }
  @media ${device.mobileL} {
    max-width: 100%;
  }
  .feel {
    color: ${(props) => props.theme.titlespancolor};
    margin-bottom: 0.25em;
    padding-bottom: 0.25rem;
    text-align: left;
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 1.2;
    @media ${device.laptop} {
      margin-bottom: 1em;
      margin-top: 2em;
    }
    @media ${device.mobileL} {
      font-size: 1.5rem;
    }
  }
  .rowcontanct {
    display: flex;
    align-items: center;
    @media ${device.mobileL} {
      flex-direction: column;
    }
    .concontact {
      margin-left: 1.5em;
      font-size: 1.5rem;
      font-weight: 400;
      color: ${(props) => props.theme.textbalck7};
      @media ${device.laptop} {
        font-size: 1.25rem;
      }
      @media ${device.mobileL} {
        font-size: 1rem;
        margin-left: -0.3em;
        margin-top: 0.7em;
      }
    }
  }
`;
export const RightSide = styled.div`
  flex: 0 0 43%;
  max-width: 43%;
  padding-top: 0.1875em;
  top: 50px;
  position: relative;
  @media ${device.laptop} {
    flex: 0 0 44.5%;
    max-width: 44.5%;
  }
  @media ${device.mobileL} {
    max-width: 100%;
  }
  @media ${device.mobileM} {
    max-width: 95%;
    margin-left: 10px;
  }
  .button {
    width: 95%;
    @media ${device.laptop} {
      width: 100%;
    }
  }
`;

export const TitlePage = styled.div`
  position: relative;
  padding-bottom: 2em;
  color: ${(props) => props.theme.titlespancolor};
  @media ${device.mobileL} {
    margin-left: 6em;
  }
  @media ${device.mobileM} {
    margin-left: 5em;
  }
  @media ${device.mobileS} {
    margin-left: 3.5em;
  }
`;
export const TitleSpan = styled.span`
  border-bottom: 3px dashed;
  padding-bottom: 0.4em;
  color: ${(props) => props.theme.primary};
  padding-right: 0.625em;
  @media ${device.mobileL} {
    padding-bottom: 0.3em;
    padding-right: 0.2em;
  }
`;

export const HeadSpan = styled.span`
  position: absolute;
  top: -31px;
  left: 170px;
  font-weight: 700;
  font-size: 5rem;
  z-index: -1;
  color: ${(props) => props.theme.headSpancolor};
  letter-spacing: 7px;
  @media ${device.mobileL} {
    font-size: 3rem;
    top: -13px;
    left: 145px;
  }
  @media ${device.mobileM} {
    font-size: 2.8rem;
    top: -10px;
    left: 155px;
  }
`;
