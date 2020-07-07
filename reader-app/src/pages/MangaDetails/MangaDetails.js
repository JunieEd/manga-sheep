import React, { useState } from "react";

import Ads from "#src/components/Ads";
import TopManga from "#src/components/TopManga";
import { Title } from "#src/components/Column";
import MangaInfo from "./MangaInfo";
// import { Breadcrumb_Custom as Breadcrumb } from "#src/components/Breadcrumb";

const MangaDetails = ({
  match: {
    params: { mangaId, mangaName },
  },
  location,
}) => {
  return (
    <div className="container">
      {/* <Breadcrumb items={breadcrumbItems} /> */}
      <div className="row">
        <div className="col col-1">
          <MangaInfo mangaId={mangaId} mangaName={mangaName} location={location} />
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
