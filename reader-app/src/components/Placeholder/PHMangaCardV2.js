import React from "react";
import styled from "styled-components";

import "./Placeholder.css";

const Wrapper = styled.div`
  display: flex;
  border-radius: calc(7px + 0.1vw);
  min-width: 50px;
  padding: calc(5px + 0.2vw);
  position: relative;
  margin-bottom: calc(10px + 0.5vw);
`;
const ImageContainerx = styled.div`
  width: 100px;
  float: left;
`;

const ImageContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 150%;
`;
const MangaInfoContainer = styled.div`
  flex: 1;
  padding: 0 calc(10px + 0.5vw);
`;

const TitleWrapper = styled.div`
  margin-top: 5px;
  height: calc(7px + 0.3vw);
`;

const Status = styled.div`
  margin-top: 5px;
  height: calc(7px + 0.3vw);
  width: 50%;
`;

const PlaceHolder = styled.div`
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

const PHMangaCardV2 = ({ className }) => {
  return (
    <Wrapper className={className + " placeload"}>
      <ImageContainerx>
        <ImageContainer>
          <PlaceHolder className="loads" />
        </ImageContainer>
      </ImageContainerx>
      <MangaInfoContainer>
        <TitleWrapper className="loads" />
        <Status className="loads" />
      </MangaInfoContainer>
    </Wrapper>
  );
};

export default PHMangaCardV2;
