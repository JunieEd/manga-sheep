import React from "react";
import styled from "styled-components";
//import AdSense from "react-adsense";

const AdsWrapper = styled.div`
  height: 150px;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Ads = () => (
  //   <AdSense.Google
  //     client="ca-pub-7292810486004926"
  //     slot="7806394673"
  //     style={{ display: "block" }}
  //     format="auto"
  //     responsive="true"
  //     layoutKey="-gw-1+2a-9x+5c"
  //   />;

  <AdsWrapper>Ads here</AdsWrapper>
);

export default Ads;
