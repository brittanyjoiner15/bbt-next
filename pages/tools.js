import React from "react";
import TechCard, { ProjectCard, CodeCard } from "../components/TechStackCard";
import { techStack, myProjects, codeTechStack } from "../components/Data";
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
        <title>BBT | Tools</title>
        <meta name="description" content="Here's what's in my toolbox." />
        <link rel="icon" href="/logo.png" />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      <Header />
      <div className="text-2xl bold mx-5">What&apos;s in my Code Toolbox?</div>
      <div className="grid grid-cols-1 md:grid-cols-6 m-5 p-5 rounded overflow-hidden shadow-lg">
        {renderCodeCard(codeTechStack)}
      </div>
      <div className="text-2xl bold mx-5">
        What&apos;s in my No/Low Code Toolbox?
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 m-5 p-5 rounded overflow-hidden shadow-lg">
        {renderTools(techStack)}
      </div>
      <iframe
            src="https://app.fillout.com/t/4u62vphZNJus"
            width="100%"
            height="500px"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="tool submit"
          >
            {" "}
          </iframe>
      
    </>
  );
}
