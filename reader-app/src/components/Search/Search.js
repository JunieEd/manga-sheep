import React, { useCallback, useState, useRef } from "react";
import { useQuery } from "@apollo/react-hooks";

import Option from "./Option";
import SearchBox from "./SearchBox";

import gql from "graphql-tag";
import _ from "lodash";
import styled from "styled-components";

import "./Search.css";

const MIN_QUERY_LENGTH = 3;
const THROTTLE_TIME = 300;
const MAX_SEARCH_MANGA_COUNT = 10;

const query = gql`
  query($searchTitle: String!, $first: Int) {
    mangas(searchTitle: $searchTitle, first: $first) {
      id
      image
      title
      status
    }
  }
`;

const Search = ({ items }) => {
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { data, loading } = useQuery(query, {
    skip: searchQuery.length < MIN_QUERY_LENGTH,
    variables: { searchTitle: searchQuery, first: MAX_SEARCH_MANGA_COUNT },
  });

  // const handleChange = _.debounce(evt => {
  //     setSearchQuery(evt.target.value);
  //     console.log(searchQuery);
  //   }, THROTTLE_TIME);

  const handleChange = (evt) => {
    handleFilter(evt.target.value);
  };

  const handleFilter = _.debounce((val) => {
    setSearchQuery(val);
    console.log(searchQuery);
  }, THROTTLE_TIME);

  const SearchButtonClickHandler = () => {
    setShowAutocomplete(true);
  };

  const OptionClickHandler = () => {
    setShowAutocomplete(false);
  };

  let AutocompleteContainerEL = null;

  const focusHandler = () => {
    AutocompleteContainerEL.focus();
  };

  const [showSearchBox, setShowSearchBox] = useState(false);

  const searchButtonClickHandler = () => {
    setShowSearchBox(true);
  };

  const xButtonClickHandler = () => {
    setShowSearchBox(false);
  };

  return (
    <div className={showSearchBox ? "search-wrapper" : "search-wrapper-x"}>
      <SearchBox
        handleChange={handleChange}
        searchButtonClickHandler={searchButtonClickHandler}
        showSearchBox={showSearchBox}
        xButtonClickHandler={xButtonClickHandler}
      />
      <Option mangas={!loading && data && data.mangas ? data.mangas : null} OptionClickHandler={OptionClickHandler} />
    </div>
  );
};

export default Search;
