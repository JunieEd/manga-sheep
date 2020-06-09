import React from "react";
import TopManga from "#src/components/TopManga";
import Ads from "#src/components/Ads";
import MangaSearchResult from "./MangaSearchResults";
import { Title } from "#src/components/Column";

const SearchResult = ({ location }) => {
  const urlParams = new URLSearchParams(location.search);
  const searchQuery = decodeURI(urlParams.get("q"));

  return (
    <div className="container">
      <div className="row">
        <div className="col col-1">
          <Ads />
          <Title text="MANGA SEARCH RESULT" route="" />
          <MangaSearchResult searchQuery={searchQuery} />
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

export default SearchResult;
