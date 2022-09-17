import { FormElement } from "@nextui-org/react";
import React, { useCallback, useState } from "react";
import { FormattedMessage } from "react-intl";
import { EmailData } from "../../apiCalls/sendEmail";
import { useAuth } from "../../hooks/useAuth";
import { addOrSendEmail } from "../../utils/addOrSendEmail";
import { fakeFriends } from "../../utils/fakeData";
import AddFriendModal from "../general/AddFriendModal";
import FriendModal from "../general/FriendModal";
import RowFriend, { InternalFriend } from "./RowFriend";

const FriendList = () => {
  const [friendEmail, setFriendEmail] = React.useState<string>("");
  const [visible, setVisible] = useState(false);
  const [friendModalVisible, setFriendModalVisible] = useState<boolean>(false);
  const [selectedFriend, setSelectedFriend] = useState<
    InternalFriend | undefined
  >(undefined);
  const { user } = useAuth();
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
    <>
      <div className="my-5  w-80 items-center">
        <h2 className="font-bold text-gray-700 text-2xl mb-4 dark:text-slate-50">
          <FormattedMessage id="page.home.friends.title" />
        </h2>
        {fakeFriends.map((friend) => {
          return (
            <RowFriend
              clickHandler={() => {
                setSelectedFriend(friend);
                setFriendModalVisible(true);
                console.log("Selected Friend", selectedFriend);
              }}
              name={friend.name}
              email={friend.email}
              value={friend.value}
            />
          );
        })}
        <button
          onClick={() => setVisible(true)}
          className="splace-self-center m-5 mx-auto bg-blue-500 rounded-lg p-3 text-white"
        >
          <FormattedMessage id="friends.addFriend" />
        </button>
      </div>
      <AddFriendModal
        changeFriendEmail={changeValue}
        friendEmail={friendEmail}
        visible={visible}
        closeHandler={closeHandler}
        saveData={handleSendRequest}
      />
      <FriendModal
        closeHandler={closeFriendModalHandler}
        visible={friendModalVisible}
        friend={selectedFriend}
        saveData={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
};

export default FriendList;
