import React, { useState } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

import MangaGrid from "#src/components/MangaGrid";
import FilterBox from "./FilterBox";

import "./style.css";

const NUMBER_OF_UPDATES = 36;

const FilterRow = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  padding-top: calc(5px + 0.2vw);
  padding-bottom: calc(5px + 0.2vw);
`;

const SortFilterWrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  align-content: center;
`;

const FilterButton = styled.div`
  background-color: red;
  color: white;
  line-height: 1.5rem;
  font-size: 0.9rem;
  border-radius: calc(4px + 0.1vw);
  padding: calc(4px + 0.1vw) calc(6px + 0.1vw);
  cursor: pointer;
  margin: calc(2px + 0.1vw) calc(2px + 0.1vw);
  border: none;

  :hover {
    background-color: #b32525;
  }
`;

const SortTypeFilter = styled.select`
  width: calc(100px + 0.5vw);
  margin: calc(2px + 0.1vw) calc(2px + 0.1vw);
  height: calc(30px + 0.3vw);
`;

const SortBySpan = styled.div`
  @media only screen and (max-width: 350px) {
    display: none;
  }
`;

const MangaCount = styled.div`
  font-size: calc(1rem + 0.1vw);
  padding: calc(5px + 0.2vw) 0;
`;

const sortByType = {
  Rank: "Rank",
  Name: "Name",
  LatestUpdate: "Latest Update",
};

const findCommonElements = (arr1, arr2) => {
  return arr1.some((item) => arr2.includes(item));
};

const AllManga = ({ loading, mangas, filters, setFilters }) => {
  const [categoriesInit, setCategoriesInit] = useState([]);
  const [showFilterBox, setShowFilterBox] = useState(false);
  const [isAsc, setIsAsc] = useState(true);

  const handleSortValue = (e) => {
    let filterCopy = { ...filters };
    filterCopy.sortBy = e.target.value;
    setFilters(filterCopy);
  };

  const sortAscDesc = () => {
    let newIsAsc = !isAsc;
    let filterCopy = { ...filters };
    filterCopy.isAsc = newIsAsc;
    setFilters(filterCopy);
    setIsAsc(newIsAsc);
  };

  const showFilterClickHandler = () => {
    setShowFilterBox(!showFilterBox);
  };

  const categoryList =
    !loading &&
    mangas &&
    (categoriesInit.length == 0 ? [...new Set(mangas.flatMap((manga) => manga.categories))] : categoriesInit);

  const transitionsFilterBox = useTransition(showFilterBox, null, {
    from: { opacity: 0, maxHeight: "0px" },
    enter: { opacity: 1, maxHeight: "1000px" },
    leave: { opacity: 0, maxHeight: "0px" },
  });

  return (
    <>
      <MangaCount>{loading ? "Loading" : mangas.length} Manga results</MangaCount>
      <FilterRow>
        <FilterButton className={showFilterBox ? "button-show-filter" : ""} onClick={() => showFilterClickHandler()}>
          Show Filter
        </FilterButton>
        <SortFilterWrapper>
          <SortBySpan>Sort by</SortBySpan>

          <SortTypeFilter onChange={handleSortValue}>
            <option value={sortByType.Rank}>{sortByType.Rank}</option>
            <option value={sortByType.Name}>{sortByType.Name}</option>
            <option value={sortByType.LatestUpdate}>{sortByType.LatestUpdate}</option>
          </SortTypeFilter>

          <FilterButton onClick={() => sortAscDesc()} style={{ backgroundColor: "var(--global-black-color)" }}>
            {isAsc ? /*arrow up*/ <>&#8593;</> : /*arrow down*/ <>&#8595;</>}
          </FilterButton>
        </SortFilterWrapper>
      </FilterRow>

      {transitionsFilterBox.map(
        ({ item, props, key }) =>
          item && (
            <animated.div key={key} style={props}>
              <FilterBox
                categories={categoryList}
                showFilterBox={showFilterBox}
                setShowFilterBox={setShowFilterBox}
                setFilters={setFilters}
                filters={filters}
                categoriesInit={categoriesInit}
                setCategoriesInit={setCategoriesInit}
              />
            </animated.div>
          )
      )}

      <MangaGrid noOfMangas={NUMBER_OF_UPDATES} loading={loading} mangas={!loading && mangas} pagination={true} />
    </>
  );
};

export default AllManga;
