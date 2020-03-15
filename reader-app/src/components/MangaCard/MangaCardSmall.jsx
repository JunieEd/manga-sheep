import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import "./MangaCardSmall.css";

// import gql from "graphql-tag";
// import { useQuery } from "@apollo/react-hooks";

// const query = gql`
//   query($mangaId: ID!) {
//     manga(id: $mangaId) {
//       id
//       info {
//         chapters {
//           id
//           title
//         }
//         description
//       }
//     }
//   }
// `;

const MangaCardSmall = ({ manga }) => {
  // console.log("mangaid1-" + manga.id);

  // const { loading, error, data } = useQuery(query, {
  //   variables: { mangaId: manga.id }
  // });

  // console.log("err- " + error);
  // if (loading && !data) return <div>loading</div>;

  // console.log("mangaid- " + data.manga.id);

  //const latestChapter = data.manga.info.chapters.sort()[0];

  return (
    <div className="manga-card-small">
      <Link to="/">
        <div className="manga-card-small-image-container">
          <img
            className="manga-card-small-image"
            referrerPolicy="no-referrer"
            src={manga.image}
          />
        </div>
      </Link>

      <div className="manga-card-small-info-container">
        <div className="child">
          <div className="manga-card-small-title-container">
            <h3 className="manga-card-small-title">
              {manga.title ? manga.title : "-"}
            </h3>
          </div>
          {/* <div className="manga-author">
            <span>{_.startCase(_.lowerCase(manga.info.author))}</span>
          </div> */}
          <div className="manga-status">
            <span>{manga.status}</span>
          </div>
          {/* <div className="manga-latest-chapter">
            <span style={{ fontStyle: "Light" }}>Latest: </span>
            <Link to="/">
              <span>{latestChapter.title}</span>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MangaCardSmall;
