import React from "react";
import styled from "styled-components";

import Ads from "#src/components/Ads";
import TopManga from "#src/components/TopManga";
import { Title } from "#src/components/Column";
import MangaInfo from "./MangaInfo";

const MangaDetails = ({
  match: {
    params: { mangaId, mangaName },
  },
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-1">
          <MangaInfo mangaId={mangaId} mangaName={mangaName} />
        </div>
        <div className="col col-2">
          <Ads />
          <Title text="TOP MANGA" route="/mangalist" />
          <TopManga />
          <Ads />
        </div>
      </div>
    </div>
  );
};

export default MangaDetails;
