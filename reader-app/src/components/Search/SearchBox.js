import React from "react";
import styled from "styled-components";
import { SearchIcon, XIcon } from "#src/components/Icon";

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
  height: var(--global-nav-height);
`;

const SearchInput = styled.input.attrs({ placeholder: "Search Manga" })`
  border: none;
  font-size: 1rem;
  flex: 1;
  line-height: var(--global-nav-height);
  outline: none;

  @media only screen and (min-width: 768px) {
    line-height: 1.5;
  }
`;

const Autocomplete = ({ handleChange, xButtonClickHandler, OptionClickHandler }) => {
  return (
    <>
      <SearchBox>
        <div className="search-icon-wrapper">
          <SearchIcon height="20" />
        </div>
        <SearchInput onChange={handleChange} />
        <div className="search-icon-wrapper">
          <button className="search-button noSelect" onClick={xButtonClickHandler}>
            <XIcon height="15" />
          </button>
        </div>
      </SearchBox>
    </>
  );
};

export default Autocomplete;
