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
`;

const StyledText = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  font-feature-settings: "pnum" on, "lnum" on, "case" on, "ss01" on, "ss02" on,
    "ss03" on, "ss04" on, "ss05" on, "ss18" on, "ss19" on;
  color: #ffffff;
`;

const StyledArticle = styled.article`
  position: relative;
  z-index: 10;
  margin-top: -4%;
  width: 100%;
  background: #32323f;
  padding-bottom: 5%;
  @media (min-width: 300px) AND (max-width: ${mobileMax}px) {
    position: static;
    padding: 0 10% 4% 10%;
    padding-bottom: 0%;
  }
`;
const StyledAbout = styled.div`
  width: 45%;
  padding: 0 10% 0% 10%;
  @media (min-width: 300px) AND (max-width: ${mobileMax}px) {
    width: 65%;

  }
`;

const OrangeLine = styled.div(
  ({ theme }) => `
  height: ${theme * 3}%;
  width: 0.001px;
  margin-left: -3.5%;
  margin-top: 6%;
  border: 1px solid #F58310;
  background: #F58310;
  position: absolute;

  @media (min-width: 300px) AND (max-width: 430px) {
    height: ${theme * 2.3}%;
  }
`
);

const StyledSection = styled.section`
  margin-left: 10%;
`;

function About() {
  return (
    <StyledArticle>
      <StyledAbout>
        <OrangeLine theme={28} />
        <StyledSection>
          <StyledHeader id="about_company">
            {json.about_company.header}
          </StyledHeader>
          {json.about_company.text.map((e: string, i: number) => {
            return <StyledText key={i}> {e}</StyledText>;
          })}
        </StyledSection>
      </StyledAbout>
    </StyledArticle>
  );
}

export default About;
