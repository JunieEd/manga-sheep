import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

import { MangaGrid } from "#src/components/MangaGrid";

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

const MangaCount = styled.div`
  font-size: calc(1rem + 0.1vw);
  padding: calc(5px + 0.2vw) 0 calc(10px + 0.4vw) 0;
`;

const SavedManga = ({ mangaIds }) => {
  const { loading, error, data } = useQuery(query, {
    variables: {
      searchIds: mangaIds,
    },
  });
  return (
    <>
      <MangaCount>{loading ? "Loading" : data.mangas.length} manga saved</MangaCount>
      <MangaGrid
        noOfMangas={NUMBER_OF_TOP_MANGA}
        loading={loading}
        mangas={!loading && data && data.mangas}
        variant="vertical"
        isRanked={false}
        pagination={true}
      />
    </>
  );
};

export default SavedManga;
