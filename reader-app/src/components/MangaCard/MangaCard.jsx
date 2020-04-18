import React, { useRef, useCallback, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import "./MangaCard.css";

import styled from "styled-components";
import Chip from "#src/components/chip";

const STATUS_COLOR = {
  Completed: "green",
  Ongoing: "blue",
  Suspended: "red"
};

const Wrapper = styled.div`
  border-radius: calc(7px + 0.1vw);
  min-width: 80px;
  padding: calc(3px + 0.1vw);
  position: relative;
 
  @media only screen and (min-width: 320px){
    min-width: 100px;
  }

  :hover{
    background-color: red;
  }

  > a {
    display: block;
    line-height: 0;
  
`;

const Image = styled.img`
  border-radius: calc(5px + 0.1vw) calc(5px + 0.1vw) 0 0;
  object-fit: fill;
  width: 100%;
  height: calc(150px + 1vw);

  @media only screen and (min-width: 500) {
    height: calc(170px + 1vw);
  }

  @media only screen and (min-width: 768px) {
    height: calc(200px + 1vw);
  }
`;

const ChipC = styled(Chip)`
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 0.4rem;
`;

const TitleWrapper = styled.div`
  border-radius: 0 0 calc(5px + 0.1vw) calc(5px + 0.1vw);
  background-color: #ff0000d1;
  bottom: 0px;
  left: 0px;
  padding: 0.005rem 0.2rem;
  right: 0px;
  max-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  > span {
    font-family: "Roboto Condensed";
    font-weight: 300;
    font-size: 1rem;
    color: white;
    padding: 2px;
    margin: 0px;
    z-index: 1;

    max-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const MangaCard = ({ className, manga }) => {
  const imageSrc =
    manga.image.match(/\/([^\/]+)[\/]?$/)[1] != "null"
      ? manga.image
      : "https://s3.zerochan.net/Touwa.Erio.240.620278.jpg";

  const sanitiseTitle = title =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-{2,}/g, "-");

  return (
    <Wrapper className={className}>
      <Link to={`/${manga.id}-${sanitiseTitle(manga.title)}`}>
        <Image referrerPolicy="no-referrer" src={imageSrc} />
      </Link>
      <ChipC color={STATUS_COLOR[manga.status]} text={manga.status} />
      <TitleWrapper>
        <span>{manga.title ? manga.title : "-"}</span>
      </TitleWrapper>
    </Wrapper>
  );
};

export default MangaCard;
