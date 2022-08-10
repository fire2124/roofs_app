import json from "../../json/text.json";
import styled from "styled-components";
import image_header from "../../images/image_header.png";
import house1 from "../../images/house1.png";
import house2 from "../../images/house2.png";
import rect from "../../images/Rectangle 14.png";

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
  left: 33%;
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
`;

const WhiteMainImg = styled.img`
  position: absolute;
  z-index: 1;
  width: 1440px;
  height: 3250.5px;
  left: 239px;
  top: 59%;
`;

const Bdiv = styled.div`
  position: absolute;
  width: 252px;
  height: 1880px;
  left: 1669px;
  top: 59%;
  background: #e2dfdc;
`;

const Bdiv0 = styled.div`
  position: absolute;
  width: 239px;
  height: 1845.5px;
  top: 1950px;
  background: #e2dfdc;
  transform: rotate(-180deg);
`;

const Offering = styled.section`
  margin-left: 10%;
  margin-top: 4%;
`;

const OfferingP = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  font-feature-settings: "case" on;
  color: #242424;
  position: relative;
  z-index: 2;
  left: 60%;
`;

const DarkBlueImg = styled.section`
  width: 595px;
  background: #32323f;
`;
const DarkBlueImg2 = styled.section`
  width: 595px;
  background: #32323f;
  margin-left: 29%;
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
`;

const FlexArticle = styled.article`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 2 ;
  top: 180%;
  left: 50%;
  margin-right: -30%;
  transform: translate(-50%, -50%) }
`;

const FlexArticle2 = styled(FlexArticle)`
  top: 300%;
`
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

function Main() {
  return (
    <>
      <MainSectionOne>
        <MainImg src={image_header} alt="header_image" />
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
          {json.main.what_we_offer.map((e: string, i: number) => {
            return <OfferingP key={i}>{e}</OfferingP>;
          })}{" "}
        </Offering>
      </MainBackground>
      <FlexArticle>
        <DarkBlueImg>
          <img src={house1} alt="house1" />
          <WhiteSmallText>{json.main.pictures_label[0]}</WhiteSmallText>
        </DarkBlueImg>
        <StyledSectionRight>
          {json.main.house_text.map((e: any, i: number) => {
            if (i < 3)
              return (
                <div key={i}>
                  <StyledH2> {e.label}</StyledH2>
                  <StyledP> {e.text}</StyledP>
                </div>
              );
            else return null;
          })}{" "}
        </StyledSectionRight>
      </FlexArticle>
      <FlexArticle2>
        <StyledSectionLeft>
          {json.main.house_text.map((e: any, i: number) => {
            if (i >= 3)
              return (
                <div key={i}>
                <StyledH2> {e.label}</StyledH2>
                <StyledP> {e.text}</StyledP>
              </div>
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
