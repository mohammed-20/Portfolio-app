import { keyframes } from "styled-components";

const ZoomOut = keyframes`
  from {
    width: 30%;
    height: 100%;
  }
  
  to {
    width: 0;
    height: 0;
  }
  `;
export default ZoomOut;
