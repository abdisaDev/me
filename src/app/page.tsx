import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub, FaGithubAlt } from "react-icons/fa";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <div className="flex flex-col justify-center  items-center h-screen items-center dark:bg-grey-300">
      <h1 className="text-9xl text-shadow-pop-tr">Abdisa Alemu</h1>
      <p className="text-7xl focus-in-contract">
        Devel
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href="https://github.com/developed-by-abdiza"
                target="blank"
              >
                <FaGithubAlt className="text-6xl inline jello-horizontal vibrate-1" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom">My Github</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        per.
      </p>
    </div>
  );
}
