import { Button } from "@nextui-org/react";
import React from "react";
import { useFriends } from "../../hooks/useFriends";
import FriendRow from "../general/FriendRow";

const Friends = () => {
  const { friends, addNewFriend, error } = useFriends(
    "Hm0VkQCeq4hArDGCM88X42YZ3Ai2"
  );
  return (
    <>
      <div className=" shadow-xl border-lg w-80 m-5 p-8">
        <h1 className="text-2xl font-bold mb-4">Priatelia</h1>
        {/* <FriendRow name="Ja" value={5} me />
      <FriendRow name="Ferko" value={3} />
      <FriendRow name="Jozko" value={4} />
      <FriendRow name="Milan" value={-2} /> */}
        {friends &&
          friends.map((friend) => (
            <FriendRow
              key={friend.userId}
              name={friend.displayName}
              value={friend.value}
            />
          ))}
        <Button
          className="self-center justify-self-start	"
          color={"primary"}
          onClick={() => addNewFriend("qCCBiKp1fzNsacX1BA7rW8wVDnc2")}
        >
          Pozvat priatela
        </Button>
      </div>

      {error && <div>Error{JSON.stringify(error)}</div>}
    </>
  );
};

export default Friends;
