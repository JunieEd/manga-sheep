import axios from "axios";
import "dotenv/config";
import cron from "node-cron";

import "#root/db/connection";
import Manga from "#root/db/models/Manga";
import { fetchAllMangas } from "#root/mangaSources/mangaEden";

const seed = async () => {
  const res = await fetchAllMangas("en");
  const mangas = res.data.manga;

  await Manga.insertMany(mangas);

  console.log("seeded");
};

seed();

//cron.schedule("0 * * * *", () => {
//  console.log("riunninggg");
//});
