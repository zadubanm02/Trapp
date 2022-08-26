import { Avatar, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const { logOut } = useAuth();
  return (
    <div className="flex flex-row justify-between items-center p-3 border-slate-100 bg-white">
      <Avatar text="S" color="gradient" textColor="white" />
      <Image
        src={require("../../assets/Vector.jpg")}
        height={32}
        width={72}
        alt="Logo"
      />
      <Button onPress={() => logOut()}>Log out</Button>
    </div>
  );
};

export default Navbar;
