import json from "../../json/text.json";
import styled from "styled-components";
import { mobileMax } from "../responsiveness";
import Up from "../../images/up.svg";

const StyledHeader = styled.p`
  font-family: "Arya";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 104.2%;
  font-feature-settings: "pnum" on, "lnum" on, "case" on;
  color: #ffffff;
  text-align: right;
  @media (min-width: 300px) AND (max-width: ${mobileMax}px) {
    text-align: left;
  }
`;

const StyledText = styled.section`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  font-feature-settings: "pnum" on, "lnum" on, "case" on, "ss01" on, "ss02" on,
    "ss03" on, "ss04" on, "ss05" on, "ss18" on, "ss19" on;
  color: #ffffff;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  white-space: nowrap;
  @media (min-width: 300px) AND (max-width: ${mobileMax}px) {
    display: block;
  }
`;
const StyledTextA = styled.a`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  text-align: right;
  font-feature-settings: "pnum" on, "lnum" on, "case" on, "ss01" on, "ss02" on,
    "ss03" on, "ss04" on, "ss05" on, "ss18" on, "ss19" on;
  color: #ffffff;

  @media (min-width: 300px) AND (max-width: ${mobileMax}px) {
    text-align: left;
  }
`;

const StykedFooter = styled.footer`
  background: #32323f;
  position: relative;
  padding-top: 1%;
  padding-bottom: 4%;
  display: grid;
  justify-content: center;

  @media (min-width: 300px) AND (max-width: 786px) {
    display: flex;
    position: relative;
    justify-content: start;
    padding-left: 10%;
    width: 75%;
  }
  @media (min-width: 786px) AND (max-width: 1280px) {
    padding: 5% 5% 5% 5%;
  }
`;

const StyledDiv = styled.div`
  width: 100%;
`;

const ButtonUp = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
`;

const Img = styled.img`
  width: 36px;
  height: 36px;
`;

function Footer(props: any) {
  return (
    <StykedFooter>
      <StyledDiv
        data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-once="true"
      >
        <StyledHeader id="contact">{json.contact.header}</StyledHeader>
        <StyledText>
          <div>{json.contact.name}</div>
          <div>
            {" Tel.: "}
            <StyledTextA href="tel:+421 908 345 218">
              {json.contact.tel}
            </StyledTextA>
          </div>
          <div>
            mail:
            <StyledTextA href="mailto:frantisekpolak2458@gmail.com">
              {" "}
              {json.contact.mail}
            </StyledTextA>
          </div>
        </StyledText>
      </StyledDiv>
      {props.width <= mobileMax ? (
        <ButtonUp>
          <a href="#top"
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-once="true"
          >
            <Img src={Up} alt={"UpButton"} />{" "}
          </a>
        </ButtonUp>
      ) : null}
    </StykedFooter>
  );
}

export default Footer;
