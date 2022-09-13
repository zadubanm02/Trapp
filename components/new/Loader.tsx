import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Loader = () => {
  return (
    <Player
      src="https://assets1.lottiefiles.com/packages/lf20_myejiggj.json"
      className="player"
      loop
      autoplay
    />
  );
};

export default Loader;
