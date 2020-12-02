import React from "react";
import styled from "styled-components";
import * as I from "../../Components/Icons";
const Contanier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundfooter};

  width: 93%;
  height: 35vh;

  .copyright {
    color: ${(props) => props.theme.fontfooter};
    text-align: center;
    width: 30%;
    margin-left: 2em;
  }
`;
const IconGroup = styled.div`
  color: ${(props) => props.theme.fontfooter};
  display: flex;
  justify-content: center;
  .upwork {
    fill: ${(props) => props.theme.fontfooter};
  }
`;

export default function Footer() {
  return (
    <Contanier>
      <IconGroup>
        <I.Facebook />
        <I.Twitter />
        <I.UpWork className="upwork" />
        <I.Fiverr />
        <I.LinkedIn />
      </IconGroup>
      <p className="copyright">
        Copyright @ 2019 Cortex. All Rights Reserved Designed By Kiswa Solutions
      </p>
    </Contanier>
  );
}
