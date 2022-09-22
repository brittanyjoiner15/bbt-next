import React from "react";
import Image from "next/image";

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

export default function ToolCard(tool) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 p-5">
      <Image src={tool.logo} alt={`${tool.name} logo`} width={96} height={96} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{tool.name}</div>
        <p className="text-gray-700 text-base h-36">{tool.description}</p>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-2 w-full">
          Try It Out
        </button>
      </div>

      <div className="px-6 pt-4 pb-2">{renderTags(tool.tags)}</div>
    </div>
  );
}
