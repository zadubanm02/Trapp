import type { WeekState } from "../state/weekStat";
import { FirebaseCalendar } from "../types";
import {
  eachDayOfInterval,
  lastDayOfWeek,
  format,
  startOfToday,
  startOfWeek,
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
