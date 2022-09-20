import { useState } from "react";
import styled from "styled-components";
import { photos } from "./photos";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { mobileMax } from "../responsiveness";
import "./css.css";

const OrangeOption = styled.option`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 143.2%;
  letter-spacing: 0.015em;
  font-feature-settings: "pnum" on, "lnum" on, "case" on;
  color: #f58310;
  border: none;
  background: none;
  padding: 5px;
`;

const OrangeDropdown = styled.select`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 143.2%;
  letter-spacing: 0.015em;
  font-feature-settings: "pnum" on, "lnum" on, "case" on;
  color: #f58310;
  border: none;
  background: none;

  @media (min-width: 1680px) {
    margin-left: 10%;
  }
`;
const StyledDropdownDiv = styled.div`
  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    margin-left: 4%;
    padding: 2%;
  }
`;
const BackgroundOfGallery = styled.div`
  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    background: #e2dfdc;
  }
  @media (min-width: 1200px) {
    z-index: 100;
    position: relative;
  }
  @media (min-width: 1200px)and (max-width: 1280px) {
    margin-top: -75%;
  }
  @media (min-width: 1280px) and (max-width: 1300px) {
    margin-top: -65%;
  }
  @media (min-width: 1300px) and (max-width: 1342px) {
    margin-top: -60%;
  }
  @media (min-width: 1342px) and (max-width: 1500px) {
    margin-top: -50%;
  }
  @media (min-width: 1500px) and (max-width: 1680px) {
    margin-top: -65%;
  }
  @media (min-width: 1680px) {
    margin-top: -35%;
  }
`;

const StyledCarousel = styled(Carousel)`
  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    width: 90%;
  }
  @media (min-width: ${mobileMax}px) and (max-width: 1920px) {
    width: 33%;
  }
`;

const StyledDiv = styled.div`
  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    display: flex;
    justify-content: center;
  }
  @media (min-width: ${mobileMax}px) and (max-width: 1920px) {
    display: flex;
    justify-content: center;
    grid-template-columns: 33% 33% 33%;
    width: 100%;
    gap: 1%;
  }
`;

const StyledImg = styled.img`
  @media (min-width: 300px) {
    max-height: 350px;
  }
  @media (min-width: 780px) {
    min-width: 400px;
    max-height: 400px;
  }
  @media (min-width: 1300px) {
    min-width: 584px;
    max-width: 584px;
    min-height: 400px;
    max-height: 400px;
  }
`;
const StyledImg2 = styled.img`
  @media (min-width: 300px) {
    width: 350px;
  }
  @media (min-width: 780px) {
    min-width: 400px;
    max-height: 400px;
  }
  @media (min-width: 1300px) {
    min-width: 584px;
    max-width: 584px;
    height: 400px;
    max-height: 400px;
  }
`;

const arrayOfButtons = [
  { label: "Bežné a atipické klampiarske práce", number: 0 },
  { label: "Hydroizolacie", number: 1 },
  { label: "Pokládky rôznych krytín", number: 3 },
  { label: "Stavba krovov", number: 4 },
  { label: "Strešné okná", number: 5 },
  { label: "Iné práce", number: 2 },
];

const Bdiv2 = styled.div(
  ({ theme }) => `
  @media (min-width: 300px) and (max-width: 450px){
    width: 0;
    height: 0;
    margin-top: -60%;
    border-bottom: ${theme / 1.9}px solid #32323f;
    border-left: ${theme * 0.962}px solid transparent;
  }
  @media (min-width: 450px) and (max-width: ${mobileMax}px){
    width: 0;
    height: 0;
    margin-top: -60%;
    border-bottom: ${theme / 1.9}px solid #32323f;
    border-left: ${theme * 0.97}px solid transparent;
  }
  @media (min-width: ${mobileMax}px) and (max-width: 1200px){
    width: 0;
    height: 0;
    margin-top: -30%;
    border-bottom: ${theme / 3}px solid #32323f;
    border-left: ${theme * 0.98}px solid transparent;
  }
`
);

function Gallery(props: any) {
  const [images, setImages] = useState(photos(0));
  const [current, setCurrent] = useState(0);

  const setValue = (number: number) => {
    setImages(photos(number));
    setCurrent(0);
  };

  return (
    <BackgroundOfGallery>
      <StyledDropdownDiv>
        <OrangeDropdown onChange={(e) => setValue(parseInt(e.target.value))}>
          {arrayOfButtons.map((button: any, index: number) => {
            return (
              <OrangeOption key={index} value={button.number}>
                {button.label}
              </OrangeOption>
            );
          })}
        </OrangeDropdown>
      </StyledDropdownDiv>
      <StyledDiv
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        {current > 0 && props.width > mobileMax ? (
          <StyledImg2
            src={images[current - 1].original}
            alt={images[current - 1].alt}
            width="100%"
            height="100%"
          />
        ) : null}
        <StyledCarousel
          dynamicHeight={true}
          showThumbs={false}
          emulateTouch={true}
          selectedItem={current}
          onChange={(index) => {
            setCurrent(index);
          }}
        >
          {images.map((e: any, index: number) => {
            return <StyledImg src={e.original} alt={e.alt} key={index} />;
          })}
        </StyledCarousel>
        {current < images.length - 1 && props.width > mobileMax ? (
          <StyledImg2
            src={images[current + 1].original}
            alt={images[current + 1].alt}
            width="100%"
            height="100%"
          />
        ) : null}
      </StyledDiv>
      <Bdiv2 theme={props.width} />
    </BackgroundOfGallery>
  );
}

export default Gallery;
