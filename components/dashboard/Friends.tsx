import React from "react";
import FriendRow from "../general/FriendRow";

const Friends = () => {
  return (
    <div className=" shadow-xl border-lg w-80 m-5 p-8">
      <h1 className="text-2xl font-bold mb-4">Priatelia</h1>
      <FriendRow name="Ja" value={5} me />
      <FriendRow name="Ferko" value={3} />
      <FriendRow name="Jozko" value={4} />
      <FriendRow name="Milan" value={-2} />
    </div>
  );
};

export default Friends;
