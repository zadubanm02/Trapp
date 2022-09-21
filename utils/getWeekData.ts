import type { WeekState } from "../state/weekStat";
import { FirebaseCalendar } from "../types";
import {
  eachDayOfInterval,
  lastDayOfWeek,
  format,
  startOfToday,
  startOfWeek,
  add,
} from "date-fns";

export const getWeekData = (data: FirebaseCalendar[]): WeekState[] => {
  let finalData: WeekState[] = [];
  const today = startOfToday();
  const firstDay = startOfWeek(today);
  const weekEnd = lastDayOfWeek(today);
  const days = eachDayOfInterval({
    start: firstDay,
    end: weekEnd,
  });
  days.forEach((day) => {
    const item = data.find((dato) => {
      return dato.day.getDate() == day.getDate();
    });
    finalData.push({ day: format(day, "EEE"), value: item ? item.value : 0 });
  });
  return finalData;
};

export const getFinalValue = (data: FirebaseCalendar[]) => {
  let finalData: number[] = [];

  const today = startOfToday();
  const twoWeekLater = add(today, { days: -14 });
  const days = eachDayOfInterval({
    start: twoWeekLater,
    end: today,
  });

  days.forEach((day) => {
    const item = data.find((dato) => {
      return dato.day.getDate() == day.getDate();
    });
    finalData.push(item?.value ?? 0);
  });

  console.log("final data for day", finalData);

  const sum = finalData.reduce((a, b) => a + b, 0);
  const avg = sum / finalData.length || 0;

  return Math.round(avg);
};
