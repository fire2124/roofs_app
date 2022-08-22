import { useState, useEffect } from "react";
import json from "../../json/text.json";
import styled from "styled-components";
import images from "../images";
import { mobileMax, percentageArray } from "../responsiveness";
import { percentageFunction } from "../../services/helper";

const StyledImg = styled.img`
  position: absolute;
  z-index: 10;
  margin-top: 1.5%;
  @media (min-width: 300px) AND (max-width: ${mobileMax}px) {
    position: static;
    margin-left: 10%;
  }
`;
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
    height: 343px;
    width: 100%;
    position: static;
    background-position: 33% 237%;
    transform: scale(1, 1);
    z-index: 11;
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

const WhiteSmallLabel = styled.p`
  font-family: "Source Sans Pro";
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.015em;
  font-feature-settings: "pnum" on, "lnum" on, "case" on;
  color: #ffffff;
`;

const Bdiv = styled.div(
  ({ theme }) => `
  @media (min-width: ${mobileMax}px) and (max-width: 980px) {
    width: 0;
    height: 0;
    border-top: 1605px solid #32323f;
    border-right: ${theme * 0.723}px solid transparent;
    margin-top: -92.5%;
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
    border-right: ${theme * 0.77}px solid transparent;
    margin-top: -71%;
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
    width: 0;
    height: 0;
    margin-top:100%;
    border-top: 300px solid transparent;
    border-bottom: ${1900}px solid #32323f;
    border-left: ${theme * 0.838}px solid transparent;
  }
  @media (min-width: 1200px) {
    width: 0;
    height: 0;
    border-top: 300px solid transparent;
    border-bottom: ${1900}px solid #32323f;
    border-left: ${theme * 0.991}px solid transparent;
  }
`
);

const Offering = styled.section(
  ({ theme }) => `
  margin-left: 33%;
  margin-top: 4%;
  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    background: #e2dfdc;
    width: 100%;
    display: flex;
    margin-left: 0%;
  }
  @media (min-width: ${mobileMax}px) and (max-width: 1920px) {
    margin-top: ${theme.width * theme.percent}%;
    margin-left: 13%;
    padding: 10%;
    }
`
);

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
`;

const StyledUl = styled.ul`
  list-style-type: none;
  @media (min-width: ${mobileMax}px) {
    margin-top: 0%;
  }
`;

const StyledLi = styled.li`
  @media (min-width: ${mobileMax}px) {
    margin-top: 3%;
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
    padding-left: 22%;
  }
`;

const DarkBlueImg = styled.section`
  background: #32323f;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    position: static;
  }
  @media (min-width: ${mobileMax}px) and (max-width: 1000px) {
    width: 100%;
  }
  @media (min-width: 1000px) and (max-width: 900px) {
    width: 80%;
  }
`;

const DarkBlueImg2 = styled.section`
  background: #32323f;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  @media (min-width: ${mobileMax}px) {
    width: 595px;
  }
`;
const WhiteSmallText = styled.p`
  font-family: "Noto Sans";
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  font-feature-settings: "pnum" on, "lnum" on, "case" on, "ss01" on, "ss02" on,
    "ss03" on, "ss04" on, "ss05" on, "ss18" on, "ss19" on;
  color: #ffffff;
  z-index: 2;
  padding: 20px 33px 20px 50px;
  @media (min-width: 300px) {
    padding: 10px;
  }
`;

const FlexArticle = styled.article`
  position: static;
  z-index: 2;

  @media (min-width: ${mobileMax}px) and (max-width: 850px) {
    align-items: center;
    margin-top: -450%;
  }

  @media (min-width: 851px) and (max-width: 1095px) {
    align-items: center;
    margin-top: -75%;
  }

  @media (min-width: 1096px) and (max-width: 1600px) {
    align-items: center;
    margin-top: -75%;
  }

  @media (min-width: 1600px) {
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    margin-top: -35%;
    left: 50%;
    margin-right: -30%;
    transform: translate(-50%, -50%);
  }
`;

const FlexArticle2 = styled(FlexArticle)`
  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    background: #e2dfdc;
    display: flex;
    flex-direction: column-reverse;
    margin-top: -4%;
  }
  @media (min-width: 1600px) {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    margin-top: 50%;
    transform: translate(-50%, -50%);
  }

`;
const StyledSectionRight = styled.section`
  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    background: #e2dfdc;
    padding: 12px 0 32px 0;
  }
  @media (min-width: ${mobileMax}px) {
    background: none;
  }
  @media (min-width: ${mobileMax}px) and (max-width: 1000px) {
    width: 92%;
  }
`;
const StyledSectionLeft = styled.section`
  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    padding: 12px 0 32px 0;
  }

  @media (min-width: ${mobileMax}px) {
    width: 32%;
    padding-left: 18%;
  }
`;
const StyledH2 = styled.h2`
  font-family: "Arya";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 104.2%;
  font-feature-settings: "pnum" on, "lnum" on, "case" on;
  color: #242424;
  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    font-weight: 400;
    font-size: 32px;
    line-height: 124.7%;
  }
`;

const StyledH2Right = styled(StyledH2)`
  text-align: right;
  @media (min-width: 300px) and (max-width: 1080px) {
    text-align: left;
  }
  @media (min-width: 1080px) {
    padding: 0% 5% 0% 5%;
  }
