import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import MangaGrid from "#src/components/MangaGrid";

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

const PopularMangaUpdates = () => {
  const { loading, error, data } = useQuery(query, {
    variables: { topManga: true, first: NUMBER_OF_TOP_MANGA }
  });

  return (
    <MangaGrid
      noOfMangas={NUMBER_OF_TOP_MANGA}
      loading={loading}
      mangas={!loading && data && data.mangas}
      variant="vertical"
    />
  );
};

export default PopularMangaUpdates;
