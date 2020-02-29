import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";

import resolvers from "#root/graphql/resolvers";
import typeDefs from "#root/graphql/typeDefs";

const port = process.env.PORT || 3100;

const apolloServer = new ApolloServer({
  resolvers,
  typeDefs
});

const app = express();

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true
  })
);

apolloServer.applyMiddleware({
  app,
  cors: false,
  path: "/graphql"
});

app.all("*", (req, res) => {
  res.status(404).json({ status: "Missing endpoint" });
});

app.listen(port, "0.0.0.0", () => console.log(`Services listening to ${port}`));
