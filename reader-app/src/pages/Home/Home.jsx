import { AutoComplete, Tag, Tooltip } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import _ from "lodash";
import React, { useCallback, useState } from "react";

import Search from "#src/antd/Search";
import MangaDetails from "./MangaDetails";
import MangaCard from "#src/components/MangaCard/MangaCard";

import "./Home.less";

// const query = gql`
//   query($searchTitle: String!) {
//     mangas(searchTitle: $searchTitle) {
//       id
//       image
//       title
//       status
//     }
//   }
// `;

const query2 = gql`
  query($topUpdates: Boolean!, $first: Int) {
    mangas(topUpdates: $topUpdates, first: $first) {
      id
      image
      info {
        author
        chapters {
          id
          title
          lastUpdated
        }
      }
      title
      status
    }
  }
`;

//const MIN_QUERY_LENGTH = 3;
//const THROTTLE_TIME = 500; //this is not included

// const STATUS_COLOR = {
//   COMPLETED: "green",
//   ONGOING: "blue",
//   SUSPENDED: ""
// };

const Home = () => {
  // const [searchQuery, setSearchQuery] = useState("");
  // const [selectedManga, setSelectedManga] = useState(null);
  // const { data, loading } = useQuery(query, {
  //   skip: searchQuery.length < MIN_QUERY_LENGTH,
  //   variables: { searchTitle: searchQuery }
  // });
  //
  const NUMBER_OF_TOP_UPDATES = 5;
  const { loading, error, data } = useQuery(query2, {
    variables: { topUpdates: true, first: NUMBER_OF_TOP_UPDATES }
  });

  //  console.log(error2);
  // console.log(data2);
  //  console.log(loading2);
  // const handleChange = useCallback(
  //   _.throttle(searchQuery => {
  //     setSearchQuery(searchQuery);
  //   }, THROTTLE_TIME),
  //   [setSearchQuery]
  // );

  // const dataSource =
  //   !loading &&
  //   data &&
  //   data.mangas.map(manga => (
  //     <AutoComplete.Option
  //       key={manga.id}
  //       //onClick={() => alert("asd")}
  //       value={manga.title}
  //     >
  //       <span
  //         className="home-search-option"
  //         onClick={() => setSelectedManga(manga)}
  //       >
  //         <Tooltip
  //           className="home"
  //           one
  //           mouseEnterDelay={0.8}
  //           placement="topLeft"
  //           title={manga.title}
  //         >
  //           <div className="home-search-option-title">{manga.title}</div>
  //         </Tooltip>
  //         <Tag
  //           className="home-search-option-status"
  //           color={STATUS_COLOR[manga.status]}
  //         >
  //           {manga.status}
  //         </Tag>
  //       </span>
  //     </AutoComplete.Option>
  //   ));

  // <div className="main-search-container">
  //   <Search dataSource={dataSource} onChange={handleChange} />
  //   {selectedManga && <MangaDetails manga={selectedManga} />}
  //   {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
  // </div>

  if (loading) return <h1>loading</h1>;

  return (
    <div className="main-container">
      <div className="main-col-container">
        <div className="main-col-1 col">
          {/* POPULAR MANGA UPDATES */}
          <div className="main-col-1-title-container">
            <span className="main-col-1-title">POPULAR MANGA UPDATES</span>
          </div>
          <div className="main-mangas-container">
            {!loading &&
              data &&
              data.mangas.map(manga => (
                <MangaCard className="manga-box" key={manga.id} manga={manga} />
              ))}
          </div>
          {/* ALL UPDATES */}
          <div className="main-col-1-title-container">
            <span className="main-col-1-title">ALL UPDATES</span>
          </div>
          <div className="main-mangas-container">
            {!loading &&
              data &&
              data.mangas.map(manga => (
                <MangaCard className="manga-box" key={manga.id} manga={manga} />
              ))}
          </div>
        </div>
        <div className="main-col-2 col">sample 2 </div>
      </div>
    </div>
  );
};

export default Home;
