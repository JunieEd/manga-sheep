import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import Ads from "#src/components/Ads/Ads";
import AllMangas from "./AllManga";
import TopManga from "#src/components/TopManga";
import { Title } from "#src/components/Column";

const query = gql`
  query($allManga: Boolean!, $status: String, $categories: [String], $sortByType: String, $isAsc: Boolean) {
    mangas(allManga: $allManga, status: $status, categories: $categories, sortByType: $sortByType, isAsc: $isAsc) {
      id
      image
      title
      status
      categories
      hits
    }
  }
`;

const filterInitialState = {
  status: "All",
  categories: [],
  sortBy: "Rank",
  isAsc: true,
};

const MangaList = () => {
  const [filters, setFilters] = useState(filterInitialState);
  const { loading, error, data } = useQuery(query, {
    variables: {
      allManga: true,
      status: filters.status,
      categories: filters.categories,
      sortByType: filters.sortBy,
      isAsc: filters.isAsc,
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col col-1">
          <Ads />
          <Title text="ALL MANGAS" route="" />

          <AllMangas
            loading={loading}
            mangas={!loading && data && data.mangas}
            filters={filters}
            setFilters={setFilters}
          />
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

export default MangaList;
