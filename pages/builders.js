import React from "react";
import Head from "next/head";
import RequestCard from "../components/RequestCard";
import { builderRequests } from "../components/Data";
import Header from "../components/Header";

export const renderBuilderOptions = (builderRequests) => {
  return builderRequests.map((builderRequest) => {
    return <RequestCard {...builderRequest} key={builderRequest.requestName} />;
  });
};

export default function Brands() {
  return (
    <>
      <Head>
        <title>BBT | Builders</title>
        <meta name="description" content="Here's how I work with builders." />
        <link rel="icon" href="/logo.png" />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      <Header />

      {renderBuilderOptions(builderRequests)}
    </>
  );
}
