import { useCallback, useEffect, useState } from "react";
import { addFriend, getFriendsData } from "../firebase/friends";
import { Friend } from "../types";

export const useFriends = (userId: string) => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [error, setError] = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const addNewFriend = (friendId: string) => {
    return addFriend(friendId, userId);
  };

  useEffect(() => {
    console.log("ID", userId);
    setLoading((prevState) => !prevState);
    getFriendsData(userId)
      .then((result) => {
        console.log("Friends result", result);
        return setFriends(result);
      })
      .catch((err) => setError(err));
    setLoading((prevState) => !prevState);
  }, []);

  return {
    friends,
    error,
    loading,
    addNewFriend,
  };
};
