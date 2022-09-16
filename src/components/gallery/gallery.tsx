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

const BackgroundOfGallery = styled.div`
  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    background: #e2dfdc;
  }
  @media (min-width: 1200px) {
    margin-top: -100%;
    z-index: 100;
    position: relative;
  }
  @media (min-width: 1200px) {
    margin-top: -100%;
  }
  @media (min-width: 1280px) {
    margin-top: -80%;
  }
  @media (min-width: 1380px) and (max-width: 1679px) {
    margin-top: -70%;
  }
  @media (min-width: 1680px) {
    margin-top: -55%;
  }
`;

const StyledCarousel = styled(Carousel)`
  width: 70%;
  @media (min-width: 1580px) {
    width: 50%;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1%;
`;

const StyledImg = styled.img`
  @media (min-width: 300px) {
    max-height: 350px;
  }
  @media (min-width: 780px) {
    max-height: 550px;
  }
  @media (min-width: 1300px) {
    height: 750px;
    max-height: 750px;
  }
`;
const StyledImg2 = styled.img`
  @media (min-width: 300px) {
    max-height: 350px;
  }
  @media (min-width: 780px) {
    max-height: 550px;
  }
  @media (min-width: 1300px) {
    width: 30%;
    height: 750px;
    max-height: 750px;
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
  @media (min-width: 300px) and (max-width:  ${mobileMax}px){
    width: 0;
    height: 0;
    margin-top: -30%;
    border-bottom: ${theme / 3}px solid #32323f;
    border-left: ${theme * 0.97}px solid transparent;
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
      <OrangeDropdown onChange={(e) => setValue(parseInt(e.target.value))}>
        {arrayOfButtons.map((button: any) => {
          return (
            <OrangeOption value={button.number}>{button.label}</OrangeOption>
          );
        })}
      </OrangeDropdown>
      <StyledDiv>
        {current > 0 && props.width > mobileMax ? (
          <StyledImg2
            src={images[current - 1].original}
            alt={images[current - 1].alt}
          />
        ) : null}
        <StyledCarousel
          dynamicHeight={true}
          showThumbs={false}
          emulateTouch={true}
          onChange={(index) => {
            setCurrent(index);
          }}
        >
          {images.map((e: any) => {
            return (
              <div key={e.key}>
                <StyledImg src={e.original} alt={e.alt} />
              </div>
            );
          })}
        </StyledCarousel>
        {current < images.length - 1 && props.width > mobileMax ? (
          <StyledImg2
            src={images[current + 1].original}
            alt={images[current + 1].alt}
          />
        ) : null}
      </StyledDiv>
      <Bdiv2 theme={props.width} />
    </BackgroundOfGallery>
  );
}

export default Gallery;
