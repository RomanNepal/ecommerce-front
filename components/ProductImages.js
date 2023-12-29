import { useState } from "react";
import styled, { css } from "styled-components";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const BigImage = styled.img`
  max-width: 100%;
  max-height: 200px;
`;
const BigImageWrapper = styled.div`
  text-align: center;
`;
const ImageButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  flex-grow: 0;
  margin-top: 10px;
`;
const ImageButton = styled.div`
  border: 2px solid #ccc;
  height: 40px;
  padding: 2px;
  cursor: pointer;
  border-radius: 5px;
  ${(props) =>
    props.active
      ? css`
          border-color: #ccc;
        `
      : css`
          border-color: transparent;
        `}
`;
export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  return (
    <>
      <BigImageWrapper>
        <BigImage src={activeImage} />
      </BigImageWrapper>
      <ImageButtons>
        {images.map((image) => (
          <ImageButton
            key={image}
            active={image === activeImage}
            onClick={() => setActiveImage(image)}
          >
            <Image src={image} alt=""></Image>
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}
