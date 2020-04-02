import React from "react";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import html_entity_decode from "locutus/php/strings/html_entity_decode";

const query = gql`
  query($mangaId: ID!) {
    manga(id: $mangaId) {
      id
      info {
        chapters {
          id
          title
        }
        description
      }
      image
    }
  }
`;

const MangaDetails = ({
  match: {
    params: { mangaId, mangaName }
  }
}) => {
  const { data, loading } = useQuery(query, {
    variables: { mangaId }
  });

  console.log(mangaId);
  console.log(mangaName);

  if (loading) return <div>Loading</div>;

  console.log(data.manga.image);

  return (
    <div>
      <div>
        <img className="manga-details-image" referrerPolicy="no-referrer" src={data.manga.image} />
      </div>

      <div>
        <p>{html_entity_decode(data.manga.info.description)}</p>
      </div>

      <div>
        <ul>
          {!loading &&
            data.manga.info &&
            data.manga.info.chapters.map((chapter, index) => (
              <li key={chapter.id}>
                <Link to={`/${mangaId}-${mangaName}/${chapter.id}`}>
                  {String(data.manga.info.chapters.length - index + 1).padStart(
                    data.manga.info.chapters.length.toString().length,
                    "0"
                  )}{" "}
                  - {chapter.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MangaDetails;
