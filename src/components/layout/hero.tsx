import Link from "next/link";
import { FaGithub, FaGithubAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import BluryBox from "../styles/blury-box";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <BluryBox />

      <div className="flex flex-col justify-center items-center h-screen items-center dark:bg-grey-300 backdrop-blur-lg">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-shadow-pop-tr text-center">
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
        <p className="mt-7 mb-1">Connect with me</p>
        <hr className="w-64 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href="https://github.com/developed-by-abdiza"
                  target="blank"
                >
                  <FaGithub className="text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl inline jello-horizontal vibrate-1 mr-3" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="sm:text-sm text-xs">
                Github
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href="https://twitter.com/abdisaDev" target="blank">
                  <FaXTwitter className="text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl inline jello-horizontal vibrate-1 " />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="sm:text-sm text-xs">
                X
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};
export default Hero;
