import json from "../../json/text.json";
import styled from "styled-components";
import image_header from "../../images/image_header.svg";
import house1 from "../../images/house1.png";
import house1_small from "../../images/house1_small.svg";
import house2 from "../../images/house2.png";
import house2_small from "../../images/house2_small.svg";
import arrow from "../../images/arrow.svg";
import arrow2 from "../../images/arrow2.svg";
import strecha from "../../images/strecha.svg";

const StyledImg = styled.img`
  position: absolute;
  z-index: 10;
  margin-top: 1.5%;
  @media (min-width: 300px) AND (max-width: 430px) {
    position: static;
  }
`;
const MainSectionOne = styled.div`
  height: 100%;
  width: 100%;
  @media (min-width: 300px) and (max-width: 430px) {
    margin-top: 0;
    padding: 10px 10px;
  }
`;

const MainImg = styled.div`
  background: url(${image_header}) no-repeat;
  height: 100%;
  width: 100%;

  @media (min-width: 300px) and (max-width: 430px) {
    position: static;
    background: url(${strecha}) no-repeat;
    width: 414px;
    height: 253px;
  }
  @media (min-width: 600px) {
    position: absolute;
    z-index: 11;
  }
`;

const Flex = styled.div`
  @media (min-width: 300px) and (max-width: 430px) {
    width: 90%;
    position: static;
    z-index: 10;
  }

  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    position: absolute;
    top: 80%;
    left: 27.5%;
    transform: translate(-50%, -50%);
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

  @media (min-width: 300px) and (max-width: 600px) {
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

const MainBackground = styled.article`
  @media (min-width: 300px) and (max-width:600px){
    background: #e2dfdc;
  }
  @media (min-width: 600px) {
    margin-top: 1%;
    z-index: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Bdiv = styled.div`
  @media (min-width: 600px) {
    width: 0;
    height: 0;
    border-top: 1605px solid #32323f;
    border-right: 1050px solid transparent;
    margin-top: -2.5%;
  }
`;

const Bdiv2 = styled.div`
  @media (min-width: 600px) {
    width: 0;
    height: 0;
    border-bottom: 1600px solid #32323f;
    border-left: 1900px solid transparent;
  }
`;

const Offering = styled.section`
  margin-left: 33%;
  margin-top: 4%;
  @media (min-width: 300px) and (max-width: 600px) {
    display: flex;
    width: 80%;
    margin-left: 8%;
  }
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
  @media (min-width: 600px) {
   margin-top:80%;
  }
`;

const DarkBlueImg = styled.section`
  @media (min-width: 300px) and (max-width: 600px) {
    position: static;
  }
  @media (min-width: 600px) {
    width: 595px;
    background: #32323f;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  }
`;
const DarkBlueImg2 = styled.section`
  background: #32323f;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  @media (min-width: 600px) {
    width: 595px;
    margin-left: 29%;
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
  @media (min-width: 300px) {
    position: static;
  }
  @media (min-width: 600px) {
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    top: 170%;
    left: 50%;
    margin-right: -30%;
    transform: translate(-50%, -50%);
  }
`;

const FlexArticle2 = styled(FlexArticle)`
  @media (min-width: 300px) and (max-width: 600px) {
    background: #e2dfdc;
    display: flex ;
    flex-direction: column-reverse;
    margin-top: -4%;
  }
  @media (min-width: 600px) {
    top: 290%;
  }
`;
const StyledSectionRight = styled.section`
  @media (min-width: 300px) and (max-width: 600px) {
    background: #e2dfdc;
  }
  @media (min-width: 600px) {
    background: none;
    top: 290%;
    margin-left: 20%;
  }
`;
const StyledSectionLeft = styled.section`
  @media (min-width: 600px) {
    width: 30%;
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
  @media (min-width: 300px) and (max-width: 600px) {
    font-weight: 400;
    font-size: 32px;
    line-height: 124.7%;
  }
`;

const StyledH2Right = styled(StyledH2)`
  text-align: right;
  @media (min-width: 300px) and (max-width: 600px) {
    text-align: left;
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
`;

const OrangeLine = styled.div(
  ({ theme }) => `
  height: ${theme * 3}%;
  width: 0.001px;
  margin-left: -12%;
  margin-top: 2.5%;
  border: 1px solid #F58310;
  background: #F58310;
  position: absolute;
`
);

const OrangeLine2 = styled.div(
  ({ theme }) => `
  height: ${theme * 3}%;
  width: 0.001px;
  margin-top: 4.5%;
  border: 1px solid #F58310;
  background: #F58310;
  position: absolute;
`
);

const OrangeLineRight = styled(OrangeLine)`
  margin-left: 38.5%;
  margin-top: -28%;
`;
const OrangeLineRight2 = styled(OrangeLine)`
  margin-left: 47%;
  margin-top: -16%;
`;

const OfferDivLeft = styled.div`
  width: 80%;
  margin-left: -24%;
  @media (min-width: 300px) and (max-width: 600px) {
    margin-left: 10%;
  }
`;

const OfferDivRight = styled.div`
  @media (min-width: 600px) {
    margin-right: -50%;
    margin-left: 24%;
  }
`;

const OfferDivRight2 = styled.div`
  @media (min-width: 600px) {
    margin-left: 6%;
  }
`;
const OfferDivRight3 = styled.div`
  width: 80%;
  margin-left: 10%;
`;

function Main() {
  return (
    <>
      <MainImg />
      <MainSectionOne>
        <Flex>
          <div>
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
          </div>
        </Flex>
      </MainSectionOne>
      <MainBackground>
        <section>
          <Bdiv />
          <Bdiv2 />
        </section>
        <Offering>
          <StyledImg src={window.innerWidth < 600 ? arrow2 : arrow} alt="arrow" width="auto" height="auto" />
          <StyledUl>
            {json.main.what_we_offer.map((e: any, i: number) => {
              return (
                <li key={i}>
                  <OfferingA href={e.href} key={i}>
                    {e.text}
                  </OfferingA>
                </li>
              );
            })}{" "}
          </StyledUl>
        </Offering>
      </MainBackground>
      <FlexArticle>
        <DarkBlueImg>
          <img
            src={window.innerWidth < 600 ? house1_small : house1}
            alt="house1"
            width="auto"
            height="100%"
          />
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
                  <OrangeLine theme={i === 0 ? 9.2 : 8} />
                  <OfferDivLeft key={i}>
                    <StyledH2> {e.label}</StyledH2>
                    <StyledP> {e.text}</StyledP>
                  </OfferDivLeft>
                </>
              );
            else if (i === 1)
              return (
                <>
                  <OfferDivRight3 key={i}>
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
                  </OfferDivRight3>
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
                  <OrangeLine2 theme={i === 5 ? 9.5 : countOfSymbols} /> 
                  <OfferDivRight2 key={i}>
                    <StyledH2> {e.label}</StyledH2>
                    <StyledP> {e.text}</StyledP>
                  </OfferDivRight2>
                </>
              );
            else if (i === 4)
              return (
                <>
                  <OfferDivRight key={i}>
                    <StyledH2Right> {e.label}</StyledH2Right>
                    <StyledP> {e.text}</StyledP>
                  </OfferDivRight>
                  <OrangeLineRight2 theme={countOfSymbols} /> 
                </>
              );
            else return null;
          })}
        </StyledSectionLeft>
        <DarkBlueImg2>
          <img
            src={window.innerWidth < 600 ? house2_small : house2}
            alt="house2"
            width="auto"
            height="100%"
          />
          <WhiteSmallText>{json.main.pictures_label[1]}</WhiteSmallText>
        </DarkBlueImg2>
      </FlexArticle2>
    </>
  );
}

export default Main;
