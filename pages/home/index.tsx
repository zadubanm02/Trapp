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
        <CalendarContainer>
          <Calendar next2Label={null} prev2Label={null} />
        </CalendarContainer>
      </div>
    </div>
  );
};

export default Home;

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */

  .react-calendar {
    width: 400px;
    background-color: #fff;
    padding: 10px;
    margin: auto;
    border: none;
  }

  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }

  /* ~~~ container styles ~~~ */
  /* ~~~ navigation styles ~~~ */
  /* ... */

  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
  }

  /* ~~~ button styles ~~~ */
  button {
    margin: 3px;
    background-color: #fff;
    border: 0;
    border-radius: 3px;
    color: #000;
    padding: 5px 0;

    &:hover {
      background-color: #556b55;
    }

    &:active {
      background-color: #a5c1a5;
    }
  }

  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

    .react-calendar__tile {
      max-width: initial !important;
    }
  }

  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #dfdfdf;
  }

  /* ~~~ active day styles ~~~ */
  .react-calendar__tile--range {
    box-shadow: 0 0 6px 2px black;
  }
`;
