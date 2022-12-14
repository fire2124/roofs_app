import json from "../../json/text.json";
import styled from "styled-components";
import images from "../images";
import { mobileMax, FlexOneResponsiveness } from "../responsiveness";
import { percent } from "../../services/helper";

const FlexArticle = styled.article(
  ({ theme }) => `
  position: relative;
  z-index: 2;

  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    padding-bottom: 4%;
  }

  @media (min-width: ${mobileMax}px)  {
    display: grid;
    grid-template-columns: 52.5% 47.5%;
    grid-template-rows: 50% 50%;
    padding: 2% 2% 5% 2%;
    position: static;
  }
  @media (min-width: 1115px)  {
    grid-template-columns: 53.5% 46.5%;
  }

  @media (min-width: 1300px)  {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    padding: 2% 2% 5% 2%;
    position: static;
  }
  @media (min-width: ${theme.px}px) {
    margin-top: -${theme.percent}%;
  }

  @media (min-width: 1300px) {
    grid-template-rows: 28% 38%;
  }

   @media (min-width: 1336px) {
    position: relative; 
    grid-template-rows: 27% 36% 33%;

  }

  @media (min-width: 1410px) {
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 2% 2% 5% 2%;
    z-index: 2;
    align-items: center;
  }
`
);

const ImageDiv = styled.section`
  @media (min-width: ${mobileMax}px) and (max-width: 1000px) {
    width: 100%;
    height: 100%;
    margin-top: 9%;
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 1;
    grid-column-end: 1;
  }
  @media (min-width: 1300px) {
    width: 90%;
    height: 100%;
    margin-top: 20%;
    grid-row-start: 1;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 1;
  }
  @media (min-width: 1600px) {
    margin-left: 14%;
    margin-top: 18%;
  }
`;

const DarkBlueImg = styled.div`
  background: #32323f;

  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    position: static;
  }

  @media (min-width: ${mobileMax}px) {
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  }

  @media (min-width: 980px) and (max-width: 1700px) {
    width: 95%;
  }
  @media (min-width: 1701px) and (max-width: 1920px) {
    width: 80%;
  }
`;

const StyledImg = styled.img`
  @media (min-width: 300px) and (max-width: 1600px) {
    width: 100%;
  }
`;

const StyledOfferDiv = styled.section`
  display: flex;
  flex: 0 1 auto;
  height: 90%;
  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    background: #e2dfdc;
    /* padding: 12px 0 32px 0; */
  }
  @media (min-width: ${mobileMax}px) and (max-width: 1080px) {
    background: #e2dfdc;
    grid-column-start: 2 !important;
    padding: 12px 0 32px 0;
  }
  @media (min-width: 1080px) {
    padding: 0% 5% 0% 5%;
  }
  @media (min-width: 1336px) {
    width: 80%;
  }
  @media (min-width: 1536px) {
    width: 70%;
  }
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
      margin-left: 6%;
      margin-top: 5%;
      width: 1px;
      height: ${theme * 0.8}px;
    }
    @media (min-width: 1080px) and (max-width:1300px) {
      position: static;
      margin-left: 2%;
      margin-top: 5%;
      width: 1px;
      height: ${theme * 0.8}px;
    }
  `
);

const OrangeLine2 = styled(OrangeLine)`
  @media (min-width: ${mobileMax}px) and (max-width: 1300px) {
    display: none;
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

const OfferDivLeft = styled.div`
  @media (min-width: 300px) and (max-width: 1080px) {
    margin-left: 5%;
    width: 90%;
  }
  @media (min-width: ${mobileMax}px) {
    margin-left: 6%;
  }
`;

const OfferDivRight = styled.div`
  height: 100%;
  @media (min-width: 300px) and (max-width: 1080px) {
    margin-left: 5%;
    width: 90%;
  }
  @media (min-width: ${mobileMax}px) {
    margin-left: 6%;
  }
`;

const StyledOfferDiv2 = styled(StyledOfferDiv)`
  @media (min-width: ${mobileMax}px) and (max-width: 1300px) {
    grid-column-start: 1 !important;
    grid-row-start: 2;
  }
  @media (min-width: 1300px) {
    display: flex;
    flex-direction: row-reverse;
    margin-left: 15%;
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
  @media (min-width: ${mobileMax}px) and (max-width: 1095px) {
    font-size: 44px;
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

const StyledOfferDiv3 = styled(StyledOfferDiv)`
  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    padding-bottom: 4%;
  }
`;

export const FlexOne = (props: any) => {
  return (
    <FlexArticle
      theme={
        props.width < mobileMax
          ? props.width
          : percent(FlexOneResponsiveness, props.width)
      }
    >
      <ImageDiv
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        <DarkBlueImg>
          <StyledImg
            src={props.width < 1305 ? images.house1_small : images.house1}
            alt="house1"
            height="100%"
            width="100%"
          />
          <WhiteSmallText>{json.main.pictures_label[0]}</WhiteSmallText>
        </DarkBlueImg>
      </ImageDiv>
      {json.main.house_text.map((e: any, i: number) => {
        if (i === 0)
          return (
            <StyledOfferDiv id={e.href} key={i}>
              <OrangeLine
                theme={props.height[i]}
                data-aos="fade-down"
                data-aos-duration="3000"
                data-aos-once="true"
              />

              <OfferDivLeft>
                <StyledH2> {e.label}</StyledH2>
                <StyledP> {e.text}</StyledP>
              </OfferDivLeft>
            </StyledOfferDiv>
          );
        else if (i === 1)
          return (
            <StyledOfferDiv2 id={e.href} key={i}>
              <OrangeLine2
                theme={props.height[i]}
                data-aos="fade-down"
                data-aos-duration="3000"
                data-aos-once="true"
              />
              <OfferDivRight>
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
        else if (i === 2)
          return (
            <StyledOfferDiv3 id={e.href} key={i}>
              <OrangeLine
                theme={props.height[i]}
                data-aos="fade-down"
                data-aos-duration="3000"
                data-aos-once="true"
              />
              <OfferDivLeft>
                <StyledH2> {e.label}</StyledH2>
                <StyledP> {e.text}</StyledP>
              </OfferDivLeft>
            </StyledOfferDiv3>
          );
        else return null;
      })}{" "}
    </FlexArticle>
  );
};
