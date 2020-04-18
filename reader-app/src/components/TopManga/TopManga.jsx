import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

import MangaCardSmall from "#src/components/MangaCard/MangaCardSmall";
import Loader from "#src/components/Others/Loader";

import "./TopManga.css";

const NUMBER_OF_TOP_MANGA = 10;

const query = gql`
  query($topManga: Boolean!, $first: Int) {
    mangas(topManga: $topManga, first: $first) {
      id
      image
      title
      status
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: center;
`;

const PopularMangaUpdates = () => {
  const { loading, error, data } = useQuery(query, {
    variables: { topManga: true, first: NUMBER_OF_TOP_MANGA }
  });

  return (
    <Wrapper>
      {!loading && data ? (
        data.mangas.map(manga => (
          <div className="manga-card-container" key={manga.id}>
            <MangaCardSmall key={manga.id} manga={manga} />
          </div>
        ))
      ) : (
        <div className="loader-container">
          <Loader />
        </div>
      )}
    </Wrapper>
  );
};

export default PopularMangaUpdates;
