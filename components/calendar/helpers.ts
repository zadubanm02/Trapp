import { FirebaseCalendar } from "../../types";

export function colorDay(day: Date, data: FirebaseCalendar[]): string {
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
