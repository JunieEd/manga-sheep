import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fromUnixTime, differenceInDays, formatDistanceToNow, format } from "date-fns";
import _ from "lodash";

const ListWrapper = styled.ul`
  background-color: #ffffff69;
  padding: calc(3px + 0.5vw);
  border-radius: calc(5px + 0.5vw);
`;

const ListItem = styled.li`
  text-decoration: none;
  list-style-type: none;
  padding: calc(5px + 0.3vw);
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  align-items: center;

  :hover {
    background-color: #f0f0f0;
  }

  a {
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

const List = ({ chapters, mangaId, mangaName }) => {
  const [mangaLimit, setMangaLimit] = useState(INITIAL_LIMIT);
  const [fChapters, setFChapters] = useState(chapters);

  const showMore = () => {
    setMangaLimit(mangaLimit + 100);
  };

  const chapterNumberFilter = [];
  let filterChapterNum = -1;
  while (filterChapterNum < getLastChapterNumber(chapters)) {
    let startingCount = filterChapterNum + 1;
    filterChapterNum = filterChapterNum + 100;
    chapterNumberFilter.push(startingCount + SEPARATOR + filterChapterNum);
  }

  const filterButtonClick = useCallback(
    (e, showAll) => {
      const filters = e.target.innerHTML.split(SEPARATOR);
      showAll
        ? setFChapters(chapters)
        : setFChapters(
            chapters.filter(
              c => parseFloat(c.number) > parseFloat(filters[0]) && parseFloat(c.number) < parseFloat(filters[1])
            )
          );
    },
    [setFChapters]
  );

  const Comparator = (a, b) => {
    if (a[2] < b[2]) return -1;
    if (a[2] > b[2]) return 1;
    return 0;
  };

  const sortAscDesc = () => {
    let aa = _.cloneDeep(fChapters);
    setFChapters(aa.reverse());
  };

  const FilterButtons = (
    <>
      <FilterButton onClick={() => sortAscDesc()} style={{ backgroundColor: "#222" }}>
        &#8645;
      </FilterButton>
      <FilterButton className="effect-bgc" onClick={e => filterButtonClick(e, true)}>
        All Chapters
      </FilterButton>
      {chapterNumberFilter.map((filter, index) => (
        <FilterButton className="effect-bgc" key={index} onClick={e => filterButtonClick(e, false)}>
          {filter}
        </FilterButton>
      ))}
    </>
  );

  return (
    <>
      <FilterButtonWrapper>{FilterButtons}</FilterButtonWrapper>
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
          <span onClick={showMore}>Show More &#x25BC;</span>
        </ShowMore>
      </ListWrapper>
    </>
  );
};

const dateFormat = lastUpdated => {
  let date = fromUnixTime(lastUpdated);
  return differenceInDays(new Date(), date) <= NO_OF_DAYS ? formatDistanceToNow(date) : format(date, "PP");
};

const getLastChapterNumber = chapters => {
  let chaplen = chapters.length;
  let firstValue = chapters[0].number;
  let lastValue = chapters[chaplen - 1].number;

  return firstValue > lastValue ? firstValue : lastValue;
};

export default List;
