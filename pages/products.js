import React from "react";
import TechCard, { ProjectCard, CodeCard } from "../components/TechStackCard";
import {  myProjects , myPremiumProjects } from "../components/Data";
import Header from "../components/Header";
import Head from "next/head";

export const renderTools = (techStack) => {
  return techStack.map((tool) => {
    return <TechCard {...tool} key={tool.name} />;
  });
};

export const renderProjects = (myProjects) => {
  return myProjects.map((tool) => {
    return <ProjectCard {...tool} key={tool.name} />;
  });
};

export const renderCodeCard = (codeTechStack) => {
  return codeTechStack.map((tool) => {
    return <CodeCard {...tool} key={tool.name} />;
  });
};

// can i combine componets? what if this uses polaris like tech out my stack

export default function TechStackList() {
  return (
    <>
      <Head>
        <title>BBT | Products</title>
        <meta name="description" content="Here's what I've built!" />
        <link rel="icon" href="/logo.png" />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      <Header />
      <div className="text-2xl bold mx-5">Premium Products</div>
      <div className="grid grid-cols-1 md:grid-cols-4 m-5 p-5 rounded overflow-hidden shadow-lg">
        {renderProjects(myPremiumProjects)}
      </div>
      <div className="text-2xl bold mx-5">My Projects</div>
      {/* // Do I wanna break this out by tool? Use case? Something else? Or just use tags? */}
      <div className="grid grid-cols-1 md:grid-cols-4 m-5 p-5 rounded overflow-hidden shadow-lg">
        {renderProjects(myProjects)}
      </div>
    </>
  );
}
