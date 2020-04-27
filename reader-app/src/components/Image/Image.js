import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 150%;
`;

const ImageStyled = styled.img`
  border-radius: calc(5px + 0.1vw) calc(5px + 0.1vw);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Image = ({ src }) => (
  <ImageContainer>
    <ImageStyled referrerPolicy="no-referrer" src={src} />
  </ImageContainer>
);

export default Image;
