import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "#src/svg/icon-search";

import "./Search.less";

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

  return (
    <div className="autocomplete-container">
      <div className="autocomplete-header">
        <input
          className="autocomplete-input"
          type="text"
          onChange={onTextChanged}
          value={suggestions.text}
          placeholder={placeHolder}
        />
        <Link to="./" className="noSelect">
          <SearchIcon />
        </Link>
      </div>
      <div className="autocomplete-suggestions-wrapper">
        <ShowSuggestion />
      </div>
    </div>
  );
};

export default Search;
