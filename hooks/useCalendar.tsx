import { useAtom } from "jotai";
import { useCallback, useEffect, useState } from "react";
import { getCalendarData, valueDay } from "../firebase/calendar";
import { weekStateAtom } from "../state/weekStat";
import { Calendar, FirebaseCalendar, ValueDay } from "../types";
import { getWeekData } from "../utils/getWeekData";
import { useAuth } from "./useAuth";

export const useCalendar = ({ firstDay, lastDay, userId }: Calendar) => {
  const [data, setData] = useState<FirebaseCalendar[] | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [dayData, setDayData] = useState({ firstDay, lastDay });
  // global atom for weekly chart
  const [weekState, setWeekState] = useAtom(weekStateAtom);

  const rateDate = useCallback(
    async (calendarData: ValueDay): Promise<void> => {
      try {
        valueDay(calendarData);
      } catch (err) {
        setError(err);
      }
    },
    []
  );

  const refresh = useCallback(({ firstDay, lastDay, userId }: Calendar) => {
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
        console.log("DATAA", result);
        setWeekState(getWeekData(result));
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
