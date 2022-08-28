import {
  getDocs,
  getFirestore,
  collection,
  query,
  where,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { app } from ".";
import { Calendar, ValueDay } from "../types";

const db = getFirestore(app);
const dbRef = collection(db, "friends");

// const toDateTime = (secs: number) => {
//   var t = new Date(1970, 0, 1); // Epoch
//   t.setSeconds(secs);
//   return t;
// };

const getCalendarData = async ({ firstDay, lastDay, userId }: Calendar) => {
  const data: any = [];
  const conditions = [
    where("userId", "==", userId),
    //where("day", ">=", firstDay),
    //where("day", "<=", lastDay),
  ];
  const currentMonthQuery = query(dbRef, ...conditions);
  try {
    const result = await getDocs(currentMonthQuery);
    result.docs.forEach((doc) => {
      data.push({
        ...doc.data(),
        day: new Timestamp(
          doc.data().day.seconds,
          doc.data().day.nanoseconds
        ).toDate(),
      });
    });
    return data;
  } catch (error) {
    throw error;
  }
};

const valueDay = async ({ day, value, userId }: ValueDay) => {
  await addDoc(dbRef, {
    userId,
    value,
    day,
  });
};

export { getCalendarData, valueDay };
