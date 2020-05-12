import React from "react";

import Ads from "#src/components/Ads/Ads";
import AllUpdates from "#src/components/AllUpdates/AllUpdates";
import PopularMangaUpdates from "#src/components/PopularMangaUpdates";
import TopManga from "#src/components/TopManga";
import { Title } from "#src/components/Column";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-1">
          <Title text="POPULAR UPDATES" route="/mangalist" />
          <PopularMangaUpdates />
          <Ads />
          <Title text="ALL UPDATES" route="/mangalist" />
          <AllUpdates />
          <Ads />
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

export default Home;
