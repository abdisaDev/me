import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <div className="bg-zinc-900 dark:bg-zinc-200 w-3/6 h-14 mx-auto rounded-br-lg rounded-bl-lg flex justify-center items-center ">
      <Avatar>
        <AvatarImage src="https://github.com/developed-by-abdiza.png" />
        <AvatarFallback>ME</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Header;
