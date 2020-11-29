import { useState, useContext } from "react";
import { Themecontext } from "../../App";
import * as S from "./style";
import * as T from "../../Components/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";

export default function ColorPicker() {
  const handleClick = useContext(Themecontext);
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
            <S.ColorSpan id="blue" onClick={handleClick} theme={"#5d83ff"} />

            <S.ColorSpan id="green" onClick={handleClick} theme={"#5de60e"} />
            <S.ColorSpan
              id="mayablue"
              onClick={handleClick}
              theme={"#52A3CC"}
            />
            <S.ColorSpan id="red" onClick={handleClick} theme={"#fa5151"} />
            <S.ColorSpan id="roman" onClick={handleClick} theme={"#E68585"} />
            <S.ColorSpan
              id="springgreen"
              onClick={handleClick}
              theme={"#0ad670"}
            />
            <S.ColorSpan id="violent" onClick={handleClick} theme={"#f134e8"} />
            <S.ColorSpan id="yellow" onClick={handleClick} theme={"#fab700"} />
          </S.LightVersionColor>
        </S.LightVersion>
        <S.DarkVersion>
          <T.H6>Dark Version</T.H6>
          <S.DarkVersionColor>
            <S.ColorSpan
              id="darkBlue"
              onClick={handleClick}
              theme={"#1414b3"}
            />
            <S.ColorSpan
              id="darkCyan"
              onClick={handleClick}
              theme={"#087a7a"}
            />
            <S.ColorSpan
              id="darkGreen"
              onClick={handleClick}
              theme={"#015c3b"}
            />
            <S.ColorSpan
              id="darkIndig"
              onClick={handleClick}
              theme={"#5c456b"}
            />
            <S.ColorSpan
              id="darkOrang"
              onClick={handleClick}
              theme={"#c06a01"}
            />
            <S.ColorSpan
              id="darkPink"
              onClick={handleClick}
              theme={"#db376e"}
            />
            <S.ColorSpan
              id="darkPurpal"
              onClick={handleClick}
              theme={"#8A2BE2"}
            />
            <S.ColorSpan id="darkRed" onClick={handleClick} theme={"#d30000"} />
          </S.DarkVersionColor>
        </S.DarkVersion>
      </S.ColorLabel>
    </S.Wrapper>
  );
}
