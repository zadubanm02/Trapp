import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";

const getRandomValue = () => {
  const min = Math.ceil(-10);
  const max = Math.floor(10);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let today = startOfToday();
const currentMonth = format(today, "MMM-yyyy");

let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
let days = eachDayOfInterval({
  start: firstDayCurrentMonth,
  end: endOfMonth(firstDayCurrentMonth),
});

export const testDays = days.map((day) => ({
  day,
  value: getRandomValue(),
}));
