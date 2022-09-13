import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../../components/general/Navbar";
import CalendarComponent from "../../components/calendar/CalendarComponent";
import { FormElement } from "@nextui-org/react";
import Chart from "../../components/new/Chart";
import { useAtomValue } from "jotai";
import { weekStateAtom } from "../../state/weekStat";
import { addOrSendEmail } from "../../utils/addOrSendEmail";
import { EmailData } from "../../apiCalls/sendEmail";
import { useAuth } from "../../hooks/useAuth";
import SundayInfoBanner from "../../components/new/SundayInfoBanner";
import { helpersStateAtom } from "../../state/helpersState";
import { Friend } from "../../types";
import FriendList from "../../components/new/FriendList";
import useTheme from "next-theme";

const Home = () => {
  const { theme, setTheme } = useTheme();
  const { user } = useAuth();
  const weekState = useAtomValue(weekStateAtom);
  const sundayInfo = useAtomValue(helpersStateAtom);

  return (
    <div className="h-screen dark:bg-slate-800">
      <Navbar />
      {sundayInfo && <SundayInfoBanner />}
      <div className="grid grid-cols-6 gap-8 dark:bg-slate-800">
        <div></div>
        {/* Main Column for content */}
        <div className="col-span-2">
          <div className="my-5 flex flex-row justify-between w-80 items-center bg-blue-300 rounded-lg p-3">
            <div>
              <h2 className="font-bold text-gray-700 text-2xl mb-2">
                Ako si na tom ?
              </h2>
              <p className="text-gray-600">Nic moc brasko &#128528;</p>
            </div>
            <h3 className="text-4xl font-bold mr-2">3</h3>
          </div>
          <div className="w-full h-96 my-5 mt-8">
            <h2 className="font-bold text-gray-700 text-xl mb-2">
              Tvoj posledny tyzden
            </h2>
            <Chart data={weekState ?? []} />
          </div>
          <div>
            <CalendarComponent userId="qCCBiKp1fzNsacX1BA7rW8wVDnc2" />
          </div>
        </div>
        <div className="col-span-2">
          <FriendList />
        </div>
        {/* Main Column for content */}
        <div></div>
      </div>
    </div>
  );
};

export default Home;
