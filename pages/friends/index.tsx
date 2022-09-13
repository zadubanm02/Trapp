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
