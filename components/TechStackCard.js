import React from "react";
import Image from "next/image";
import github from "./../images/gh.png";

const renderTags = (tags) => {
  return tags.map((tag) => {
    return (
      <span
        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        key={tag}
      >
        {tag}
      </span>
    );
  });
};

const tryItOutButton = (link) => {
  if (link) {
    return (
      <a href={link} rel="noopener noreferrer" target={"_blank"}>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-2 w-full">
          Try It Out
        </button>
      </a>
    );
  } else {
    return null;
  }
};

export function ProjectCard(project) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 p-5">
      <Image
        src={project.logo}
        alt={`${project.name} logo`}
        width={400}
        height={300}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 lg:h-16">{project.name}</div>
        <p className="text-gray-700 text-base lg:h-28">{project.description}</p>
        {tryItOutButton(project.learnLink)}
      </div>
      <div>
        <div className="px-6 pt-4 pb-2 h-9">{renderTags(project.tags)}</div>
        <div className="flex flex-1 justify-end">
          <a href={project.repo} rel="noopener noreferrer" target={"_blank"}>
            <Image src={github} alt="twitter logo" width={40} height={40} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function TechCard(tool) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 p-5">
      <Image src={tool.logo} alt={`${tool.name} logo`} width={96} height={96} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{tool.name}</div>
        <p className="text-gray-700 text-base h-36">{tool.description}</p>
      </div>
      {tryItOutButton(tool.learnLink)}
      <div className="px-6 pt-4 pb-2">{renderTags(tool.tags)}</div>
    </div>
  );
}

export function CodeCard(tool) {
  return (
    <div className="max-w-sm m-5 p-5">
      <Image src={tool.logo} alt={`${tool.name} logo`} width={96} height={96} />
    </div>
  );
}