`;

const StyledP = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  font-feature-settings: "pnum" on, "lnum" on, "case" on, "ss01" on, "ss02" on,
    "ss03" on, "ss04" on, "ss05" on, "ss18" on, "ss19" on;
  color: #000000;
  width: 95%;
`;

const OrangeLine = styled.div(
  ({ theme }) => `
  height: ${theme * 0.85}px;
  width: 0.001px;
  margin-top: 4%;
  border: 1px solid #F58310;
  background: #F58310;
  position: absolute;

 @media (min-width: 300px) and (max-width:1080px) {
    position: static;
    margin-left: 12%;
    margin-top: 8%;
    width: 1px;
    height: ${theme * 0.8}px;
  }
`
);

const OfferDivLeft = styled.div`
  @media (min-width: 300px) and (max-width: 1080px) {
    margin-left: 10%;
    width: 80%;
  }
  @media (min-width: ${mobileMax}px) {
    margin-left: 6%;
  }
`;

const OfferDivRight = styled.div`
  @media (min-width: 300px) and (max-width: 1080px) {
    width: 80%;
    margin-left: 10%;
  }
  @media (min-width: ${mobileMax}px) {
    margin-left: 6%;
  }
`;

const StyledOfferDiv = styled.div`
  display: flex;
  flex: 0 1 auto;
  @media (min-width: 1080px) {
    padding: 0% 5% 0% 5%;
  }
`;

const StyledImg2 = styled.img`
  @media (min-width: 300px) and (max-width: 1600px) {
    width: 100%;
  }
`;

const StyledOfferDiv2 = styled(StyledOfferDiv)`
  @media (min-width: 1080px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

function Main() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState([] as any);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    const value = json.main.house_text.map((e: any) => {
      const value =
        document.getElementById(e.href) !== undefined &&
        document.getElementById(e.href) !== null
          ? document.getElementById(e.href)
          : null;
      if (value !== null) {
        return value.clientHeight;
      } else return null;
    });
    setHeight(value);
  }, []);

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
                  <OfferingA href={e.href} key={i}>
                    {e.text}
                  </OfferingA>
                </StyledLi>
              );
            })}{" "}
          </StyledUl>
        </Offering>
      </MainArticle>
      <Bdiv theme={width} />
      <FlexArticle>
        <DarkBlueImg>
          <StyledImg2
            src={width < 1600 ? images.house1_small : images.house1}
            alt="house1"
            height="100%"
          />
          <WhiteSmallText>{json.main.pictures_label[0]}</WhiteSmallText>
        </DarkBlueImg>
        <StyledSectionRight>
          {json.main.house_text.map((e: any, i: number) => {
            if (i === 0 || i === 2)
              return (
                <StyledOfferDiv id={e.href}>
                  <OrangeLine theme={height[i]} />
                  <OfferDivLeft key={i}>
                    <StyledH2> {e.label}</StyledH2>
                    <StyledP> {e.text}</StyledP>
                  </OfferDivLeft>
                </StyledOfferDiv>
              );
            else if (i === 1)
              return (
                <StyledOfferDiv2 id={e.href}>
                  <OrangeLine theme={height[i]} />
                  <OfferDivRight key={i}>
                    <StyledH2Right>
                      {e.label.includes("<br/>") ? (
                        <>
                          {e.label.split("<br/>")[0]} <br />
                          {e.label.split("<br/>")[1]}
                        </>
                      ) : (
                        e.label
                      )}
                    </StyledH2Right>
                    <StyledP> {e.text}</StyledP>
                  </OfferDivRight>
                </StyledOfferDiv2>
              );
            else return null;
          })}{" "}
        </StyledSectionRight>
      </FlexArticle>
      {/* <FlexArticle2>
        <StyledSectionLeft>
          {json.main.house_text.map((e: any, i: number) => {
            if (i === 3 || i === 5)
              return (
                <StyledOfferDiv id={e.href}>
                  <OrangeLine theme={height[i]} />
                  <OfferDivLeft key={i}>
                    <StyledH2> {e.label}</StyledH2>
                    <StyledP> {e.text}</StyledP>
                  </OfferDivLeft>
                </StyledOfferDiv>
              );
            else if (i === 4)
              return (
                <StyledOfferDiv2 id={e.href}>
                  <OrangeLine theme={height[i]} />
                  <OfferDivRight key={i}>
                    <StyledH2Right>
                      {e.label.includes("<br/>") ? (
                        <>
                          {e.label.split("<br/>")[0]} <br />
                          {e.label.split("<br/>")[1]}
                        </>
                      ) : (
                        e.label
                      )}
                    </StyledH2Right>
                    <StyledP> {e.text}</StyledP>
                  </OfferDivRight>
                </StyledOfferDiv2>
              );
            else return null;
          })}
        </StyledSectionLeft>
        <DarkBlueImg2>
          <img
            src={width < mobileMax ? images.house2_small : images.house2}
            alt="house2"
            width="100%"
            height="100%"
          />
          <WhiteSmallText>{json.main.pictures_label[1]}</WhiteSmallText>
        </DarkBlueImg2>
      </FlexArticle2> */}
      <Bdiv2 theme={width} />
    </>
  );
}

export default Main;
