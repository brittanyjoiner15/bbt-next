import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";

import logo from "./../images/logo-square.png";
import twitter from "./../images/twitter.png";
import youtube from "./../images/youtube.png";
import github from "./../images/github.png";
import coffee from "../images/coffee.png";

export default function Header() {
  return (
    <div className="flex p-3 bg-zinc-100">
      <div className="flex flex-none">
        <Link href="/">
          <Image src={logo} width={50} height={50} />
        </Link>
      </div>
      <div className="flex flex-1 justify-end space-x-3 ">
        <Tooltip
          content={"Follow me on Twitter"}
          contentColor="primary"
          placement="bottom"
        >
          <Link
            href="https://twitter.com/britt_joiner"
            target={"_blank"}
            className="hover:opacity-60"
          >
            <Image src={twitter} width={40} height={40} />
          </Link>
        </Tooltip>
        <Tooltip
          content={"Watch my videos"}
          contentColor="error"
          placement="bottom"
        >
          <Link
            href="https://www.youtube.com/c/brittanyjoiner"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <Image
              src={youtube}
              width={40}
              height={40}
              className="hover:opacity-60"
            />
          </Link>
        </Tooltip>
        <Tooltip
          content={"View my projects"}
          contentColor="success"
          placement="bottom"
        >
          <Link
            href="https://github.com/brittanyjoiner15"
            target={"_blank"}
            className="hover:opacity-60"
            rel="noopener noreferrer"
          >
            <Image src={github} width={40} height={40} />
          </Link>
        </Tooltip>
        <Tooltip
          content={"Buy me a coffee"}
          contentColor="primary"
          placement="bottom"
        >
          <Link
            href="https://www.buymeacoffee.com/brittanyjoiner/"
            target={"_blank"}
            className="hover:opacity-60"
            rel="noopener noreferrer"
          >
            <Image src={coffee} width={40} height={40} />
          </Link>
        </Tooltip>
        {/* Omit this for now */}
        {/* <a href="/talks" target={"_blank"} className="hover:opacity-60">
          <Image src="/./podium.png" width={40} height={40} />
        </Link> */}
        <Link
          href="https://app.snoopforms.com/f/ESOGk7ZU/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sub to my Newsletter
          </button>
        </Link>
      </div>
    </div>
  );
}
