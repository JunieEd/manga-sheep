import React from "react";

const Manga = ({ match }) => {
  return <pre>{JSON.stringify(match.params, null, 2)}</pre>;
};

export default Manga;
