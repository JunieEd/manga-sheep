import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Search.less";

import styled from "styled-components";

import SearchIcon from "#src/components/SVG/SearchIcon";

const SearchButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: var(--global-nav-height);
  width: auto;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.1em 0.4em;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;

const AutocompleteContainer = styled.div`
  color: #222;
  background-color: white;
  border: 1.1px solid #cccccc;
  border-radius: 0.3rem;
  display: inline-block;
  padding: 3px 10px 3px 6px;
  position: relative;
  width: 100%;
  vertical-align: middle;
`;

const AutoCompleteHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > a {
    font-size: 0px;
  }
`;

const AutoComplete = styled.input`
  width: 100%;
  border: none;
  padding: 5px 5px;
  box-sizing: border-box;
  outline: none;
  font-size: 2rem;
`;

const SearchContainer = styled.div`
  align-items: center;
  display: flex;
  height: var(--global-nav-height);
  justify-content: center;
  width: calc(var(--global-nav-height) + 10px);
`;

const Autocomplete = () => {
  return (
    <AutocompleteContainer>
      <AutoCompleteHeader>
        <AutoComplete />
        <Link to="./" className="noSelect">
          <SearchIcon height="20" />
        </Link>
      </AutoCompleteHeader>
    </AutocompleteContainer>
  );
};

const Search = ({ items, placeHolder }) => {
  items = [
    "david daviddavid david david david david david",
    "damien",
    "junie",
    "aldrin"
  ];
  //placeHolder = "Enter Name";

  const [suggestions, setSuggestions] = useState({
    text: "",
    suggestion: []
  });

  const [showAutocomplete, setShowAutocomplete] = useState(false);

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

  const ShowSuggestion = () => {
    const { suggestion } = suggestions;

    if (suggestion.length === 0) {
      return null;
    }

    return (
      <div className="autocomplete-suggestions-container">
        <ul>
          {suggestion.map((item, index) => (
            <li key={index} onClick={() => suggestionSelected(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const SearchButtonClickHandler = () => {
    setShowAutocomplete(true);
  };

  return (
    // <AutocompleteContainer>
    //   <AutoCompleteHeader>
    //     <AutoComplete />
    //     <Link to="./" className="noSelect">
    //       <img src={searchIcon32} />
    //     </Link>
    //   </AutoCompleteHeader>
    // </AutocompleteContainer>

    <SearchContainer>
      {showAutocomplete ? (
        <Autocomplete />
      ) : (
        <SearchButton className="noSelect" onClick={SearchButtonClickHandler}>
          <SearchIcon height="20" />
        </SearchButton>
      )}
    </SearchContainer>

    // <div className="autocomplete-container">
    //   <div className="autocomplete-header">
    //     <input
    //       className="autocomplete-input"
    //       type="text"
    //       onChange={onTextChanged}
    //       value={suggestions.text}
    //       placeholder={placeHolder}
    //     />
    //     <Link to="./" className="noSelect">
    //       <SearchIcon />
    //     </Link>
    //   </div>
    //   <div className="autocomplete-suggestions-wrapper">
    //     <ShowSuggestion />
    //   </div>
    // </div>
  );
};

export default Search;
