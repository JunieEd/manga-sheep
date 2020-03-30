import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import "./Search.less";

import styled from "styled-components";

import Icon from "#src/components/Icon";

import Options from "./Options";
import Autocomplete from "./Autocomplete";

import gql from "graphql-tag";
import _ from "lodash";

//Styled Components
const MIN_QUERY_LENGTH = 3;
const THROTTLE_TIME = 300;
const MAX_SEARCH_MANGA_COUNT = 10;

const SearchContainer = styled.div`
  align-items: center;
  display: flex;
  height: var(--global-nav-height);
  justify-content: center;
`;

const SearchButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: var(--global-nav-height);
  width: auto;
  background: transparent;
  border: none;
  cursor: pointer;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;

const AutocompleteContainer = styled.div`
  color: #222;
  background-color: var(--main-toolbar-color);
  display: inline-block;
  height: var(--global-nav-height);
  left: 0;
  position: absolute;
  width: 100%;
  top: 0;
  vertical-align: middle;

  @media only screen and (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
}
`;

const IconContainer = styled.div`
  align-items: center;
  display: flex;
  height: var(--global-nav-height);
  justify-content: center;
  width: calc(var(--global-nav-height) + 10px);
`;

//Graphql

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
  const [autoCompleteText, setAutoCompleteText] = useState("");
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { data, loading } = useQuery(query, {
    skip: searchQuery.length < MIN_QUERY_LENGTH,
    variables: { searchTitle: searchQuery, first: MAX_SEARCH_MANGA_COUNT }
  });

  const handleChange = useCallback(
    _.throttle(searchQuery => {
      setSearchQuery(searchQuery.target.value);
    }, THROTTLE_TIME),
    [setSearchQuery]
  );

  items = ["david daviddavid david david david david david", "damien", "junie", "aldrin"];
  //placeHolder = "Enter Name";

  const [suggestions, setSuggestions] = useState({
    text: "",
    suggestion: []
  });

  const onTextChanged = e => {
    const value = e.target.value;
    let suggestion = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestion = items.sort().filter(v => regex.test(v));
    }

    setSuggestions({ text: value, suggestion: suggestion });
  };

  const suggestionSelected = value => {
    setSuggestions({
      text: value,
      suggestion: []
    });
  };

  const SearchButtonClickHandler = () => {
    setShowAutocomplete(true);
  };

  const XButtonClickHandler = () => {
    setShowAutocomplete(false);
    autoCompleteText = "";
  };

  return (
    <SearchContainer>
      <IconContainer>
        <SearchButton className="noSelect" onClick={SearchButtonClickHandler}>
          <Icon.SearchIcon height="20" />
        </SearchButton>
      </IconContainer>

      <AutocompleteContainer className={showAutocomplete ? "m-fadeIn" : "m-fadeOut"}>
        <Autocomplete handleChange={handleChange} XButtonClickHandler={XButtonClickHandler} />
        <Options mangas={!loading && data && data.mangas ? data.mangas : null} />
      </AutocompleteContainer>
    </SearchContainer>
  );
};

export default Search;
