import { FirebaseCalendar } from "../../types";
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
import useTheme from "next-theme";

export function colorDay(
  day: Date,
  data: FirebaseCalendar[],
  theme?: string
): string {
  const current = data.find(
    (calendarDay) => calendarDay.day.getDate() === day.getDate()
  );
  // green background
  if (current) {
    if (current.value > 0) {
      return "bg-green-300";
    }
    // red background
    if (current.value < 0) {
      return "bg-red-300";
    }

    // blue background
    if (current.value == 0) {
      return "bg-blue-300";
    }
  }

  return "bg-white";
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

interface MergedDays {
  day: Date;
  color: string;
}

export const mergeDays = (
  days: Date[],
  firebaseDays: FirebaseCalendar[]
): MergedDays[] => {
  const mergedDays: MergedDays[] = days.map((day) => ({
    day,
    color: colorDay(day, firebaseDays),
  }));
  return mergedDays;
};

export const fillData = (day: Date, firebaseDays: FirebaseCalendar[]) => {
  const data = firebaseDays.find(
    (fir) => fir.day.toISOString() === day.toISOString()
  );
  return data;
};

export const renderDays = (
  days: Date[],
  selectedDay: Date,
  firstDay: Date,
  setSelectedDay: (day: Date) => void,
  handler: () => void,
  colorDay: (day: Date, theme?: string) => string,
  firebaseData: FirebaseCalendar[],
  setFirebaseDay: React.Dispatch<
    React.SetStateAction<FirebaseCalendar | undefined>
  >
) => {
  const { theme } = useTheme();
  return days.map((day, dayIdx) => (
    <div
      key={day.toString()}
      className={classNames(
        dayIdx === 0 && colStartClasses[getDay(day)],
        "p-1"
      )}
    >
      <button
        id={"calendarButton"}
        type="button"
        onClick={() => {
          setSelectedDay(day);
          setFirebaseDay(fillData(day, firebaseData));
          handler();
        }}
        className={classNames(
          colorDay(day, theme),
          isEqual(day, selectedDay) && "text-white",
          !isEqual(day, selectedDay) && isToday(day) && "text-red-500",
          !isEqual(day, selectedDay) &&
            !isToday(day) &&
            isSameMonth(day, firstDay) &&
            "text-gray-900",
          !isEqual(day, selectedDay) &&
            !isToday(day) &&
            !isSameMonth(day, firstDay) &&
            "text-gray-400",
          isEqual(day, selectedDay) && isToday(day) && "bg-red-500",
          isEqual(day, selectedDay) && !isToday(day) && "bg-gray-900",
          !isEqual(day, selectedDay) &&
            "hover:bg-gray-200 dark:hover:bg-slate-600",
          (isEqual(day, selectedDay) || isToday(day)) && "font-semibold",
          "flex h-10 w-full mr-0 text-center items-center justify-center rounded-lg"
        )}
      >
        <time
          className="text-center dark:text-slate-50"
          dateTime={format(day, "yyyy-MM-dd")}
        >
          {format(day, "d")}
        </time>
      </button>
    </div>
  ));
};
