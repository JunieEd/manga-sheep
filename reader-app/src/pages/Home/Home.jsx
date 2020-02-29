import { AutoComplete, Tag, Tooltip } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import _ from "lodash";
import React, { useCallback, useState } from "react";

import Search from "#src/antd/Search";
import MangaDetails from "./MangaDetails";

const query = gql`
  query($searchTitle: String!) {
    mangas(searchTitle: $searchTitle) {
      id
      image
      title
      status
    }
  }
`;

const MIN_QUERY_LENGTH = 3;
const THROTTLE_TIME = 500;

const STATUS_COLOR = {
  COMPLETED: "green",
  ONGOING: "blue",
  SUSPENDED: ""
};

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedManga, setSelectedManga] = useState(null);
  const { data, loading } = useQuery(query, {
    skip: searchQuery.length < MIN_QUERY_LENGTH,
    variables: { searchTitle: searchQuery }
  });

  const handleChange = useCallback(
    _.throttle(searchQuery => {
      setSearchQuery(searchQuery);
    }, THROTTLE_TIME),
    [setSearchQuery]
  );

  const dataSource =
    !loading &&
    data &&
    data.mangas.map(manga => (
      <AutoComplete.Option
        key={manga.id}
        //onClick={() => alert("asd")}
        value={manga.title}
      >
        <span
          className="home-search-option"
          onClick={() => setSelectedManga(manga)}
        >
          <Tooltip
            className="home"
            one
            mouseEnterDelay={0.8}
            placement="topLeft"
            title={manga.title}
          >
            <div className="home-search-option-title">{manga.title}</div>
          </Tooltip>
          <Tag
            className="home-search-option-status"
            color={STATUS_COLOR[manga.status]}
          >
            {manga.status}
          </Tag>
        </span>
      </AutoComplete.Option>
    ));

  return (
    <div className="main-search-container">
      <Search dataSource={dataSource} onChange={handleChange} />
      {selectedManga && <MangaDetails manga={selectedManga} />}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default Home;
