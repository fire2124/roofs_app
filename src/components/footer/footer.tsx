import json from "../../json/text.json";
import styled from "styled-components";

const StyledHeader = styled.p`
  font-family: "Arya";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 104.2%;
  font-feature-settings: "pnum" on, "lnum" on, "case" on;
  color: #ffffff;
`;

const StyledText = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  text-align: right;
  font-feature-settings: "pnum" on, "lnum" on, "case" on, "ss01" on, "ss02" on,
    "ss03" on, "ss04" on, "ss05" on, "ss18" on, "ss19" on;
  color: #ffffff;
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
  text-decoration: none;
`;

function Footer() {
  return (
    <footer>
      <StyledHeader>{json.contact.header}</StyledHeader>
      <StyledText>
        {json.contact.name} Tel.:
        <StyledTextA href="tel:+421 908 345 218">
          {json.contact.tel}
        </StyledTextA>{" "}
        mail:
        <StyledTextA href="mailto:frantisekpolak2458@gmail.com">
          {" "}
          {json.contact.mail}
        </StyledTextA>
      </StyledText>
    </footer>
  );
}

export default Footer;
