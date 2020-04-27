import React from "react";
import styled from "styled-components";

import "./Placeholder.css";

const Wrapper = styled.div`
  border-radius: calc(7px + 0.1vw);
  min-width: 50px;
  padding: calc(5px + 0.2vw);
  position: relative;
  margin-bottom: calc(10px + 0.5vw);
`;

const ImageContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 150%;
`;

const TitleWrapper = styled.div`
  margin-top: 5px;
  height: calc(7px + 0.5vw);
  width: 75%;
`;

const PlaceHolder = styled.div`
  border-radius: calc(5px + 0.1vw) calc(5px + 0.1vw) 0 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PHMangaCard = ({ className }) => {
  return (
    <Wrapper className={className + " placeload"}>
      <ImageContainer>
        <PlaceHolder className="loads" />
      </ImageContainer>

      <TitleWrapper className="loads"></TitleWrapper>
    </Wrapper>
  );
};

export default PHMangaCard;
