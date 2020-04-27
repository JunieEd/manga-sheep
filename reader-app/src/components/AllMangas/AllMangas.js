import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import MangaGrid from "#src/components/MangaGrid";

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

  return <MangaGrid noOfMangas={NUMBER_OF_UPDATES} loading={loading} mangas={!loading && data && data.mangas} />;
};

export default AllUpdates;
