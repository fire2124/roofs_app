import { useState } from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { mobileMax } from "../responsiveness";
import ArrowRight from "../../assets/arrow_right.svg";
import ArrowLeft from "../../assets/arrow_left.svg";
import { photos } from "./photos";
import { getImages } from "../../services/helper";

const StyledDivUp = styled.div`
  display: grid;
  justify-items: center;
`;
const StyledDiv = styled.div`
  display: flex;
`;
const StyledGallery = styled.div`
  width: 800px;
  height: 800px;
`;

const StyledArrowLeft = styled.img`
  display: block;
  color: white;
  position: absolute;
  justify-items: start;
  margin-top: 25%;
  width: 60px;
  height: 52px;
  :hover {
    border: 2px solid #f58310;
  }
`;
const StyledArrowRight = styled.img`
  display: block;
  color: white;
  position: absolute;
  align-content: center;
  margin-left: 72%;
  margin-top: 25%;
  width: 60px;
  height: 52px;
  :hover {
    border: 2px solid #f58310;
  }
`;

const StyledSmallPics = styled.div`
  display: flex;
  margin-top: -15%;
  margin-left: -10%;
`;

const StyledH3 = styled.h3`
  position: absolute;
  background: #32323f;
  font-family: "Arya";
  color: white;
  margin-left: 71%;
  padding: 0px 5px 0px 5px;
`;

const StyledImg = styled.img`
  border: 2px solid #f69532;
`;

const arrayOfButtons = [
  { label: "Bežné a atipické klampiarske práce", number: 0 },
  { label: "Hydroizolacie", number: 1 },
  { label: "Pokládky rôznych krytín", number: 3 },
  { label: "Stavba krovov", number: 4 },
  { label: "Strešné okná", number: 5 },
  { label: "Iné práce", number: 2 },
];

function Gallery(props: any) {
  const [current, setCurrent] = useState(0);
  const { width } = props;
  const [images, setImages] = useState(photos(0));
  const [length, setLength] = useState(images ? images : ([].length as any));

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const setValue = (number: number) => {
    setImages(photos(number));
    setCurrent(0);
  };

  const object = getImages(
    current,
    images,
    width >= 1600 ? 7 : width >= 1200 ? 5 : 3
  )

  return (
    <>
      {arrayOfButtons.map((button: any) => {
        return (
          <button onClick={() => setValue(button.number)}>
            {button.label}
          </button>
        );
      })}

      <StyledDivUp>
        <StyledDiv>
          {current + 1 > 1 ? (
            <StyledArrowLeft
              src={ArrowLeft}
              alt={"ArrowLeft"}
              onClick={prevSlide}
            />
          ) : null}
          <StyledGallery>
            {images !== null
              ? images.map((slide: any, index: number) => {
                  return (
                    <div key={index}>
                      {index === current && (
                        <img
                          src={slide.original}
                          alt={"alt"}
                          width="872px"
                          height="597px"
                        />
                      )}
                    </div>
                  );
                })
              : null}
          </StyledGallery>
          <StyledH3>
            {current + 1} / {images ? images.length : null}
          </StyledH3>
          {images && current + 1 < images.length ? (
            <StyledArrowRight
              src={ArrowRight}
              alt={"ArrowRight"}
              onClick={nextSlide}
            />
          ) : null}
        </StyledDiv>
        {width <= mobileMax ? null : (
          <StyledSmallPics>
            {object &&
              object.together.map((slide: any, index: number) => {
                return (
                  <div key={index}>
                    {index === object.current ? (
                      <StyledImg
                        src={slide.original}
                        alt={slide.alt}
                        width="160px"
                        height="110px"
                        onClick={() => setCurrent(index)}
                      />
                    ) : (
                      <img
                        src={slide.original}
                        alt={slide.alt}
                        width="160px"
                        height="110px"
                        onClick={() => setCurrent(index)}
                      />
                    )}
                  </div>
                );
              })}
          </StyledSmallPics>
        )}
      </StyledDivUp>
    </>
  );
}

export default Gallery;
