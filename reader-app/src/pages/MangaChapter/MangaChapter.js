import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import LazyLoad from "react-lazyload";
import styled from "styled-components";

import Ads from "#src/components/Ads";
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
    params: { mangaId, chapterId },
  },
}) => {
  const { data, loading } = useQuery(query, {
    variables: { chapterId },
  });

  if (loading) return <div>Loading</div>;

  return (
    <Wrapper>
      <NavStyled mangaId={mangaId} chapterId={chapterId} />
      <ChapterImageWrapper>
        {[...data.chapter.images].reverse().map((image, index) => (
          <LazyLoad key={index} height={1000} resize={false}>
            <img referrerPolicy="no-referrer" src={image.url} />
          </LazyLoad>
        ))}
      </ChapterImageWrapper>
      <NavStyled mangaId={mangaId} chapterId={chapterId} />
      <Ads />
    </Wrapper>
  );
};

export default MangaChapter;
