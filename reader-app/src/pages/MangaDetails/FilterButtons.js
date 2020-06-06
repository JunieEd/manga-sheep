import React from "react";
import styled from "styled-components";
import _ from "lodash";

const SEPARATOR = " - ";
const CHAPTER_PER_PAGE = 100;

const FilterButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: calc(10px + 0.1vw);
`;

const FilterButton = styled.div`
  background-color: #b9b9b9;
  color: white;
  line-height: 1.5rem;
  font-size: 0.9rem;
  border-radius: calc(4px + 0.1vw);
  padding: calc(4px + 0.1vw) calc(6px + 0.1vw);
  cursor: pointer;
  margin: calc(2px + 0.1vw) calc(2px + 0.1vw);
  border: none;

  :hover {
    background-color: red;
  }
`;

const FilterButtons = ({
  chapters,
  selectedFilter,
  allChapter,
  isAsc,
  setIsAsc,
  fChapters,
  setFChapters,
  setSelectedFilter,
}) => {
  const chapterNumberFilter = [];
  let filterChapterNum = -1;
  while (filterChapterNum < getLastChapterNumber(chapters)) {
    let startingCount = filterChapterNum + 1;
    filterChapterNum = filterChapterNum + CHAPTER_PER_PAGE;
    chapterNumberFilter.push(startingCount + SEPARATOR + filterChapterNum);
  }

  const filterButtonClick = (e, showAll) => {
    let _filter = e.target.innerHTML;
    const filters = _filter.split(SEPARATOR);
    let chapterClone = _.cloneDeep(chapters);
    const _chapters = isAsc ? chapterClone.reverse() : chapterClone;
    showAll
      ? setFChapters(_chapters)
      : setFChapters(
          _chapters.filter(
            (c) => parseFloat(c.number) > parseFloat(filters[0]) && parseFloat(c.number) < parseFloat(filters[1])
          )
        );
    setSelectedFilter(_filter);
  };

  const sortAscDesc = () => {
    let aa = _.cloneDeep(fChapters);
    setFChapters(aa.reverse());
    setIsAsc(!isAsc);
  };

  return (
    <FilterButtonWrapper>
      <FilterButton onClick={() => sortAscDesc()} style={{ backgroundColor: "var(--global-black-color)" }}>
        {isAsc ? <>&#8595;</> : <>&#8593;</>}
      </FilterButton>

      {chapters.length >= CHAPTER_PER_PAGE && (
        <>
          <FilterButton
            className={`effect-bgc ${selectedFilter == allChapter ? "list-filter-selected" : ""}`}
            onClick={(e) => filterButtonClick(e, true)}
          >
            {allChapter}
          </FilterButton>
          {chapterNumberFilter.map((filter, index) => (
            <FilterButton
              className={`effect-bgc ${selectedFilter == filter ? "list-filter-selected" : ""}`}
              key={index}
              onClick={(e) => filterButtonClick(e, false)}
            >
              {filter}
            </FilterButton>
          ))}
        </>
      )}
    </FilterButtonWrapper>
  );
};

const getLastChapterNumber = (chapters) => {
  let chaplen = chapters.length;
  let firstValue = chapters[0].number;
  let lastValue = chapters[chaplen - 1].number;

  return firstValue > lastValue ? firstValue : lastValue;
};

export default FilterButtons;
