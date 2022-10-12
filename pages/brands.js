import React from "react";
import RequestCard from "../components/RequestCard";
import { brandRequests } from "../components/Data";
import Header from "../components/Header";

export const renderBrandOptions = (brandsRequests) => {
  return brandsRequests.map((brandRequest) => {
    return <RequestCard {...brandRequest} key={brandRequest.requestName} />;
  });
};

export default function Brands() {
  return (
    <div>
      <Head>
        <title>BBT | Brands</title>
        <meta name="description" content="Here's how I work with brands." />
        <link rel="icon" href="/logo.png" />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      <Header />
      <div className="bold flex font-sans text-2xl ml-5 mt-4">
        How I help brands
      </div>
      {renderBrandOptions(brandRequests)}
    </div>
  );
}
