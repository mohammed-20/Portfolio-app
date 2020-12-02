import React from "react";
import ColorPicker from "../../Components/ColorPicker";
import Header from "../../Components/Header";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faHome,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import * as S from "./style";
import * as T from "../../Components/Typography";
import { BoxIcon } from "../../Components/Icons";
import Footer from "./Footer";
export default function ContactUs() {
  return (
    <S.Wrapper>
      <ColorPicker />
      <S.Container>
        <S.LeftSide>
          <h3 className="feel">Feel Free to Contact Me!</h3>
          <div className="rowcontanct">
            <BoxIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </BoxIcon>
            <h5 className="concontact">+970 597 78092</h5>
          </div>
          <div className="rowcontanct">
            <BoxIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </BoxIcon>
            <h5 className="concontact">mnaim2014@hotmail.com</h5>
          </div>
          <div className="rowcontanct">
            <BoxIcon>
              <FontAwesomeIcon icon={faHome} />
            </BoxIcon>
            <h5 className="concontact">Karama, Gaza, Palestine</h5>
          </div>
          <div className="rowcontanct">
            <BoxIcon>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </BoxIcon>
            <h5 className="concontact">www.linkedin.com</h5>
          </div>
        </S.LeftSide>
        <S.RightSide>
          <div className="raw">
            <S.TitlePage>
              <S.HeadSpan>Co</S.HeadSpan>
              <T.PageHead1>
                <S.TitleSpan>Contact</S.TitleSpan>
                Me
              </T.PageHead1>
            </S.TitlePage>
          </div>
          <T.H3>I Am Available For Freelance</T.H3>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Full Name"
          />
          <Input type="email" name="eamil" id="eamil" placeholder="Email" />
          <textarea
            className="textarea"
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          <Button className="button">Send Message</Button>
        </S.RightSide>
      </S.Container>
      <Header />
      <Footer />
    </S.Wrapper>
  );
}
