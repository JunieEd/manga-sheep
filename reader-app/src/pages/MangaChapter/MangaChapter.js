import React, { useState, useContext, useEffect } from "react";
import * as R from "ramda";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import styled from "styled-components";

import ReadChaptersContext from "#src/contexts/ReadChaptersContext";

import { Loader } from "#src/components/Others";
import Ads from "#src/components/Ads";
import Page from "./Page";
import Nav from "./Nav";

import "./style.css";

const query = gql`
  query($chapterId: ID!) {
    chapter(id: $chapterId) {
      id
      images {
        url
        height
        width
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

const ChapterImageWrapper = styled.div`
  align-items: center;
  background-color: var(--global-black-color);
  display: flex;
  flex-flow: column nowrap;
  padding: calc(10px + 0.2vw);
  width: 100%;

  img {
    height: auto;
    width: 90vw;

    @media only screen and (min-width: 992px) {
      width: auto;
      max-width: 90vw;
    }
  }
`;

const NavStyled = styled(Nav)`
  width: 100%;

  @media only screen and (min-width: 992px) {
    width: 60vw;
  }
`;

const MangaChapter = ({
  match: {
    params: { mangaId, mangaName, chapterId, chapterNumber },
  },
  location,
}) => {
  const { data, loading } = useQuery(query, {
    variables: { chapterId },
  });
  const { isChapterRead, addReadChapter } = useContext(ReadChaptersContext);

  useEffect(() => {
    if (!isChapterRead({ mangaId: mangaId, chapterId: chapterId })) {
      addReadChapter(mangaId, chapterId);
    }
  });

  if (loading) return <Loader />;

  return (
    <>
      <div className="container">
        <Ads />
      </div>
      <Wrapper>
        <NavStyled mangaId={mangaId} mangaName={mangaName} chapterId={chapterId} location={location} />
        <ChapterImageWrapper>
          {[...data.chapter.images].reverse().map((image, index) => (
            <Page key={index} src={image.url} index={index} />
          ))}
        </ChapterImageWrapper>
        <NavStyled mangaId={mangaId} chapterId={chapterId} location={location} />
      </Wrapper>
      <div className="container">
        <Ads />
      </div>
    </>
  );
};

export default MangaChapter;
