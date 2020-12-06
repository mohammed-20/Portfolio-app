import { keyframes } from "styled-components";

const FadeInDownBig = keyframes`
   from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}`;
export default FadeInDownBig;
