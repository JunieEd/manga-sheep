import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date

  enum MangaStatus {
    Suspended
    Ongoing
    Completed
  }

  type Chapter {
    id: ID!
    lastUpdated: Date!
    images: [ChapterImage!]!
    number: String!
    title: String
  }

  type ChapterImage {
    url: String!
    height: Int!
    width: Int!
  }

  type Manga {
    id: ID!
    info: MangaInfo!
    image: String
    lastUpdated: Date!
    status: MangaStatus
    title: String!
  }

  type MangaInfo {
    author: String
    chapters: [Chapter!]!
    description: String!
    id: String!
  }

  type Query {
    manga(id: ID!): Manga!
    chapter(id: ID!): Chapter!
    mangas(
      searchTitle: String
      topUpdates: Boolean
      allUpdates: Boolean
      topManga: Boolean
      first: Int
    ): [Manga!]!
  }
`;

export default typeDefs;
