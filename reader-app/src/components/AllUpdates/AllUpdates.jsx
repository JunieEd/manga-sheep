import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

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

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: center;
`;

const AllUpdates = () => {
  const { loading, error, data } = useQuery(query, {
    variables: { allUpdates: true, first: NUMBER_OF_UPDATES }
  });

  return (
    <Wrapper>
      {!loading && data ? (
        data.mangas.map(manga => <MangaCard key={manga.id} manga={manga} />)
      ) : (
        <div className="loader-container">
          <Loader />
        </div>
      )}
    </Wrapper>
  );
};

export default AllUpdates;
