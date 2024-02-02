import { Input } from "@/components/ui/input";
import { useState } from "react";
const InputField = () => {
  const [userName, setUserName] = useState("");

  return (
    <div className="w-1/4">
      <Input value={userName} placeholder="Enter Your Full Name" />
    </div>
  );
};

export default InputField;
