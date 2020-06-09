import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Image from "#src/components/Image";
import { ButtonBookmark } from "#src/components/Button";

const Wrapper = styled.div`
  display: flex;
  border-radius: calc(7px + 0.1vw);
  min-width: 50px;
  padding: calc(5px + 0.2vw);
  position: relative;
  margin-bottom: calc(10px + 0.5vw);

  :hover {
    background-color: #c0c0c073;
  }
`;
const ImageContainerx = styled.div`
  width: 100px;
  float: left;
  position: relative;
`;

const MangaInfoContainer = styled.div`
  flex: 1;
  padding-left: calc(10px + 0.5vw);
`;

const Badge = styled.span`
  font-size: calc(0.6rem + 0.3vw);
  width: calc(16px + 0.5vw);
  height: calc(16px + 0.5vw);
  border-radius: calc(8px + 0.5vw);
  background-color: red;
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  a {
    color: red;
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

const SubInfoWrapper = styled.div`
  display: block;
  span {
    font-size: 0.9rem;
  }
`;

const ButtonBookmarkStyled = styled(ButtonBookmark)`
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 0.5rem;
  z-index: 1;
`;

const DarkGradient = styled.div`
  background-image: linear-gradient(to top, rgba(255, 0, 0, 0), #0000009e);
  height: calc(25px + 1vw);
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: calc(3px + 0.1vw) calc(3px + 0.1vw);
`;

const MangaCardSmall = ({ className, manga, top = "1" }) => {
  const sanitiseTitle = (title) =>
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
      {top && top != "" && <Badge>{top}</Badge>}

      <ImageContainerx>
        <ButtonBookmarkStyled manga={manga} />
        <Link to={`/${manga.id}-${sanitiseTitle(manga.title)}`}>
          <Image referrerPolicy="no-referrer" src={imageSrc} />
          <DarkGradient />
        </Link>
      </ImageContainerx>

      <MangaInfoContainer>
        <TitleWrapper>
          <Link to={`/${manga.id}-${sanitiseTitle(manga.title)}`}>{manga.title ? manga.title : "-"}</Link>
        </TitleWrapper>
        <SubInfoWrapper>
          <span>{manga.status}</span>
        </SubInfoWrapper>
      </MangaInfoContainer>
    </Wrapper>
  );
};

export default MangaCardSmall;
