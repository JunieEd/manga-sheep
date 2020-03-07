import React from "react";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import "./MangaCard.less";

// const query = gql`
//   query($mangaId: ID!) {
//     manga(id: $mangaId) {
//       id
//       info {
//         chapters {
//           id
//           title
//         }
//       }
//     }
//   }
// `;

const MangaCard = ({ manga }) => {
  // console.log(manga);
  // const { loading, error, data } = useQuery(query, {
  //   variables: { mangaId: manga.id }
  // });

  //console.log(`error - ${error}`);

  //if (loading) return <h1>Loading</h1>;
  //console.log(data);

  const latestChapter = manga.info.chapters.sort()[0];

  console.log(latestChapter.title);

  return (
    <div className="manga-container">
      <Link to="/">
        <div className="manga-image-container">
          <img
            className="manga-image"
            referrerPolicy="no-referrer"
            src={manga.image}
          />
        </div>
      </Link>
      <div className="manga-title-container">
        <Link to="/">
          <span className="manga-title">{manga.title ? manga.title : "-"}</span>
        </Link>
      </div>
      <div className="manga-author">
        <span>{manga.info.author}</span>
      </div>
      <div className="manga-status">
        <span>{manga.status}</span>
      </div>
      <div className="manga-latest-chapter">
        <span style={{ fontStyle: "Light" }}>Latest: </span>
        <Link to="/">
          <span>{latestChapter.title}</span>
        </Link>
      </div>
    </div>
  );
};

export default MangaCard;
