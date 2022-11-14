import React, { Suspense, useState } from "react";
import Navbar from "../../components/general/Navbar";
import { NextPage } from "next";
import { useFriends } from "../../hooks/useFriends";
import RowFriend from "../../components/new/RowFriend";

// const Calendar = dynamic(() => import("react-calendar"), {
//   suspense: true,
// });

const FriendsPage: NextPage = () => {
  const { friends, addNewFriend, error } = useFriends(
    "Hm0VkQCeq4hArDGCM88X42YZ3Ai2"
  );
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-5">
        <div></div>
        <div className="col-span-3">
          {friends &&
            friends.map(({ displayName, value, email }) => (
              <RowFriend
                key={email}
                name={displayName}
                value={value}
                email={email}
              />
            ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default FriendsPage;
