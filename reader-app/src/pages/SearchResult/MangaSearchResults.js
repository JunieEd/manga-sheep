import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

import { MangaGrid } from "#src/components/MangaGrid";

const NO_TO_SHOW = 15;

const query = gql`
  query($searchTitle: String!) {
    mangas(searchTitle: $searchTitle) {
      id
      image
      title
      status
    }
  }
`;

const MangaCount = styled.div`
  font-size: calc(1rem + 0.1vw);
  padding: calc(5px + 0.2vw) 0;
`;

const MangaSearchResult = ({ searchQuery }) => {
  const { data, loading } = useQuery(query, {
    variables: { searchTitle: searchQuery },
  });

  const loaded = !loading && data.mangas;

  return (
    <>
      <MangaCount>
        {loaded ? data.mangas.length : "Loading"} result{loaded && data.mangas.length > 1 && "s"} for "{searchQuery}"
      </MangaCount>
      <MangaGrid
        noOfMangas={NO_TO_SHOW}
        variant={"vertical"}
        loading={loading}
        mangas={!loading && data.mangas}
        pagination={true}
      />
    </>
  );
};

export default MangaSearchResult;
