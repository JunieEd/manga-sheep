import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fromUnixTime, differenceInDays, formatDistanceToNow, format } from "date-fns";
import _ from "lodash";
import ReadChaptersContext from "#src/contexts/ReadChaptersContext";

import FilterButtons from "./FilterButtons";
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
      color: var(--global-dark-red-color);
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

const NO_OF_DAYS = 2;
const INITIAL_LIMIT = 10;
const ALL_CHAPTERS = "All Chapters";

const List = ({ chapters, mangaId, mangaName }) => {
  const { isChapterRead } = useContext(ReadChaptersContext);
  const [mangaLimit, setMangaLimit] = useState(INITIAL_LIMIT);
  const [selectedFilter, setSelectedFilter] = useState(ALL_CHAPTERS);
  const [isAsc, setIsAsc] = useState(false);
  const [fChapters, setFChapters] = useState([]);
  const [isShowMore, setIsShowMore] = useState(true);

  useEffect(() => {
    //workaround to setting up Props Value into State - which is bad
    if (chapters !== fChapters) {
      setFChapters(chapters);
    }
  }, [chapters]);

  const showMore = (x) => {
    let limit = x ? fChapters.length : INITIAL_LIMIT;
    setMangaLimit(limit);
    setIsShowMore(!x);
  };

  // &#8645;
  return (
    <>
      <FilterButtons
        chapters={chapters}
        selectedFilter={selectedFilter}
        allChapter={ALL_CHAPTERS}
        isAsc={isAsc}
        setIsAsc={setIsAsc}
        fChapters={fChapters}
        setFChapters={setFChapters}
        setSelectedFilter={setSelectedFilter}
      />

      <ListWrapper>
        {chapters &&
          fChapters.slice(0, mangaLimit).map((chapter, index) => (
            <ListItem
              key={index}
              className={isChapterRead({ mangaId: mangaId, chapterId: chapter.id }) ? "chapter-read" : ""}
            >
              <Link to={`/${mangaId}-${mangaName}/${chapter.id}-chapter-${chapter.number.replace(".", "-")}`}>
                {"Chapter " +
                  chapter.number +
                  (chapter.title && chapter.title != chapter.number ? " : " + chapter.title : "")}
              </Link>
              <span>{dateFormat(chapter.lastUpdated)}</span>
            </ListItem>
          ))}
        {fChapters.length > INITIAL_LIMIT && (
          <ShowMore>
            {isShowMore ? (
              <span onClick={() => showMore(true)}>Show More &#x25BC;</span>
            ) : (
              <span onClick={() => showMore(false)}>Show Less &#x25B2;</span>
            )}
          </ShowMore>
        )}
      </ListWrapper>
    </>
  );
};

const dateFormat = (lastUpdated) => {
  let date = fromUnixTime(lastUpdated);
  return differenceInDays(new Date(), date) <= NO_OF_DAYS ? formatDistanceToNow(date) : format(date, "PP");
};

export default List;
