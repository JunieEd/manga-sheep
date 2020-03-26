import { Link } from "react-router-dom";
import _ from "lodash";
import React from "react";

import Ads from "#src/components/Ads/Ads";
import AllUpdates from "#src/components/AllUpdates/AllUpdates";
import PopularMangaUpdates from "#src/components/PopularMangaUpdates/PopularMangaUpdates";
import TopManga from "#src/components/TopManga/TopManga";

import "./Home.css";

const viewAll_Comp = <span className="view-all">View All</span>;

const Home = () => {
  return (
    <div className="main-container">
      <div className="main-col-1 col">
        <div className="main-col-title-container">
          <span className="main-col-title">POPULAR MANGA UPDATES</span>
          <div className="spacer"></div>
          <Link to="/mangalist">{viewAll_Comp}</Link>
        </div>
        <div className="main-mangas-container">
          <PopularMangaUpdates />
        </div>

        <div className="main-col-title-container">
          <span className="main-col-title">ALL UPDATES</span>
          <div className="spacer"></div>
          <Link to="/">{viewAll_Comp}</Link>
        </div>
        <div className="main-mangas-container">
          <AllUpdates />
        </div>
      </div>

      <div className="main-col-2 col">
        <Ads />
        <div className="main-col-title-container">
          <span className="main-col-title">TOP MANGA</span>
          <div className="spacer"></div>
          <Link to="/">{viewAll_Comp}</Link>
        </div>
        <div className="side-mangas-container">
          <TopManga />
        </div>
      </div>
    </div>
  );
};

export default Home;
