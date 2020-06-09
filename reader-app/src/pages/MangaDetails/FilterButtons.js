import React from "react";
import styled from "styled-components";
import _ from "lodash";
import { Button } from "#src/components/Button";

const SEPARATOR = " - ";
const CHAPTER_PER_PAGE = 100;

const FilterButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: calc(10px + 0.1vw);
`;

const ButtonStyled = styled(Button)`
  background-color: #b9b9b9;

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
      <Button onClick={() => sortAscDesc()} style={{ backgroundColor: "var(--global-black-color)" }}>
        {isAsc ? <>&#8595;</> : <>&#8593;</>}
      </Button>

      {chapters.length >= CHAPTER_PER_PAGE && (
        <>
          <ButtonStyled
            className={`effect-bgc ${selectedFilter == allChapter ? "list-filter-selected" : ""}`}
            onClick={(e) => filterButtonClick(e, true)}
          >
            {allChapter}
          </ButtonStyled>
          {chapterNumberFilter.map((filter, index) => (
            <ButtonStyled
              className={`effect-bgc ${selectedFilter == filter ? "list-filter-selected" : ""}`}
              key={index}
              onClick={(e) => filterButtonClick(e, false)}
            >
              {filter}
            </ButtonStyled>
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
