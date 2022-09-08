import { useCallback, useEffect, useState } from "react";
import { addFriend, getFriendsData } from "../firebase/friends";
import { Friend } from "../types";

export const useFriends = (userId: string) => {
  const [friends, setFriends] = useState<Friend[] | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const addNewFriend = (friendId: string) => {
    return addFriend(friendId);
  };

  useEffect(() => {
    setLoading((prevState) => !prevState);
    getFriendsData(userId)
      .then((result) => {
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
