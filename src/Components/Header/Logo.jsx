import React from "react";
import styled from "styled-components";

const SvgLogo = styled.svg`
  height: 56px;
  width: 55px;
  font-weight: 900;
  margin-top: 0.65em;
  font-size: 2rem;
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: ${(props) => props.theme.fontColor};
`;

export default function Logo() {
  return (
    <SvgLogo
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="918.000000pt"
      height="870.000000pt"
      viewBox="0 0 918.000000 870.000000"
      preserveAspectRatio="xMidYMid meet"
      fill="#000000"
    >
      <g
        transform="translate(0.000000,870.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path
          d="M2050 5035 l1 -3160 587 -680 587 -680 5 2505 5 2505 28 -71 c29 -71
33 -75 678 -720 l649 -649 649 649 c645 645 649 649 678 720 l28 71 5 -2505 5
-2505 587 680 587 680 1 3160 0 3160 -1270 -1270 -1270 -1270 -1270 1270
-1270 1270 0 -3160z"
        />
        <path
          d="M510 5655 l0 -1990 581 -675 c320 -371 586 -676 590 -678 5 -2 10
594 11 1325 l3 1328 25 -63 c20 -49 42 -79 107 -144 l83 -83 0 785 0 785 -700
700 -700 700 0 -1990z"
        />
        <path
          d="M7967 6942 l-697 -697 0 -785 0 -785 83 83 c65 65 87 95 107 144 l25
63 3 -1328 c1 -731 6 -1327 11 -1325 4 2 270 307 590 678 l581 675 0 1987 c0
1094 -1 1988 -3 1988 -1 0 -316 -314 -700 -698z"
        />
        <path
          d="M3370 3992 l0 -777 610 -610 610 -610 610 610 610 610 0 777 c0 428
-3 778 -7 778 -5 0 -279 -271 -610 -602 l-603 -603 -603 603 c-331 331 -605
602 -610 602 -4 0 -7 -350 -7 -778z"
        />
      </g>
    </SvgLogo>
  );
}
