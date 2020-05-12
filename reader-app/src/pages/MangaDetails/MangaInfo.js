import React, { useState } from "react";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import html_entity_decode from "locutus/php/strings/html_entity_decode";

import styled from "styled-components";

import { Title } from "#src/components/Column";
import Image from "#src/components/Image";
import ReadMore from "./ReadMore";
import List from "./List";

const query = gql`
  query($mangaId: ID!) {
    manga(id: $mangaId) {
      id
      title
      info {
        artist
        author
        chapters {
          id
          lastUpdated
          number
          title
        }
        categories
        chapters_len
        description
        released
      }
      image
      status
    }
  }
`;

const BasicInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  justify-content: center;

  @media only screen and (min-width: 600px) {
    flex-wrap: nowrap;
  }
`;

const ImageContainer = styled.div`
  width: calc(180px + 5vw);
  padding: calc(8px + 0.3vw);
  border-radius: calc(10px + 0.1vw);
  min-width: 200px;
  background-color: white;
`;

const InfoWrapper = styled.div`
  padding-top: calc(10px + 0.1vw);
  width: 100%;
  display: flex;
  flex-flow: column wrap;

  @media only screen and (min-width: 600px) {
    flex-wrap: nowrap;
    padding: calc(10px + 0.1vw) calc(15px + 0.1vw);
  }
`;

const InfoRow = styled.div`
  display: flex;
  padding-top: calc(5px + 0.1vw);
  padding-bottom: calc(5px + 0.1vw);
  align-items: center;
  align-content: center;
`;

const InfoLabel = styled.div`
  width: calc(100px + 0.5vw);
  font-size: 0.9rem;
`;

const InfoValue = styled.div`
  font-weight: 600;
  width: 67%;
`;

const DescriptionWrapper = styled.div`
  margin-top: calc(10px + 0.5vw);
  width: 100%;

  p {
    text-align: justify;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: wrap;
  }
`;

const MangaTitle = styled(Title)`
  color: red !important;
  font-family: "Roboto" !important;
`;

const MangaInfo = ({ mangaId, mangaName }) => {
  const { data, loading } = useQuery(query, {
    variables: { mangaId },
  });

  return (
    !loading &&
    data && (
      <>
        <MangaTitle text={data.manga.title} route="" />
        <BasicInfoWrapper>
          <ImageContainer>
            <Image src={data.manga.image} />
          </ImageContainer>
          <InfoWrapper>
            <InfoRow>
              <InfoLabel>Released Year:</InfoLabel>
              <InfoValue>{data.manga.info.released}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Status:</InfoLabel>
              <InfoValue>{data.manga.status}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Categories:</InfoLabel>
              <InfoValue>{data.manga.info.categories.join(", ")}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Author(s):</InfoLabel>
              <InfoValue>{data.manga.info.author}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Artist(s):</InfoLabel>
              <InfoValue>{data.manga.info.artist}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Total Chapters:</InfoLabel>
              <InfoValue>{data.manga.info.chapters_len}</InfoValue>
            </InfoRow>
          </InfoWrapper>
        </BasicInfoWrapper>
        <DescriptionWrapper>
          <ReadMore text={data.manga.info.description} />
        </DescriptionWrapper>

        <Title text="Chapters" route="" />
        <div>
          {!loading && data.manga.info && (
            <List chapters={data.manga.info.chapters} mangaId={mangaId} mangaName={mangaName} />
          )}
        </div>
      </>
    )
  );
};

export default MangaInfo;
