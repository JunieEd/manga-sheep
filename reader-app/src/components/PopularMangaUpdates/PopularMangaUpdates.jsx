import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import MangaCard from "#src/components/MangaCard/MangaCard";
import Loader from "#src/components/Others/Loader";

import "./PopularMangaUpdates.css";

const NUMBER_OF_TOP_UPDATES = 6;

const query = gql`
  query($topUpdates: Boolean!, $first: Int) {
    mangas(topUpdates: $topUpdates, first: $first) {
      id
      image
      title
      status
    }
  }
`;

const PopularMangaUpdates = () => {
  const { loading, error, data } = useQuery(query, {
    variables: { topUpdates: true, first: NUMBER_OF_TOP_UPDATES }
  });

  return !loading && data ? (
    data.mangas.map(manga => (
      <div className="manga-card-container" key={manga.id}>
        <MangaCard key={manga.id} manga={manga} />
      </div>
    ))
  ) : (
    <div className="loader-container">
      <Loader />
    </div>
  );
};

export default PopularMangaUpdates;
