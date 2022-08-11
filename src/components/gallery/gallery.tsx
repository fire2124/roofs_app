import ImageGallery from "react-image-gallery";
import { images } from "./items";
import styled from "styled-components";

const StyledGallery = styled.div`
  margin-top: 3000px;
`;

const StyledImg= styled.img`
  margin-top: 300px;
`;

const StyledImageGallery= styled(ImageGallery)`
  width:"800px";
`;

function Gallery() {
  return (
    <StyledGallery>
      {/* {images.map((e: any) => {
        return <StyledImg src={e.original} width="800px" alt={`${e.original}`} />;
      })} 

      <StyledImageGallery items={images} /> 
    */}
    </StyledGallery>
  );
}

export default Gallery;
