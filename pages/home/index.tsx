import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../../components/general/Navbar";
import CalendarComponent from "../../components/calendar/CalendarComponent";
import Chart from "../../components/new/Chart";
import { useAtomValue } from "jotai";
import { weekStateAtom } from "../../state/weekStat";
import { useAuth } from "../../hooks/useAuth";
import SundayInfoBanner from "../../components/new/SundayInfoBanner";
import { helpersStateAtom } from "../../state/helpersState";
import FriendList from "../../components/new/FriendList";
import useTheme from "next-theme";
import Router, { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import { evaluateMessage, getEmoji } from "../../utils/evaluateMessage";

const Home = () => {
  const { theme, setTheme } = useTheme();
  const { user } = useAuth();
  const { locales } = useRouter();
  const router = useRouter();

  const intl = useIntl();
  const weekState = useAtomValue(weekStateAtom);
  const sundayInfo = useAtomValue(helpersStateAtom);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);

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
                <FormattedMessage id="page.home.head.title" />
              </h2>
              <p className="text-gray-600">
                <FormattedMessage id={evaluateMessage(value)} />
                {getEmoji(value)}
                {/* &#128528; */}
              </p>
            </div>
            <h3 className="text-4xl font-bold mr-2">{value}</h3>
          </div>
          <div className="w-full h-96 my-5 mt-8">
            <h2 className="font-bold text-gray-700 text-xl mb-2 dark:text-slate-50">
              <FormattedMessage id="page.home.week.title" />
            </h2>
            <Chart data={weekState ?? []} />
          </div>
          <div>
            <CalendarComponent userId={user?.uid as string} />
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
