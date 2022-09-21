import React from "react";
import ToolCard from "../components/TechStackCard";
import { techStack, myToolsStack } from "../components/Data";
import Header from "../components/Header";

export const renderCards = (techStack) => {
  return techStack.map((tool) => {
    return <ToolCard {...tool} key={tool.name} />;
  });
};

// can i combine componets? what if this uses polaris like tech out my stack

export default function TechStackList() {
  return (
    <>
      <Header />
      <div className="text-2xl bold mx-5">What have I built?</div>
      {/* // Do I wanna break this out by tool? Use case? Something else? Or just use tags? */}
      <div className="grid grid-cols-1 md:grid-cols-4 m-5 p-5 rounded overflow-hidden shadow-lg">
        {renderCards(myToolsStack)}
      </div>
      <div className="text-2xl bold mx-5">What&apos;s in my Toolbox?</div>
      <div className="grid grid-cols-1 md:grid-cols-4 m-5 p-5 rounded overflow-hidden shadow-lg">
        {renderCards(techStack)}
      </div>
    </>
  );
}
