import React from "react";
import Image from "next/image";

export default function RequestCard(brandRequest) {
  return (
    <div className="lg:flex m-5">
      <Image
        src={brandRequest.image}
        alt={brandRequest.requestName}
        width={250}
        height={250}
      />

      <div className="border-r border-b border-s border-gray-100 lg:border-l-0 lg:border-t lg:border-gray-100 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {brandRequest.requestName}
          </div>
          <p className="text-gray-700 text-base">
            {brandRequest.requestDescription}
          </p>
          <a
            href={brandRequest.requestLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {brandRequest.requestCta}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
