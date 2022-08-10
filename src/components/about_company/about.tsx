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

function About() {
  return (
    <>
      <StyledHeader>{json.about_company.header}</StyledHeader>
      {json.about_company.text.map((e: string, i: number) => {
        return <StyledText key={i}> {e}</StyledText>;
      })}
    </>
  );
}

export default About;
