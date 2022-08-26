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
import { FormElement } from "@nextui-org/react";
import Image from "next/image";
import PointModal from "../general/PointModal";
import { useCalendar } from "../../hooks/useCalendar";
import { renderDays } from "./helpers";
import { FirebaseCalendar } from "../../types";

interface CalendarProps {
  userId: string;
}

export const CalendarComponent = ({ userId }: CalendarProps) => {
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

  const save = () => {
    return rateDate({ day: selectedDay, userId, value });
  };

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const previousMonth = () => {
    setFirstDay(add(firstDay, { months: -1 }));
    setCurrentMonth(format(firstDay, "MMM-yyyy"));
  };

  const nextMonth = () => {
    setFirstDay(add(firstDay, { months: 1 }));
    setCurrentMonth(format(firstDay, "MMM-yyyy"));
  };

  function colorDay(day: Date): string {
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
      <div className="w-2/5 border-xl m-2 px-4 mx-auto bg-white sm:px-7 md:max-w-4xl md:px-6">
        <div className="flex items-center justify-between p-2">
          <button
            type="button"
            onClick={previousMonth}
            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
          </button>
          <h2 className="font-semibold text-gray-900">
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
        <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
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
