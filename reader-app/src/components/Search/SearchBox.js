import React from "react";
import styled from "styled-components";
import { SearchIcon, XIcon, BackArrowIcon } from "#src/components/Icon";
import Option from "./Option";

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
  height: var(--global-nav-height);

  :focus {
    border-size: 2px;
  }
`;

const SearchInput = styled.input.attrs({ placeholder: "Search Manga" })`
  border: none;
  font-size: 1rem;
  flex: 1;
  line-height: var(--global-nav-height);
  outline: none;
  background-color: white;

  ::-webkit-search-cancel-button {
    color: red;
    background-color: red;
  }

  @media only screen and (min-width: 576px) {
    line-height: 1.5;
  }
`;

const IconWrapper = styled.div`
  @media only screen and (min-width: 10px);
`;

const Autocomplete = ({ autoCompValue, setAutoCompValue, handleChange, xButtonClickHandler, forDesktop, mangas }) => {
  let searchBoxStyle = [];
  let iconWrapperStyle = [];

  if (forDesktop) {
    searchBoxStyle = {
      border: "1px solid red",
      borderRadius: "5px",
      height: "calc(var(--global-nav-height) - 15px)",
      width: "calc(250px + 10vw)",
      backgroundColor: "white",
    };
    //    ${'' /* paddingRight: "15px", */}
    iconWrapperStyle = {
      height: "calc(var(--global-nav-height) - 15px)",
      width: "var(--global-nav-height)",
    };
  }

  return (
    <>
      <SearchBox style={searchBoxStyle}>
        <IconWrapper className="search-icon-wrapper c-width" style={iconWrapperStyle}>
          <SearchIcon height="20" />
        </IconWrapper>
        <SearchInput value={autoCompValue} onChange={handleChange} />
        {autoCompValue !== "" && (
          <button
            className="search-button noSelect"
            style={{ paddingLeft: "5px", paddingRight: "13px" }}
            onClick={() => setAutoCompValue("")}
          >
            <XIcon height="10" />
          </button>
        )}
        {!forDesktop && (
          <IconWrapper className="search-icon-wrapper c-width matted">
            <button className="search-button noSelect" onClick={xButtonClickHandler}>
              <BackArrowIcon height="18" />
            </button>
          </IconWrapper>
        )}
      </SearchBox>

      {autoCompValue != "" && (
        <Option
          autoCompValue={autoCompValue}
          setAutoCompValue={setAutoCompValue}
          forDesktop={forDesktop}
          mangas={mangas}
        />
      )}
    </>
  );
};

export default Autocomplete;
