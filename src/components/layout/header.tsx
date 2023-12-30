import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BiSolidDownload } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex justify-center mt-4 bg-transparent">
      <Tabs className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="resume">Resume</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="blogs">Blogs</TabsTrigger>
        </TabsList>
        <TabsContent value="resume">
          <TabsList>
            <TabsTrigger value="download">
              <BiSolidDownload className="text-xl inline jello-horizontal" />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="download">TESt</TabsContent>
          <TabsContent value="download"></TabsContent>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Header;
