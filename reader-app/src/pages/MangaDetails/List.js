import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fromUnixTime, differenceInDays, formatDistanceToNow, format } from "date-fns";
import _ from "lodash";

import "./style.css";

const ListWrapper = styled.ul`
  background-color: #ffffff69;
  padding: calc(3px + 0.5vw);
  border-radius: calc(5px + 0.5vw);
`;

const ListItem = styled.li`
  text-decoration: none;
  list-style-type: none;
  padding: calc(5px + 0.3vw) 0;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  align-items: center;

  :hover {
    background-color: #f0f0f0;
  }

  a {
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;

    :hover {
      color: var(--global-font-color);
    }
  }

  span {
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 400px) {
    padding: calc(5px + 0.3vw);
  }
`;

const ShowMore = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(8px + 0.2vw);
  margin-top: calc(5px + 0.1vw);

  span {
    font-weight: 600;
    cursor: pointer;

    :hover {
      color: var(--global-red-color);
    }
  }
`;

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

const NO_OF_DAYS = 2;
const INITIAL_LIMIT = 10;
const SEPARATOR = " - ";
const ALL_CHAPTERS = "All Chapters";
const CHAPTER_PER_PAGE = 100;

const List = ({ chapters, mangaId, mangaName }) => {
  const [mangaLimit, setMangaLimit] = useState(INITIAL_LIMIT);
  const [selectedFilter, setSelectedFilter] = useState(ALL_CHAPTERS);
  const [isAsc, setIsAsc] = useState(false);
  const [fChapters, setFChapters] = useState(chapters);
  const [isShowMore, setIsShowMore] = useState(true);

  const showMore = (x) => {
    let limit = x ? fChapters.length : INITIAL_LIMIT;
    setMangaLimit(limit);
    setIsShowMore(!x);
  };

  const sortAscDesc = () => {
    let aa = _.cloneDeep(fChapters);
    setFChapters(aa.reverse());
    setIsAsc(!isAsc);
  };

  const FilterButtons = () => {
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
      showLess();
    };

    return (
      <>
        <FilterButton
          className={`effect-bgc ${selectedFilter == ALL_CHAPTERS ? "list-filter-selected" : ""}`}
          onClick={(e) => filterButtonClick(e, true)}
        >
          {ALL_CHAPTERS}
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
    );
  };
  // &#8645;
  return (
    <>
      <FilterButtonWrapper>
        <FilterButton onClick={() => sortAscDesc()} style={{ backgroundColor: "var(--global-black-color)" }}>
          {isAsc ? <>&#8595;</> : <>&#8593;</>}
        </FilterButton>
        {chapters.length >= CHAPTER_PER_PAGE && <FilterButtons />}
      </FilterButtonWrapper>
      <ListWrapper>
        {chapters &&
          fChapters.slice(0, mangaLimit).map((chapter, index) => (
            <ListItem key={index}>
              <Link to={`/${mangaId}-${mangaName}/${chapter.id}`}>
                {"Chapter " +
                  chapter.number +
                  (chapter.title && chapter.title != chapter.number ? " : " + chapter.title : "")}
              </Link>
              <span>{dateFormat(chapter.lastUpdated)}</span>
            </ListItem>
          ))}
        <ShowMore>
          {isShowMore ? (
            <span onClick={() => showMore(true)}>Show More &#x25BC;</span>
          ) : (
            <span onClick={() => showMore(false)}>Show Less &#x25B2;</span>
          )}
        </ShowMore>
      </ListWrapper>
    </>
  );
};

const dateFormat = (lastUpdated) => {
  let date = fromUnixTime(lastUpdated);
  return differenceInDays(new Date(), date) <= NO_OF_DAYS ? formatDistanceToNow(date) : format(date, "PP");
};

const getLastChapterNumber = (chapters) => {
  let chaplen = chapters.length;
  let firstValue = chapters[0].number;
  let lastValue = chapters[chaplen - 1].number;

  return firstValue > lastValue ? firstValue : lastValue;
};

export default List;
