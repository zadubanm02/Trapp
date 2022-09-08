import React, { Suspense, useCallback, useState } from "react";
import Navbar from "../../components/general/Navbar";
import CalendarComponent from "../../components/calendar/CalendarComponent";
import RowFriend from "../../components/new/RowFriend";
import AddFriendModal from "../../components/general/AddFriendModal";
import { FormElement } from "@nextui-org/react";
import Chart from "../../components/new/Chart";
import { useAtomValue } from "jotai";
import { weekStateAtom } from "../../state/weekStat";
import { addOrSendEmail } from "../../utils/addOrSendEmail";
import { EmailData } from "../../apiCalls/sendEmail";
import { useAuth } from "../../hooks/useAuth";
import SundayInfoBanner from "../../components/new/SundayInfoBanner";
import { helpersStateAtom } from "../../state/helpersState";
import FriendModal from "../../components/general/FriendModal";
import { fakeFriends } from "../../utils/fakeData";
import { Friend } from "../../types";
import FriendList from "../../components/new/FriendList";

const Home = () => {
  const [friendEmail, setFriendEmail] = React.useState<string>("");
  const [visible, setVisible] = React.useState(false);
  const [friendModalVisible, setFriendModalVisible] =
    React.useState<boolean>(false);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const { user } = useAuth();
  const weekState = useAtomValue(weekStateAtom);
  const sundayInfo = useAtomValue(helpersStateAtom);
  const handler = () => setVisible(true);
  const save = () => {
    return console.log("Add friend");
  };
  const closeHandler = () => {
    setVisible(false);
    setFriendEmail("");
  };
  const closeFriendModalHandler = () => {
    setFriendModalVisible(false);
  };
  const handleSendRequest = async () => {
    const name = user?.displayName as string;
    const data: EmailData = {
      to: friendEmail,
      name: name ?? "Trapp",
      message: `${
        name ?? "Trapp"
      } is invited to use Trapp ! Join in to share your grades !`,
    };
    addOrSendEmail(data);
    setVisible(false);
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
      {sundayInfo && <SundayInfoBanner />}
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
