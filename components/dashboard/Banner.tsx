import { Avatar, Text } from "@nextui-org/react";
import React from "react";

const Banner = () => {
  return (
    <div className="w-80 h-80 p-8 mx-5 flex-col justify-center flex align-center border-xl  shadow-xl ">
      <h2 className="font-bold my-2 text-4xl text-center">Ako si na tom ?</h2>
      <p className="text-center my-3">Zaostavas</p>
      <Text
        color="primary"
        size={48}
        className="self-center bg-blue-200 py-5 px-7 rounded-full"
      >
        10
      </Text>
    </div>
  );
};

export default Banner;
