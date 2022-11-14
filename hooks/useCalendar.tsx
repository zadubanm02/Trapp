import { useAtom } from "jotai";
import { useCallback, useEffect, useState } from "react";
import { getCalendarData, updateValue, valueDay } from "../firebase/calendar";
import { finalStateAtom } from "../state/finalState";
import { weekStateAtom } from "../state/weekStat";
import { Calendar, FirebaseCalendar, ValueDay } from "../types";
import { getFinalValue, getWeekData } from "../utils/getWeekData";
import { useAuth } from "./useAuth";

export const useCalendar = ({ firstDay, lastDay, userId }: Calendar) => {
  const [data, setData] = useState<FirebaseCalendar[] | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [dayData, setDayData] = useState({ firstDay, lastDay });
  // global atom for weekly chart
  const [weekState, setWeekState] = useAtom(weekStateAtom);
  const [finalState, setFinalState] = useAtom(finalStateAtom);

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
        return setData(result);
      })
      .catch((err) => setError(err));
    setLoading((prevState) => !prevState);
  }, []);

  const refreshValue = useCallback(
    ({ firstDay, lastDay, userId }: Calendar) => {
      console.log("Updating using refreshValue fn");
      setLoading((prevState) => !prevState);
      getCalendarData({ firstDay, lastDay, userId })
        .then((result) => {
          updateValue({ userId: userId, value: getFinalValue(result) });
          return setData(result);
        })
        .catch((err) => setError(err));
      setLoading((prevState) => !prevState);
    },
    []
  );

  useEffect(() => {
    setLoading((prevState) => !prevState);
    getCalendarData({ firstDay, lastDay, userId })
      .then((result) => {
        setWeekState(getWeekData(result));
        setFinalState(getFinalValue(result));
        return setData(result);
      })
      .catch((err) => setError(err));
    setLoading((prevState) => !prevState);
  }, []);

  useEffect(() => {
    setLoading((prevState) => !prevState);
    getCalendarData({ firstDay, lastDay, userId })
      .then((result) => {
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
    refreshValue,
  };
};
