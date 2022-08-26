import React from "react";
import CalendarComponent from "../../components/calendar/CalendarComponent";
import Banner from "../../components/dashboard/Banner";
import Friends from "../../components/dashboard/Friends";
import Navbar from "../../components/general/Navbar";

const TestPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      {/* John Doe from firebase: qCCBiKp1fzNsacX1BA7rW8wVDnc2 */}
      <CalendarComponent userId="qCCBiKp1fzNsacX1BA7rW8wVDnc2" />
    </div>
  );
};

export default TestPage;
