import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

import MangaCard from "#src/components/MangaCard/MangaCard";
import Loader from "#src/components/Others/Loader";

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

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: initial;
`;

const StyledMangaCard = styled(MangaCard)`
  width: 33.33%;
  min-width: 100px;

  @media only screen and (min-width: 480px) {
    width: 16.66%;
  }
`;

const PopularMangaUpdates = () => {
  const { loading, error, data } = useQuery(query, {
    variables: { topUpdates: true, first: NUMBER_OF_TOP_UPDATES }
  });

  return (
    <Wrapper>
      {!loading && data ? (
        data.mangas.map(manga => <StyledMangaCard key={manga.id} manga={manga} />)
      ) : (
        <div className="loader-container">
          <Loader />
        </div>
      )}
    </Wrapper>
  );
};

export default PopularMangaUpdates;
