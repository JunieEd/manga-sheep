import React, { useContext } from "react";
import BookmarkedMangaContext from "#src/contexts/BookmarkedMangaContext";
import styled from "styled-components";

import Ads from "#src/components/Ads";
import TopManga from "#src/components/TopManga";
import { Title } from "#src/components/Column";
import SavedMangaList from "./SavedMangaList";
import { Breadcrumb_Custom as Breadcrumb } from "#src/components/Breadcrumb";

const SavedManga = ({ location }) => {
  const { bookmarkedManga } = useContext(BookmarkedMangaContext);

  const breadcrumbItems = [
    { to: "/", label: "Home" },
    { to: `${location.pathname}`, label: "Saved Manga" },
  ];

  return (
    <div className="container">
      <Breadcrumb items={breadcrumbItems} />
      <div className="row">
        <div className="col col-1">
          <Ads />
          <Title text="Saved Manga" route="" />
          <SavedMangaList mangaIds={bookmarkedManga} />
          <Ads />
        </div>
        <div className="col col-2">
          <Ads />
          <Title text="TOP MANGA" route="/mangalist" />
          <TopManga />
          <Ads />
        </div>
      </div>
    </div>
  );
};

export default SavedManga;
