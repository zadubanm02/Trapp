import React, { Suspense, useState } from "react";
import Navbar from "../../components/general/Navbar";
import dynamic from "next/dynamic";
import Calendar from "react-calendar";
import "react-calendar/dist/calendar.css";
import styled from "styled-components";
import Banner from "../../components/dashboard/Banner";
import Friends from "../../components/dashboard/Friends";

// const Calendar = dynamic(() => import("react-calendar"), {
//   suspense: true,
// });

const Home = () => {
  const [value, setValue] = React.useState<Date | null>(new Date());
  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-around my-10">
        <div>
          <Banner />
          <Friends />
        </div>
      </div>
    </div>
  );
};

export default Home;
