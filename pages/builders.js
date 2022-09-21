import React from "react";
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
      <Header />
      <div className="bold flex font-sans text-2xl ml-5 mt-4">
        How I help fellow builders
      </div>
      {renderBuilderOptions(builderRequests)}
    </>
  );
}
