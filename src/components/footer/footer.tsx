import json from "../../json/text.json";
import styled from "styled-components";
import { mobileMax } from "../responsiveness";

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
  @media (min-width: 300px) AND (max-width: ${mobileMax}px) {
    background: #32323f;
    position: static;
    width: 80%;
    padding: 2px 10% 4% 10%;
  }
  @media (min-width: ${mobileMax}px) {
    position: absolute;
    z-index: 10;
    margin-top: 120%;
    margin-left: 50%;
  }
`;

function Footer() {
  return (
    <StykedFooter>
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
    </StykedFooter>
  );
}

export default Footer;
