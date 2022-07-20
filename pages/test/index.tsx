import React from "react";
import CalendarComponent from "../../components/calendar/CalendarComponent";
import Banner from "../../components/dashboard/Banner";
import Friends from "../../components/dashboard/Friends";
import Navbar from "../../components/general/Navbar";

const TestPage = () => {
  return (
    <div>
      <Navbar />
      <CalendarComponent />
    </div>
  );
};

export default TestPage;
