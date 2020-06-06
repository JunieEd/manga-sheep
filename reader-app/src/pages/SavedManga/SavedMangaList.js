import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import MangaGrid from "#src/components/MangaGrid";

const NUMBER_OF_TOP_MANGA = 10;

const query = gql`
  query($searchIds: [String]) {
    mangas(searchIds: $searchIds) {
      id
      image
      title
      status
      categories
      hits
    }
  }
`;

const SavedManga = ({ mangaIds }) => {
  const { loading, error, data } = useQuery(query, {
    variables: {
      searchIds: mangaIds,
    },
  });
  return (
    <MangaGrid
      noOfMangas={NUMBER_OF_TOP_MANGA}
      loading={loading}
      mangas={!loading && data && data.mangas}
      variant="vertical"
      isRanked={false}
      pagination={true}
    />
  );
};

export default SavedManga;
