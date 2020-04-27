import React from "react";
import styled from "styled-components";

import { MangaCard, MangaCardV2 } from "#src/components/MangaCard";
import { PHMangaCard, PHMangaCardV2 } from "#src/components/Placeholder";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: initial;
  content-align: center;
`;

const StyledMangaCardDefault = styled(MangaCard)`
  width: 33.33%;

  @media only screen and (min-width: 576px) {
    width: 16.66%;
  }
`;

const PHStyledMangaCardDefault = styled(PHMangaCard)`
  width: 33.33%;

  @media only screen and (min-width: 576px) {
    width: 16.66%;
  }
`;

const StyledMangaCardVertical = styled(MangaCardV2)`
  width: 100%;

  @media only screen and (min-width: 400px) {
    width: 50%;
  }
  @media only screen and (min-width: 992px) {
    width: 100%;
  }
`;

const PHStyledMangaCardVertical = styled(PHMangaCardV2)`
  width: 100%;

  @media only screen and (min-width: 400px) {
    width: 50%;
  }
  @media only screen and (min-width: 992px) {
    width: 100%;
  }
`;

const MangaGrid = ({ noOfMangas = 0, loading, mangas, variant = "horizontal" }) => {
  let StyledMangaCard = StyledMangaCardDefault;
  let PHStyledMangaCard = PHStyledMangaCardDefault;

  switch (variant.toLowerCase()) {
    case "vertical":
      StyledMangaCard = StyledMangaCardVertical;
      PHStyledMangaCard = PHStyledMangaCardVertical;
      break;
    default:
      break;
  }

  return (
    <Wrapper>
      {!loading && mangas
        ? mangas.map((manga, index) => <StyledMangaCard key={manga.id} manga={manga} top={index + 1} />)
        : [...Array(noOfMangas)].map((value, index) => <PHStyledMangaCard key={index} />)}
    </Wrapper>
  );
};

export default MangaGrid;
