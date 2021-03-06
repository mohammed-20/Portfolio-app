import React from "react";
import styled from "styled-components";
import * as I from "../../Components/Icons";
import { device } from "../../responsive";
const Contanier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundfooter};
  width: 93%;
  height: 35vh;
  @media ${device.mobileL} {
    width: 100%;
  }
  .copyright {
    color: ${(props) => props.theme.fontfooter};
    text-align: center;
    width: 30%;
    margin-left: 2em;
    @media ${device.tablet} {
      font-size: 14px;
      width: 80%;
      letter-spacing: 1px;
    }
  }
`;
const IconGroup = styled.div`
  color: ${(props) => props.theme.fontfooter};
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    font-size: 10px;
    margin-top: -3em;
  }
`;

export default function Footer() {
  return (
    <Contanier>
      <IconGroup>
        <I.Facebook />
        <I.Twitter />
        <I.UpWorkFooter />
        <I.Github />
        <I.LinkedIn />
      </IconGroup>
      <p className="copyright">
        Copyright @ 2020 Mohammed. All Rights Reserved Designed By Mohammed Naim
      </p>
    </Contanier>
  );
}
