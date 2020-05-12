import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import MangaGrid from "#src/components/MangaGrid";
import { getUnixTime, subHours } from "date-fns";

const NUMBER_OF_TOP_UPDATES = 6;
const LATEST_HOUR_RANGE = 48;

const query = gql`
  query($topUpdates: Boolean!, $first: Int!, $fromDate: Int!, $toDate: Int!) {
    mangas(topUpdates: $topUpdates, first: $first, toDate: $toDate, fromDate: $fromDate) {
      id
      image
      title
      status
    }
  }
`;

const PopularMangaUpdates = () => {
  const { loading, error, data } = useQuery(query, {
    variables: {
      topUpdates: true,
      first: NUMBER_OF_TOP_UPDATES,
      fromDate: getUnixTime(subHours(new Date(), LATEST_HOUR_RANGE)),
      toDate: getUnixTime(new Date()),
    },
  });

  return <MangaGrid noOfMangas={NUMBER_OF_TOP_UPDATES} loading={loading} mangas={!loading && data && data.mangas} />;
};

export default PopularMangaUpdates;
