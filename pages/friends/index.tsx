import React, { Suspense, useState } from "react";
import Navbar from "../../components/general/Navbar";
import dynamic from "next/dynamic";
import Calendar from "react-calendar";
import "react-calendar/dist/calendar.css";
import styled from "styled-components";
import Banner from "../../components/dashboard/Banner";
import Friends from "../../components/dashboard/Friends";
import { NextPage } from "next";
import { useFriends } from "../../hooks/useFriends";
import FriendRow from "../../components/general/FriendRow";

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
      <div>
        {friends &&
          friends.map((friend) => (
            <FriendRow
              key={friend.userId}
              name={friend.displayName}
              value={friend.value}
            />
          ))}
      </div>
    </div>
  );
};

export default FriendsPage;
