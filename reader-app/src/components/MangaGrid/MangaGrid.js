import React, { useState } from "react";
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

const ShowMore = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: calc(20px + 0.3vw);

  span {
    font-weight: 600;
    cursor: pointer;

    :hover {
      color: var(--global-red-color);
    }
  }
`;

const MangaGrid = ({ noOfMangas = 0, loading = false, mangas = [], variant = "horizontal", pagination = false }) => {
  const [isShowMore, setIsShowMore] = useState(true);
  const [mangaShowSize, setMangaShowSize] = useState(noOfMangas);

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

  const showMore = (x) => {
    let mangaPage = x ? noOfMangas + mangaShowSize : noOfMangas - mangaShowSize;
    setMangaShowSize(mangaPage);
    setIsShowMore(mangaPage < mangas.length);
  };

  return (
    <>
      <Wrapper>
        {!loading && mangas
          ? mangas
              .slice(0, mangaShowSize)
              .map((manga, index) => <StyledMangaCard key={manga.id} manga={manga} top={index + 1} />)
          : [...Array(noOfMangas)].map((value, index) => <PHStyledMangaCard key={index} />)}
      </Wrapper>
      {!loading && pagination && (
        <ShowMore>
          {isShowMore ? (
            <span onClick={() => showMore(true)}>Show More &#x25BC;</span>
          ) : (
            <span onClick={() => showMore(false)}>Show Less &#x25B2;</span>
          )}
        </ShowMore>
      )}
    </>
  );
};

export default MangaGrid;
