import { useCallback, useEffect, useState } from "react";
import { Friend } from "../types";


export const useFriends = (userId:string) => {
  const [data, setData] = useState<Friend[] | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading((prevState) => !prevState);
    getCalendarData({ firstDay, lastDay, userId })
      .then((result) => {
        console.log("DATAA", result);
        return setData(result);
      })
      .catch((err) => setError(err));
    setLoading((prevState) => !prevState);
  }, []);

  useEffect(() => {
    setLoading((prevState) => !prevState);
    getCalendarData({ firstDay, lastDay, userId })
      .then((result) => {
        console.log("Refreshed", result);
        return setData(result);
      })
      .catch((err) => setError(err));
    setLoading((prevState) => !prevState);
  }, [refresh]);

  return {
    data,
    error,
    loading,
    rateDate,
    refresh,
  };
};
