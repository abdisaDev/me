import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col justify-center  items-center h-screen items-center dark:bg-grey-300">
      <h1 className="text-9xl">Abdiza Alemu</h1>
      <p className="text-7xl">Developer.</p>
      <Button>
        <FaGithub className="text-xl" />
      </Button>
    </div>
  );
}
