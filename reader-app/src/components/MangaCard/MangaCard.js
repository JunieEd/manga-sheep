import React, { useRef, useCallback, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Chip2 } from "#src/components/chip";
import Image from "#src/components/Image";
import { ButtonBookmarkWithBG as BookmarkedButton } from "#src/components/Button";

const STATUS_COLOR = {
  Completed: "green",
  Ongoing: "blue",
  Suspended: "red",
};

const Wrapper = styled.div`
  border-radius: calc(7px + 0.1vw);
  min-width: 50px;
  padding: calc(5px + 0.2vw);
  position: relative;
  margin-bottom: calc(10px + 0.5vw);

  overflow: hidden;

  :hover {
    background-color: #c0c0c073;
  }
`;

const SubWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: calc(3px + 0.1vw);
`;

const ChipC = styled(Chip2)`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.5rem;
  z-index: 1;

  @media only screen and (min-width: 768px) {
    font-size: 0.6rem;
  }
`;

const TitleWrapper = styled.div`
  margin-top: 5px;
  ${"" /* background-color: #ff0000d1; */}
  padding: 0.3rem 0.2rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${"" /* justify-content: center; */}

  a {
    ${"" /* text-align: center; */}
    color: #22222;
    font-size: 16px;
    font-size: 1rem;
    font-weight: 600;
    line-height: 19px;
    display: inline-block;
    display: -webkit-box;
    max-height: 38px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    margin-bottom: 2px;
    position: relative;
  }
`;

const DarkGradient = styled.div`
  background-image: linear-gradient(to top, rgba(255, 0, 0, 0), #0000009e);
  height: calc(30px + 1vw);
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: calc(3px + 0.1vw) calc(3px + 0.1vw);
`;

const MangaCard = ({ className, manga }) => {
  const sanitizeTitle = (title) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-{2,}/g, "-");

  const imageSrc =
    manga.image.match(/\/([^\/]+)[\/]?$/)[1] != "null"
      ? manga.image
      : `https://s3.zerochan.net/Touwa.Erio.240.620278.jpg`;

  return (
    <Wrapper className={className + " effect-bgc"}>
      <SubWrapper>
        <ChipC color={STATUS_COLOR[manga.status]} text={manga.status} />

        <BookmarkedButton manga={manga} />

        <Link to={`/${manga.id}-${sanitizeTitle(manga.title)}`}>
          <div style={{ position: "relative" }}>
            <Image src={imageSrc} />
            <DarkGradient />
          </div>
        </Link>

        <TitleWrapper>
          <Link to={`/${manga.id}-${sanitizeTitle(manga.title)}`}>{manga.title ? manga.title : "-"}</Link>
        </TitleWrapper>
      </SubWrapper>
    </Wrapper>
  );
};

export default MangaCard;
