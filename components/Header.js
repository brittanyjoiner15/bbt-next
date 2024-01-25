import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";

import logo from "./../images/brittany-joiner.png";
import twitter from "./../images/twitter.png";
import youtube from "./../images/youtube.png";
import github from "./../images/github.png";
import coffee from "../images/coffee.png";
import slack from "../images/slack.png";
import podium from "../images/podium.png";

export default function Header() {
  return (
    <div className="flex p-3 bg-violet-50">
      <div className="flex flex-none">
        <Link href="/">
          <Image src={logo} width={50} height={50} alt="tools" />
        </Link>
      </div>
      <div className="flex flex-1 justify-end space-x-3 ">
        <Tooltip
          content={"Follow me on Twitter"}
          contentColor="primary"
          placement="bottom"
        >
          <a
            href="https://twitter.com/britt_joiner"
            rel="noopener noreferrer"
            target={"_blank"}
          >
            <Image
              alt="twitterLogo"
              className="hover:opacity-60"
              height={40}
              src={twitter}
              width={40}
            />
          </a>
        </Tooltip>
        <Tooltip
          content={"Come build with me in slack"}
          contentColor="error"
          placement="bottom"
        >
          <a
            href="https://join.slack.com/t/build-with-britt/shared_invite/zt-1ew1pk4w7-sVTSOA4QSA1B6kOpMUBE_A"
            rel="noopener noreferrer"
            target={"_blank"}
          >
            <Image
              alt="slackLogo"
              className="hover:opacity-60"
              height={40}
              src={slack}
              width={40}
            />
          </a>
        </Tooltip>
        <Tooltip
          content={"Watch my videos"}
          contentColor="error"
          placement="bottom"
        >
          <a
            href="https://www.youtube.com/c/brittanyjoiner"
            rel="noopener noreferrer"
            target={"_blank"}
          >
            <Image
              alt="youtubeLogo"
              className="hover:opacity-60"
              height={40}
              src={youtube}
              width={40}
            />
          </a>
        </Tooltip>
        <Tooltip
          content={"View my projects"}
          contentColor="success"
          placement="bottom"
        >
          <a
            href="https://github.com/brittanyjoiner15"
            rel="noopener noreferrer"
            target={"_blank"}
          >
            <Image
              alt="githubLogo"
              className="hover:opacity-60"
              height={40}
              src={github}
              width={40}
            />
          </a>
        </Tooltip>
        <Tooltip
          content={"Buy me a coffee"}
          contentColor="primary"
          placement="bottom"
        >
          <a
            href="https://www.buymeacoffee.com/brittanyjoiner/"
            rel="noopener noreferrer"
            target={"_blank"}
          >
            <Image
              alt="coffeeCup"
              className="hover:opacity-60"
              height={40}
              src={coffee}
              width={40}
            />
          </a>
        </Tooltip>
        <Tooltip
          content={"Hire me to speak!"}
          contentColor="primary"
          placement="bottom"
        >
          <a
            href="https://trello.com/b/GQoP1k9B/hire-brittany-to-speak"
            rel="noopener noreferrer"
            target={"_blank"}
          >
            <Image
              alt="podium"
              className="hover:opacity-60"
              height={40}
              src={podium}
              width={40}
            />
          </a>
        </Tooltip>
        <a
          href="https://trello.substack.com/"
          rel="noopener noreferrer"
          target={"_blank"}
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sub to my Newsletter
          </button>
        </a>
      </div>
    </div>
  );
}
