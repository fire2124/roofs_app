import json from "../../json/text.json";
import styled from "styled-components";
import images from "../images";
import { mobileMax, percentageArray } from "../responsiveness";
import { percentageFunction } from "../../services/helper";

const FlexArticle = styled.article(
  ({ theme }) => `
  position: relative;
  z-index: 2;

  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    background: #e2dfdc;
    display: flex;
    flex-direction: column-reverse;
    margin-top: -4%;
  }

  @media (min-width: ${mobileMax}px)  {
    flex-direction: column-reverse;

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
    grid-template-rows: 22%  20% 33%;

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
    padding: 12px 0 32px 0;
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
    width:80%;
    height:100%;

  }
  @media (min-width: 1536px) {
    width:70%;
    height:100%;
    margin-left:15%;
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
    margin-left: 10%;
  }
  @media (min-width: 1500px) {
    margin-left: 12% !important;
  }
  @media (min-width: 1600px) {
    margin-left: 25%  !important;
  }
`;

const ImageDiv = styled.section`
  @media (min-width: ${mobileMax}px) and (max-width: 1000px) {
    width: 100%;
    height: 100%;
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 1;
    grid-column-end: 1;
  }
  @media (min-width: 1300px) {
    width: 90%;
    height: 100%;
    margin-top:20%;
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 2;
  }
  @media (min-width: 1600px) {
    margin-left: 14%;
    margin-top:18%;

  }
`;

const OrangeLine2 = styled(OrangeLine)`
  @media (min-width: ${mobileMax}px) and (max-width: 1300px) {
    display: none;
  }
`;

export const FlexTwo = (props: any) => {
  return (
    <FlexArticle>
      {json.main.house_text.map((e: any, i: number) => {
        if (i === 3 || i === 5)
          return (
            <StyledOfferDiv id={e.href}>
              <OrangeLine theme={props.height[i]} />
              <OfferDivLeft key={i}>
                <StyledH2> {e.label}</StyledH2>
                <StyledP> {e.text}</StyledP>
              </OfferDivLeft>
            </StyledOfferDiv>
          );
        else if (i === 4)
          return (
            <StyledOfferDiv2 id={e.href}>
              <OrangeLine2 theme={props.height[i]} />
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
      <ImageDiv>
        <DarkBlueImg>
          <StyledImg
            src={props.width < 1305 ? images.house2_small : images.house2}
            alt="house2"
            width="100%"
            height="100%"
          />
          <WhiteSmallText>{json.main.pictures_label[1]}</WhiteSmallText>
        </DarkBlueImg>
      </ImageDiv>
    </FlexArticle>
  );
};
