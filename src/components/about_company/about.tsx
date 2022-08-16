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
  font-feature-settings: "pnum" on, "lnum" on, "case" on, "ss01" on, "ss02" on,
    "ss03" on, "ss04" on, "ss05" on, "ss18" on, "ss19" on;
  color: #ffffff;
`;

const StyledArticle = styled.article`
  position: absolute;
  z-index: 10;
  margin-top: 0%;
  padding: 0 10% 0% 10%;
  width: 45%;
  @media (min-width: 300px) AND (max-width: 430px) {
    position: static;
    width: 80%;
    padding: 0 10% 4% 10%;
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
`
);

function About() {
  return (
    <StyledArticle>
      <OrangeLine theme={28} />
      <StyledHeader>{json.about_company.header}</StyledHeader>
      {json.about_company.text.map((e: string, i: number) => {
        return <StyledText key={i}> {e}</StyledText>;
      })}
    </StyledArticle>
  );
}

export default About;
