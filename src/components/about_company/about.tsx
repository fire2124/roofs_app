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
  margin-top: 0%;
  /* width: 100%; */
  background: #32323f;
  padding-bottom: 1%;
  @media (min-width: 300px) AND (max-width: ${mobileMax}px) {
    position: relative;
    padding-bottom: 0%;
  }
  @media (min-width: 1450px) {
    display: flex;
    justify-content: center;
  }
`;
const StyledAbout = styled.div`
  width: 45%;
  padding: 0 10% 0% 10%;
  @media (min-width: 300px) AND (max-width: ${mobileMax}px) {
    //width: 65%;
    padding: 0 10% 0% 8%;
    width: 82%;
  }
  @media (min-width: ${mobileMax}px) AND (max-width: 1450px) {
    width: 80%;
  }
  @media (min-width: 1450px) {
    width: 50%;
  }
`;

const OrangeLine = styled.div(
  ({ theme }) => `
  height: ${theme / 10 < 90 ? `${theme / 10}%` : "350px"};
  width: 0.001px;
  margin-left: -1%;
  margin-top: 5%;
  border: 1px solid #F58310;
  background: #F58310;
  position: absolute;

  @media (min-width: 300px) AND (max-width: 418px) {
    height: ${theme / 4.5}%;
    margin-top: 11%;
  }
  @media (min-width: 418px) AND (max-width: 518px) {
    height: ${theme / 5.5}%;
    margin-top: 11%;
  }
  @media (min-width: 519px) AND (max-width:618px) {
    height: ${theme / 6.5}%;
    margin-top: 11%;
  }
  @media (min-width: 618px) AND (max-width:700px) {
    height: ${theme / 7.5}%;
    margin-top: 11%;
  }
  @media (min-width: 700px) AND (max-width:${mobileMax}px) {
    height: ${theme / 8.5}%;
    margin-top: 11%;
  }
`
);

const StyledSection = styled.section`
  margin-left: 4%;
  padding-top: 2%;
`;

function About(props: any) {
  return (
    <StyledArticle>
      <StyledAbout>
        <OrangeLine
          theme={props.width}
          data-aos="fade-down"
          data-aos-duration="3000"
          data-aos-once="true"
        />
        <StyledSection>
          <StyledHeader id="about_company">
            {json.about_company.header}
          </StyledHeader>
          {json.about_company.text.map((e: string, index: number) => {
            return <StyledText key={index}> {e}</StyledText>;
          })}
        </StyledSection>
      </StyledAbout>
    </StyledArticle>
  );
}

export default About;
