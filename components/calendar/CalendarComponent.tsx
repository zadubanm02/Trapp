import React, { useCallback, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
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
import { useState } from "react";
import { Modal, Text, Input, Button, FormElement } from "@nextui-org/react";
import Image from "next/image";
import PointModal from "../general/PointModal";
import { useCalendar } from "../../hooks/useCalendar";
import { FirebaseCalendar } from "../../types";
import { colorDay } from "./helpers";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface CalendarProps {
  userId: string;
}

export const CalendarComponent = ({ userId }: CalendarProps) => {
  // today
  const today = startOfToday();
  // selected day
  let [selectedDay, setSelectedDay] = useState(today);
  // current month
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
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
    setCurrentDays(
      eachDayOfInterval({
        start: firstDay,
        end: endOfMonth(firstDay),
      })
    );
    console.log("current Days", currentDays);
  };

  const nextMonth = () => {
    // setFirstDay(add(firstDay, { months: 1 }));
    // setCurrentMonth(format(firstDay, "MMM-yyyy"));
    // setCurrentDays(
    //   eachDayOfInterval({
    //     start: firstDay,
    //     end: endOfMonth(firstDay),
    //   })
    // );
    // console.log("current Days", currentDays);
  };

  // const adjustColor = () => {
  //   return
  // }

  // set new values if previous or next month is called
  useEffect(() => {
    setFirstDay(add(firstDay, { months: 1 }));
    setCurrentMonth(format(firstDay, "MMM-yyyy"));
    setCurrentDays(
      eachDayOfInterval({
        start: firstDay,
        end: endOfMonth(firstDay),
      })
    );
    console.log("current Days", currentDays);
  }, [nextMonth]);

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
          {currentDays.map((day, dayIdx) => (
            <div
              key={day.toString()}
              className={classNames(
                dayIdx === 0 && colStartClasses[getDay(day)],
                "p-1"
              )}
            >
              <button
                type="button"
                onClick={() => {
                  setSelectedDay(day);
                  handler();
                }}
                className={classNames(
                  colorDay(day, data ?? []),
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
                  !isEqual(day, selectedDay) && "hover:bg-gray-200",
                  (isEqual(day, selectedDay) || isToday(day)) &&
                    "font-semibold",
                  "flex h-10 w-full mr-0 text-center items-center justify-center rounded-lg"
                )}
              >
                <time
                  className="text-center"
                  dateTime={format(day, "yyyy-MM-dd")}
                >
                  {format(day, "d")}
                </time>
              </button>

              {/* <div className="w-1 h-1 mx-auto mt-1">
              {meetings.some((meeting) =>
                isSameDay(parseISO(meeting.startDatetime), day)
              ) && <div className="w-1 h-1 rounded-full bg-sky-500"></div>}
            </div> */}
            </div>
          ))}
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
      />
    </>
  );
};

export default CalendarComponent;

const colors = {
  red: "bg-rose-200",
  blue: "bg-blue-200",
  green: "bg-emerald-200",
  yellow: "bg-yellow-200",
};

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

const fillColor = () => {};
