import React, { useCallback, useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import Icon from "#src/components/Icon";
import Options from "./Options";
import Autocomplete from "./Autocomplete";

import gql from "graphql-tag";
import _ from "lodash";
import styled from "styled-components";

import "./Search.css";

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

  @media only screen and (min-width: 768px) {
    height: calc(var(--global-nav-height) - 20px);
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

const MobileViewContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const FullViewContainer = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: inline-block;
  }
`;

const AutocompleteInputWrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-flow: row nowrap;
  vertical-align: middle;
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
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { data, loading } = useQuery(query, {
    skip: searchQuery.length < MIN_QUERY_LENGTH,
    variables: { searchTitle: searchQuery, first: MAX_SEARCH_MANGA_COUNT }
  });

  // const handleChange = _.debounce(evt => {
  //     setSearchQuery(evt.target.value);
  //     console.log(searchQuery);
  //   }, THROTTLE_TIME);

  const handleChange = evt => {
    handleFilter(evt.target.value);
  };

  const handleFilter = _.debounce(val => {
    setSearchQuery(val);
    console.log(searchQuery);
  }, THROTTLE_TIME);

  const SearchButtonClickHandler = () => {
    setShowAutocomplete(true);
  };

  const XButtonClickHandler = () => {
    setShowAutocomplete(false);
    setSearchQuery("");
  };

  const OptionClickHandler = () => {
    setShowAutocomplete(false);
  };

  return (
    <SearchContainer>
      <FullViewContainer>
        <AutocompleteInputWrapper>
          <Autocomplete handleChange={handleChange} />
          <Options
            mangas={!loading && data && data.mangas ? data.mangas : null}
            OptionClickHandler={OptionClickHandler}
          />
          <IconContainer>
            <SearchButton className="noSelect" onClick={SearchButtonClickHandler}>
              <Icon.SearchIcon height="20" />
            </SearchButton>
          </IconContainer>
        </AutocompleteInputWrapper>
      </FullViewContainer>

      <MobileViewContainer>
        <IconContainer>
          <SearchButton className="noSelect" onClick={SearchButtonClickHandler}>
            <Icon.SearchIcon height="20" />
          </SearchButton>
        </IconContainer>
      </MobileViewContainer>

      <AutocompleteContainer className={showAutocomplete ? "m-fadeIn" : "m-fadeOut"}>
        <Autocomplete handleChange={handleChange} XButtonClickHandler={XButtonClickHandler} />
        <Options
          mangas={!loading && data && data.mangas ? data.mangas : null}
          OptionClickHandler={OptionClickHandler}
        />
      </AutocompleteContainer>
    </SearchContainer>
  );
};

export default Search;
