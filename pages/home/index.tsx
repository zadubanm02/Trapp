import React, { Suspense, useCallback, useState } from "react";
import Navbar from "../../components/general/Navbar";
import Banner from "../../components/dashboard/Banner";
import Friends from "../../components/dashboard/Friends";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  ReferenceDot,
  ResponsiveContainer,
} from "recharts";
import CalendarComponent from "../../components/calendar/CalendarComponent";
import RowFriend from "../../components/new/RowFriend";
import AddFriendModal from "../../components/general/AddFriendModal";
import { FormElement } from "@nextui-org/react";
import Chart from "../../components/new/Chart";
import { useAtomValue } from "jotai";
import { weekStateAtom } from "../../state/weekStat";

const data = [
  {
    name: "Mon",
    value: -1,
  },
  {
    name: "Tue",
    value: 7,
  },
  {
    name: "Wen",
    value: 5,
  },
  {
    name: "Thu",
    value: -4,
  },
  {
    name: "Fri",
    value: 9,
  },
  {
    name: "Sat",
    value: 0,
  },
  {
    name: "Sun",
    value: 3,
  },
];

const Home = () => {
  const [friendEmail, setFriendEmail] = React.useState<string>("");
  const [visible, setVisible] = React.useState(false);
  const weekState = useAtomValue(weekStateAtom);
  const handler = () => setVisible(true);
  const save = () => {
    return console.log("Add friend");
  };
  const closeHandler = () => {
    setVisible(false);
    setFriendEmail("");
  };
  const changeValue = useCallback(
    (e: React.ChangeEvent<FormElement>) => {
      setFriendEmail(e.target.value);
    },
    [friendEmail]
  );
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-6 gap-8">
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
            {/* <ResponsiveContainer width="100%" height="80%">
              <LineChart
                margin={{ left: 20, right: 20 }}
                // width={500}
                // height={200}
                data={data}
              >
                <Line
                  strokeWidth={2}
                  type="monotone"
                  dataKey="value"
                  stroke="#2564eb"
                />
                <XAxis
                  interval={0}
                  tickLine={false}
                  axisLine={false}
                  dataKey="name"
                />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer> */}
            <Chart data={weekState ?? []} />
          </div>
          <div>
            <CalendarComponent userId="qCCBiKp1fzNsacX1BA7rW8wVDnc2" />
          </div>
        </div>
        <div className="col-span-2">
          <div className="my-5  w-80 items-center">
            <h2 className="font-bold text-gray-700 text-2xl mb-4">
              Co tvoji kamosi ?
            </h2>

            <RowFriend name="Misko Conka" email="misko@azet.sk" value={-3} />
            <RowFriend name="Ferko Mrkva" email="ferko@azet.sk" value={0} />
            <RowFriend
              name="Janko Curacik"
              email="curacik.janicko@azet.sk"
              value={7}
            />
            <RowFriend
              name="Frantisek Ruzicka"
              email="ferko@azet.sk"
              value={0}
            />
            <RowFriend name="Denis Penis" email="penis@pornhub.com" value={9} />
            <button
              onClick={() => setVisible(true)}
              className="splace-self-center m-5 mx-auto bg-blue-500 rounded-lg p-3 text-white"
            >
              Pridat priatela
            </button>
          </div>
        </div>
        {/* Main Column for content */}
        <div></div>
      </div>
      <AddFriendModal
        changeFriendEmail={changeValue}
        friendEmail={friendEmail}
        visible={visible}
        closeHandler={closeHandler}
        saveData={save}
      />
    </div>
  );
};

export default Home;
