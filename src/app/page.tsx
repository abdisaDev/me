import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Header from "@/components/layout/header";
import { FaGithub, FaGithubAlt } from "react-icons/fa";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <div className="flex flex-col justify-center items-center h-screen items-center dark:bg-grey-300 ">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-shadow-pop-tr text-center">
          Abdisa Alemu
        </h1>
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl focus-in-contract ">
          Devel
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href="https://github.com/developed-by-abdiza"
                  target="blank"
                >
                  <FaGithubAlt className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl inline jello-horizontal vibrate-1 " />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="sm:text-sm text-xs">
                Github
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          per.
        </p>
      </div>
    </Fragment>
  );
}
