import json from "../../json/text.json";
import styled from "styled-components";
import image_header from "../../images/image_header.png";
import house1 from "../../images/house1.png";
import house2 from "../../images/house2.png";
import rect from "../../images/Rectangle 14.png";
import arrow from "../../images/arrow.svg";

const StyledImg = styled.img`
  position: absolute;
  z-index: 10;
  margin-top: 1.5%;
`;
const MainSectionOne = styled.div`
  height: 100%;
  width: 100%;
`;

const MainImg = styled.img`
  height: 100%;
  width: 100%;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 80%;
  left: 27.5%;
  transform: translate(-50%, -50%);
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

const MainBackground = styled.article`
  margin-top: 1%;
  z-index: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;

const WhiteMainImg = styled.img`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 3250.5px;
  top: 57.5%;
`;

const Bdiv = styled.div`
  position: absolute;
  width: 234px;
  height: 1880px;
  left: 1669px;
  top: 59%;
  background: #e2dfdc;
  @media (min-width: 1200px) and (max-width: 1920px) {
    display: none;
  }
`;

const Bdiv0 = styled.div`
  position: absolute;
  width: 239px;
  height: 1845.5px;
  top: 1950px;
  background: #e2dfdc;
  transform: rotate(-180deg);
  @media (min-width: 1200px) and (max-width: 1920px) {
    display: none;
  }
`;

const Offering = styled.section`
  margin-left: 33%;
  margin-top: 4%;
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
  position: relative;
  z-index: 2;
`;

const StyledUl = styled.ul`
  list-style-type: none;
`;

const DarkBlueImg = styled.section`
  width: 595px;
  background: #32323f;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
`;
const DarkBlueImg2 = styled.section`
  width: 595px;
  background: #32323f;
  margin-left: 29%;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
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
`;

const FlexArticle = styled.article`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 2 ;
  top: 170%;
  left: 50%;
  margin-right: -30%;
  transform: translate(-50%, -50%) }
`;

const FlexArticle2 = styled(FlexArticle)`
  top: 290%;
`;
const StyledSectionRight = styled.section`
  margin-left: 20%;
`;
const StyledSectionLeft = styled.section`
  width: 30%;
`;
const StyledH2 = styled.h2`
  font-family: "Arya";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 104.2%;
  font-feature-settings: "pnum" on, "lnum" on, "case" on;
  color: #242424;
`;

const StyledH2Right = styled(StyledH2)`
  text-align: right;
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
`;

const OrangeLine = styled.div(
  ({ theme }) => `
  height: ${theme * 3}%;
  width: 0.001px;
  margin-left: -2%;
  margin-top: 4.5%;
  border: 1px solid #F58310;
  background: #F58310;
  position: absolute;
`
);

const OrangeLineRight = styled(OrangeLine)`
  margin-left: 42.5%;
  margin-top: -24%;
`;
const OrangeLineRight2 = styled(OrangeLine)`
  margin-left: 33.5%;
  margin-top: -16%;
`;

function Main() {
  return (
    <>
      <MainImg src={image_header} alt="header_image" />
      <MainSectionOne>
        <Flex>
          <div>
            <WhiteH1>
              {json.main.h1.split(" ").map((e, index) => {
                if (index < 3) return `${e} `;
                else if (index === 3)
                  return (
                    <>
                      <br />
                      {`${e} `}
                    </>
                  );
                else if (index === 4) return `${e}`;
              })}
              <OrangeH1>{json.main.h1.split(" ")[5]}</OrangeH1>
            </WhiteH1>
            <WhiteSmallLabel>{json.main.label}</WhiteSmallLabel>
          </div>
        </Flex>
      </MainSectionOne>
      <MainBackground>
        <section>
          <Bdiv0 />
          <WhiteMainImg src={rect} alt="rect" />
          <Bdiv />
        </section>
        <Offering>
          <StyledImg src={arrow} alt="arrow" />
          <StyledUl>
            {json.main.what_we_offer.map((e: any, i: number) => {
              return (
                <li key={i}>
                  <OfferingA href={e.href}>{e.text}</OfferingA>
                </li>
              );
            })}{" "}
          </StyledUl>
        </Offering>
      </MainBackground>
      <FlexArticle>
        <DarkBlueImg>
          <img src={house1} alt="house1" />
          <WhiteSmallText>{json.main.pictures_label[0]}</WhiteSmallText>
        </DarkBlueImg>
        <StyledSectionRight>
          {json.main.house_text.map((e: any, i: number) => {
            const countOfSymbols = e.text
              .split(".")
              .map((e: any) => {
                return e.split(",").length;
              })
              .reduce((a: number, b: number) => a + b, 0);
            if (i === 0 || i === 2)
              return (
                <>
                  <OrangeLine theme={countOfSymbols} />
                  <div key={i}>
                    <StyledH2> {e.label}</StyledH2>
                    <StyledP> {e.text}</StyledP>
                  </div>
                </>
              );
            else if (i === 1)
              return (
                <>
                  <div key={i}>
                    <StyledH2Right> {e.label}</StyledH2Right>
                    <StyledP> {e.text}</StyledP>
                  </div>
                  <OrangeLineRight theme={countOfSymbols} />
                </>
              );
            else return null;
          })}{" "}
        </StyledSectionRight>
      </FlexArticle>
      <FlexArticle2>
        <StyledSectionLeft>
          {json.main.house_text.map((e: any, i: number) => {
            const countOfSymbols = e.text
              .split(".")
              .map((e: any) => {
                return e.split(",").length;
              })
              .reduce((a: number, b: number) => a + b, 0);
            if (i === 3 || i === 5)
              return (
                <>
                  <OrangeLine theme={i === 5 ? 9.5 : countOfSymbols} />
                  <div key={i}>
                    <StyledH2> {e.label}</StyledH2>
                    <StyledP> {e.text}</StyledP>
                  </div>
                </>
              );
            else if (i === 4)
              return (
                <>
                  <div key={i}>
                    <StyledH2Right> {e.label}</StyledH2Right>
                    <StyledP> {e.text}</StyledP>
                  </div>
                  <OrangeLineRight2 theme={countOfSymbols} />
                </>
              );
            else return null;
          })}
        </StyledSectionLeft>
        <DarkBlueImg2>
          <img src={house2} alt="house2" />
          <WhiteSmallText>{json.main.pictures_label[1]}</WhiteSmallText>
        </DarkBlueImg2>
      </FlexArticle2>
    </>
  );
}

export default Main;
