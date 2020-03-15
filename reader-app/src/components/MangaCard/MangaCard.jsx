import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import "./MangaCard.css";

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

const STATUS_COLOR = {
  Completed: "#5B8C5A",
  Ongoing: "#4A47A3",
  Suspended: "gray"
};

const MangaCard = ({ manga }) => {
  // console.log("mangaid1-" + manga.id);

  // const { loading, error, data } = useQuery(query, {
  //   variables: { mangaId: manga.id }
  // });

  // console.log("err- " + error);
  // if (loading && !data) return <div>loading</div>;

  // console.log("mangaid- " + data.manga.id);

  //const latestChapter = data.manga.info.chapters.sort()[0];
  console.log(STATUS_COLOR[manga.status]);
  return (
    <div className="mcc flip-card">
      <div className="flip-card-inner">
        <div className="manga-card-front flip-card-front">
          <img
            className="manga-card-front-image"
            referrerPolicy="no-referrer"
            src={manga.image}
          />

          <span
            className="manga-card-front-status"
            style={{ backgroundColor: `${STATUS_COLOR[manga.status]}` }}
          >
            {manga.status}
          </span>

          <div className="manga-card-front-title-container">
            <span className="manga-card-front-title">
              {manga.title ? manga.title : "-"}
            </span>
          </div>
        </div>
        <div className="manga-card-back flip-card-back">
          {" "}
          {/* <div className="manga-card-author">
        <span>{_.startCase(_.lowerCase(data.manga.info.author))}</span>
      </div> */}
          {/* <div className="manga-infos-container">
        <span>{manga.status}</span>
      </div> */}
          {/* <div className="manga-card-latest-chapter">
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

export default MangaCard;
