import React, { useState } from "react";
import { Breakpoint, useCurrentWidth } from "react-socks";
import { useTransition, animated } from "react-spring";
import { SearchIcon } from "#src/components/Icon";

import { useDispatch } from "react-redux";
import { backdropShow, backdropHide } from "#src/redux/Action";

import gql from "graphql-tag";
import _ from "lodash";
import { useQuery } from "@apollo/react-hooks";

import SearchBox from "./SearchBox";
import Option from "./Option";
import "./Search.css";

const MIN_QUERY_LENGTH = 3;
const THROTTLE_TIME = 400;
const MAX_SEARCH_MANGA_COUNT = 5;

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

const SearchInitial = ({}) => {
  const [showOption, setShowOption] = useState(true);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { data, loading } = useQuery(query, {
    skip: searchQuery.length < MIN_QUERY_LENGTH,
    variables: { searchTitle: searchQuery, first: MAX_SEARCH_MANGA_COUNT },
  });

  const dispatch = useDispatch();

  const handleChange = (evt) => {
    handleFilter(evt.target.value);
  };

  const handleFilter = _.debounce((val) => {
    setSearchQuery(val);
  }, THROTTLE_TIME);

  const screenWidth = useCurrentWidth();

  const searchButtonClickHandler = () => {
    setShowSearchBox(true);
    setShowOption(true);

    dispatch(backdropShow(true));
  };

  const xButtonClickHandler = () => {
    setShowSearchBox(false);
    setShowOption(false);
    setSearchQuery("");

    dispatch(backdropHide());
  };

  const OptionClickHandler = () => {
    setShowSearchBox(false);
    setShowOption(false);
    setSearchQuery("");
  };

  const transitionsSearch = useTransition(showSearchBox, null, {
    from: { opacity: 0.4, transform: `translate3d(${screenWidth - 65}px,0,0)` },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: { opacity: 0.4, transform: `translate3d(${screenWidth - 65}px,0,0)` },
  });

  return (
    <>
      <Breakpoint customQuery="(max-width: 767.98px)">
        <div className="search-icon-wrapper">
          <button className="search-button noSelect" onClick={searchButtonClickHandler}>
            <SearchIcon height="20" />
          </button>
        </div>

        {transitionsSearch.map(
          ({ item, props, key }) =>
            item && (
              <animated.div key={key} style={props} className="search-mobile-wrapper-sliding">
                <SearchBox
                  showSearchBox={showSearchBox}
                  xButtonClickHandler={xButtonClickHandler}
                  handleChange={handleChange}
                  showOption={showOption}
                  mangas={!loading && data && data.mangas}
                />
              </animated.div>
            )
        )}
      </Breakpoint>

      <Breakpoint tablet up style={{ display: "flex", alignItems: "center", paddingRight: "20px" }}>
        <SearchBox
          OptionClickHandler={OptionClickHandler}
          handleChange={handleChange}
          forDesktop={true}
          showOption={showOption}
          mangas={!loading && data && data.mangas}
        />
      </Breakpoint>
    </>
  );
};

export default SearchInitial;
