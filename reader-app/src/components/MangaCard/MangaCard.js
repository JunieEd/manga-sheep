import React, { useRef, useCallback, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Chip from "#src/components/chip";
import Image from "#src/components/Image";

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

  :hover {
    background-color: #c0c0c073;
  }
`;

const ChipC = styled(Chip)`
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 0.5rem;
  z-index: 1;
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
      <Link to={`/${manga.id}-${sanitizeTitle(manga.title)}`}>
        <div style={{ position: "relative" }}>
          <ChipC color={STATUS_COLOR[manga.status]} text={manga.status} />
          <Image src={imageSrc} />
        </div>
      </Link>

      <TitleWrapper>
        <Link to={`/${manga.id}-${sanitizeTitle(manga.title)}`}>{manga.title ? manga.title : "-"}</Link>
      </TitleWrapper>
      <div>{manga.hits}</div>
    </Wrapper>
  );
};

export default MangaCard;
