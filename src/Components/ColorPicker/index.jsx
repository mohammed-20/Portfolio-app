import { useState } from "react";
import * as S from "./style";
import * as T from "../../Components/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";

export default function ColorPicker({ onClick }) {
  const [DisplayColorLabel, setDisplayColorLabel] = useState(false);

  const displayColorsWrapper = () => {
    if (DisplayColorLabel === true) {
      setDisplayColorLabel(false);
    } else {
      setDisplayColorLabel(true);
    }
  };
  return (
    <S.Wrapper>
      <S.ColorBtn onClick={displayColorsWrapper}>
        {" "}
        <FontAwesomeIcon icon={faCogs} />
      </S.ColorBtn>
      <S.ColorLabel toggleC={DisplayColorLabel}>
        <S.LightVersion>
          <T.H6>Light Version</T.H6>
          <S.LightVersionColor>
            <S.ColorSpan id="blue" onClick={onClick} theme={"#5d83ff"} />

            <S.ColorSpan id="green" onClick={onClick} theme={"#5de60e"} />
            <S.ColorSpan id="mayablue" onClick={onClick} theme={"#52A3CC"} />
            <S.ColorSpan id="red" onClick={onClick} theme={"#fa5151"} />
            <S.ColorSpan id="roman" onClick={onClick} theme={"#E68585"} />
            <S.ColorSpan id="springgreen" onClick={onClick} theme={"#0ad670"} />
            <S.ColorSpan id="violent" onClick={onClick} theme={"#f134e8"} />
            <S.ColorSpan id="yellow" onClick={onClick} theme={"#fab700"} />
          </S.LightVersionColor>
        </S.LightVersion>
        <S.DarkVersion>
          <T.H6>Dark Version</T.H6>
          <S.DarkVersionColor>
            <S.ColorSpan id="darkBlue" onClick={onClick} theme={"#1414b3"} />
            <S.ColorSpan id="darkCyan" onClick={onClick} theme={"#087a7a"} />
            <S.ColorSpan id="darkGreen" onClick={onClick} theme={"#015c3b"} />
            <S.ColorSpan id="darkIndig" onClick={onClick} theme={"#5c456b"} />
            <S.ColorSpan id="darkOrang" onClick={onClick} theme={"#c06a01"} />
            <S.ColorSpan id="darkPink" onClick={onClick} theme={"#db376e"} />
            <S.ColorSpan id="darkPurpal" onClick={onClick} theme={"#8A2BE2"} />
            <S.ColorSpan id="darkRed" onClick={onClick} theme={"#d30000"} />
          </S.DarkVersionColor>
        </S.DarkVersion>
      </S.ColorLabel>
    </S.Wrapper>
  );
}
