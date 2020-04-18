import React from "react";
import _ from "lodash";

import Ads from "#src/components/Ads/Ads";
import AllUpdates from "#src/components/AllUpdates/AllUpdates";
import PopularMangaUpdates from "#src/components/PopularMangaUpdates/PopularMangaUpdates";
import TopManga from "#src/components/TopManga/TopManga";
import { Column, ColumnA, ColumnB, Title } from "#src/components/Column";

import styled from "styled-components";

const Home = () => {
  return (
    <>
      <ColumnA>
        <Title text="POPULAR MANGA UPDATES" route="/mangalist" />
        <PopularMangaUpdates />
        <Title text="ALL UPDATES" route="/mangalist" />
        <AllUpdates />
      </ColumnA>
      <ColumnB>
        <Ads />
        <Title text="TOP MANGA" route="/mangalist" />
        <TopManga />
      </ColumnB>
    </>
  );
};

export default Home;
