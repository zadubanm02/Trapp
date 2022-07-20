import { Avatar, Text } from "@nextui-org/react";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center p-3 border-slate-100">
      <Avatar text="S" color="gradient" textColor="white" />
      <Image
        src={require("../../assets/Vector.jpg")}
        height={32}
        width={72}
        alt="Logo"
      />
      <Text></Text>
    </div>
  );
};

export default Navbar;
