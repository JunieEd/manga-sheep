import React from "react";
import styled from "styled-components";

import MangaCard from "#src/components/MangaCard/MangaCard";
import Loader from "#src/components/Others/Loader";

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

const MangaGrid = ({ loading, mangas }) => {
  return (
    <Wrapper>
      {!loading && mangas ? (
        mangas.map(manga => <StyledMangaCard key={manga.id} manga={manga} />)
      ) : (
        <div className="loader-container">
          <Loader />
        </div>
      )}
    </Wrapper>
  );
};

export default MangaGrid;
