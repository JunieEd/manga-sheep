import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import MangaCard from "#src/components/MangaCard/MangaCard";
import Loader from "#src/components/Others/Loader";

import "./AllUpdates.css";

const NUMBER_OF_UPDATES = 24;

const query = gql`
  query($allUpdates: Boolean!, $first: Int) {
    mangas(allUpdates: $allUpdates, first: $first) {
      id
      image
      title
      status
    }
  }
`;

const AllUpdates = () => {
  const { loading, error, data } = useQuery(query, {
    variables: { allUpdates: true, first: NUMBER_OF_UPDATES }
  });

  return !loading && data ? (
    data.mangas.map(manga => (
      <div className="all_updates_manga-card-container" key={manga.id}>
        <MangaCard key={manga.id} manga={manga} />
      </div>
    ))
  ) : (
    <div className="loader-container">
      <Loader />
    </div>
  );
};

export default AllUpdates;
