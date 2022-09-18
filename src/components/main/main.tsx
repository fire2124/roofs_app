import json from "../../json/text.json";
import styled from "styled-components";
import images from "../images";
import { mobileMax, percentageArray } from "../responsiveness";
import { percentageFunction } from "../../services/helper";
import { FlexOne } from "./flexOne";
import { FlexTwo } from "./flexTwo";

const MainImg = styled.div`
  background: url(${images.image_header}) no-repeat;
  height: 100%;
  width: 100%;

  @media (min-width: 300px) and (max-width: 434px) {
    position: static;
    background: url(${images.strecha}) no-repeat;
    height: 253px;
  }

  @media (min-width: 434px) {
    min-height: 370px;
    width: 100%;
    position: static;
    background-position: 33% 103%;
    transform: scale(1, 1);
    z-index: 11;
  }
`;

const Bdiv = styled.div(
  ({ theme }) => `
  @media (min-width: ${mobileMax}px) and (max-width: 980px) {
    width: 0;
    height: 0;
    border-top: 1500px solid #32323f;
    border-right: ${theme * 0.72}px solid transparent;
    margin-top: -85.8664%;
    // margin-top:  -${theme * 0.0988}%;
    position: static;
  }
  @media (min-width: 980px) and (max-width: 1333px) {
    width: 0;
    height: 0;
    border-top: 1605px solid #32323f;
    border-right: ${theme * 0.75735}px solid transparent;
    margin-top: -70.5%;
  }
  @media (min-width: 1333px) and (max-width: 1600px) {
    width: 0;
    height: 0;
    border-top: 2205px solid #32323f;
    border-right: ${theme * 0.65}px solid transparent;
    margin-top: -41.6%;
  }
  @media (min-width: 1600px) {
    width: 0;
    height: 0;
    border-top: 2205px solid #32323f;
    border-right: ${theme * 0.77}px solid transparent;
    margin-top: -50%;
  }
`
);

const Bdiv2 = styled.div(
  ({ theme }) => `
  @media (min-width: ${mobileMax}px) and (max-width: 878px){
    display:none;
  }
  @media (min-width: 1200px) and (max-width:1300px){
    width: 0;
    height: 0;
    margin-top: -52%;
    border-bottom: ${1900}px solid #32323f;
    border-left: ${theme * 0.99}px solid transparent;
  }
  @media (min-width: 1300px) and (max-width:1430px) {
    width: 0;
    height: 0;
    margin-top: -126%;
    border-bottom: ${1834}px solid #32323f;
    border-left: ${theme * 0.99}px solid transparent;
  }
  @media (min-width: 1430px) and (max-width:1450px){
    width: 0;
    height: 0;
    margin-top: -120%;
    border-bottom: ${1834}px solid #32323f;
    border-left: ${theme * 0.99}px solid transparent;
  }
  @media (min-width: 1450px) and (max-width:1546px){
    width: 0;
    height: 0;
    margin-top: -115%;
    border-bottom: ${1834}px solid #32323f;
    border-left: ${theme * 0.99}px solid transparent;
  }
  @media (min-width: 1546px){
    width: 0;
    height: 0;
    margin-top: -100%;
    border-bottom: ${1900}px solid #32323f;
    border-left: ${theme * 0.99}px solid transparent;
  }
`
);

// Offering start
const MainArticle = styled.article`
  height: 100%;
  width: 100%;
  @media (min-width: 300px) AND (max-width: ${mobileMax}px) {
    margin-top: -5%;
  }
  @media (min-width: ${mobileMax}px) {
    margin-top: 1%;
    z-index: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const SectionFlex = styled.section`
  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    width: 90%;
    position: static;
    z-index: 10;
  }

  @media (min-width: ${mobileMax}px) {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 10;
  }
`;

const StyledPadding = styled.div`
  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    padding: 0% 5% 0% 5%;
  }
  @media (min-width: ${mobileMax}px) and (max-width: 1600px) {
    padding-left: 5%;
  }
  @media (min-width: 1600px) {
    padding-left: 17%;
  }
`;

const WhiteH1 = styled.h1`
  font-family: "Arya";
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 104.2%;
  font-feature-settings: "pnum" on, "lnum" on, "case" on;
  color: #ffffff;
  z-index: 100;

  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    font-weight: 400;
    font-size: 44px;
    line-height: 106.7%;
  }
`;

const OrangeH1 = styled.div`
  color: #f69532;
`;

const StyledImg = styled.img`
  position: absolute;
  z-index: 10;
  margin-top: 1.5%;
  @media (min-width: 300px) AND (max-width: ${mobileMax}px) {
    position: static;
    margin-left: 5%;
  }
`;

const WhiteSmallLabel = styled.p`
  font-family: "Source Sans Pro";
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.015em;
  font-feature-settings: "pnum" on, "lnum" on, "case" on;
  color: #ffffff;
`;

const OfferingA = styled.a`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-decoration: none;
  /* identical to box height, or 150% */

  font-feature-settings: "pnum" on, "lnum" on, "case" on;
  color: #242424;
  position: static;
  z-index: 2;
  display: block;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  @media (min-width: 300px) and (max-width: 45px) {
    margin-left: -6%;
    width:84%;
  }
  @media (min-width: 450px) and (max-width: ${mobileMax}px) {
    margin-left: -2%;
    width:84%;
  }
  @media (min-width: ${mobileMax}px) {
    margin-top: 0%;
  }
`;

const StyledLi = styled.li`
  @media (min-width: ${mobileMax}px) {
    margin-top: 3%;
  }
`;

const Offering = styled.section(
  ({ theme }) => `
  margin-left: 33%;
  margin-top: 4%;
  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    background: #e2dfdc;
    width: 100%;
    display: flex;
    margin-left: 0%;
    padding-top:2%;
    padding-bottom:2%;

  }
  @media (min-width: ${mobileMax}px) and (max-width: 1920px) {
    margin-top: ${theme.width * theme.percent}%;
    margin-left: 13%;
    padding: 10%;
    }
`
);

//Offering end

function Main(props: any) {
  const { width, height } = props;

  return (
    <>
      <MainImg />
      <MainArticle>
        <SectionFlex>
          <StyledPadding>
            <WhiteH1>
              {json.main.h1.split(" ").map((e: any, index: number) => {
                if (index < 3) return `${e} `;
                else if (index === 3)
                  return (
                    <>
                      <br />
                      {`${e} `}
                    </>
                  );
                else if (index === 4) return `${e}`;
                else return null;
              })}
              <OrangeH1>{json.main.h1.split(" ")[5]}</OrangeH1>
            </WhiteH1>
            <WhiteSmallLabel>{json.main.label}</WhiteSmallLabel>
          </StyledPadding>
        </SectionFlex>
        <Offering
          theme={{
            width: width,
            percent: percentageFunction(percentageArray, width),
          }}
        >
          <StyledImg
            src={width < mobileMax ? images.arrow2 : images.arrow}
            alt="arrow"
            width="auto"
            height="auto"
          />
          <StyledUl id="our_services">
            {json.main.what_we_offer.map((e: any, i: number) => {
              return (
                <StyledLi key={i}>
                  <OfferingA href={e.href}>
                    {e.text}
                  </OfferingA>
                </StyledLi>
              );
            })}{" "}
          </StyledUl>
        </Offering>
      </MainArticle>
      <Bdiv theme={width} />
      <FlexOne width={width} height={height} />
      <FlexTwo width={width} height={height} />
      <Bdiv2 theme={width} />
    </>
  );
}

export default Main;
