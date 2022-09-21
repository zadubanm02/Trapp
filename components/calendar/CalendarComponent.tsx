import React, { useCallback, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  parse,
  startOfToday,
} from "date-fns";
import { useState } from "react";
import { FormElement, useTheme } from "@nextui-org/react";
import Image from "next/image";
import PointModal from "../general/PointModal";
import { useCalendar } from "../../hooks/useCalendar";
import { renderDays } from "./helpers";
import { FirebaseCalendar } from "../../types";
import { useAtom } from "jotai";
import { weekStateAtom } from "../../state/weekStat";

interface CalendarProps {
  userId: string;
}

export const CalendarComponent = ({ userId }: CalendarProps) => {
  const { theme } = useTheme();
  // today
  const today = startOfToday();
  // selected day
  const [selectedDay, setSelectedDay] = useState(today);
  // current month
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  // first day of the month
  const [firstDay, setFirstDay] = useState<Date>(
    parse(currentMonth, "MMM-yyyy", new Date())
  );
  // last day of the month
  const [lastDay, setLastDay] = useState<Date>(
    endOfMonth(parse(currentMonth, "MMM-yyyy", new Date()))
  );
  // days in current month
  const [currentDays, setCurrentDays] = useState(
    eachDayOfInterval({
      start: firstDay,
      end: endOfMonth(firstDay),
    })
  );
  const { data, error, loading, rateDate, refresh } = useCalendar({
    firstDay: firstDay,
    lastDay: endOfMonth(firstDay),
    userId,
  });
  const [visible, setVisible] = React.useState(false);
  const [value, setValue] = useState<number>(0);

  const [firebaseDay, setFirebaseDay] = useState<
    FirebaseCalendar | undefined
  >();

  const handler = () => setVisible(true);

  const save = async () => {
    await rateDate({ day: selectedDay, userId, value });
    refresh({ firstDay, lastDay, userId });
    setVisible(false);
  };

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const previousMonth = () => {
    setFirstDay(add(firstDay, { months: -1 }));
    setCurrentMonth(format(firstDay, "MMM-yyyy"));
    setLastDay(endOfMonth(add(firstDay, { months: -1 })));
  };

  const nextMonth = () => {
    setFirstDay(add(firstDay, { months: 1 }));
    setCurrentMonth(format(firstDay, "MMM-yyyy"));
    setLastDay(endOfMonth(add(firstDay, { months: 1 })));
  };

  function colorDay(day: Date, theme?: string): string {
    const current = data?.find((calendarDay) => {
      return calendarDay.day.toDateString() === day.toDateString();
    });
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
    if (theme == "dark") {
      return "bg-slate-700";
    }
    return "bg-white";
  }

  // set new values if previous or next month is called
  useEffect(() => {
    setCurrentDays(
      eachDayOfInterval({
        start: firstDay,
        end: endOfMonth(firstDay),
      })
    );
    refresh({ firstDay, lastDay, userId });
  }, [firstDay, currentMonth]);

  const changeValue = useCallback(
    (e: React.ChangeEvent<FormElement>) => {
      setValue(parseInt(e.target.value));
      console.log("Value", value);
    },
    [value]
  );

  return (
    <>
      <div className=" border-xl bg-white md:max-w-4xl dark:bg-slate-800">
        <div className="flex items-center justify-between p-2">
          <button
            type="button"
            onClick={previousMonth}
            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 dark:text-slate-50"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
          </button>
          <h2 className="font-semibold text-gray-900 dark:text-slate-50">
            {format(firstDay, "MMMM yyyy")}
          </h2>
          <button
            onClick={nextMonth}
            type="button"
            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500 dark:text-slate-200">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>
        <div className="grid grid-cols-7 items-center text-center m-1 text-sm">
          {renderDays(
            currentDays,
            selectedDay,
            firstDay,
            setSelectedDay,
            handler,
            colorDay,
            data ?? [],
            setFirebaseDay
          )}
        </div>
      </div>

      <PointModal
        visible={visible}
        changeValue={changeValue}
        closeHandler={closeHandler}
        increaseValue={() => setValue((prev) => prev + 1)}
        decreaseValue={() => setValue((prev) => prev - 1)}
        saveData={save}
        value={value}
        data={firebaseDay}
      />
    </>
  );
};

export default CalendarComponent;
