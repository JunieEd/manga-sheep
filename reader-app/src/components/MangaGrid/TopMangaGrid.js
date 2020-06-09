import React, { useState } from "react";
import styled from "styled-components";

import { MangaCardV2 } from "#src/components/MangaCard";
import { PHMangaCardV2 } from "#src/components/Placeholder";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: initial;
`;

const StyledMangaCardVertical = styled(MangaCardV2)`
  width: 100%;

  @media only screen and (min-width: 400px) {
    width: 50%;
  }
  @media only screen and (min-width: 1025px) {
    width: 100%;
  }
`;

const PHStyledMangaCardVertical = styled(PHMangaCardV2)`
  width: 100%;

  @media only screen and (min-width: 400px) {
    width: 50%;
  }
  @media only screen and (min-width: 1025px) {
    width: 100%;
  }
`;

const NoMangaFoundWrapper = styled.div`
  height: calc(200px + 2vh);
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

const TOP_COUNT = 10;

const TopMangaGrid = ({ loading = false, mangas = [] }) => {
  return (
    <Wrapper>
      {!loading && mangas
        ? mangas.map((manga, index) => <StyledMangaCardVertical key={manga.id} manga={manga} top={index + 1} />)
        : [...Array(TOP_COUNT)].map((value, index) => <PHStyledMangaCardVertical key={index} />)}

      {!loading && mangas && mangas.length == 0 && (
        <NoMangaFoundWrapper>
          <span>No manga found.</span>
        </NoMangaFoundWrapper>
      )}
    </Wrapper>
  );
};

export default TopMangaGrid;
