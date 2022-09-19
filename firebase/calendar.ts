import {
  getDocs,
  getFirestore,
  collection,
  query,
  where,
  addDoc,
  Timestamp,
  getDoc,
} from "firebase/firestore";
import { app } from ".";
import { Calendar, ValueDay } from "../types";

// John Test userId
const userId = "Hm0VkQCeq4hArDGCM88X42YZ3Ai2";

const db = getFirestore(app);

// const toDateTime = (secs: number) => {
//   var t = new Date(1970, 0, 1); // Epoch
//   t.setSeconds(secs);
//   return t;
// };

// TODO UPDATE TO NESTED COLLECTION FOR EACH USER
const getCalendarData = async ({ firstDay, lastDay, userId }: Calendar) => {
  const collectionRef = collection(db, `users/${userId}/days`);

  const data: any = [];
  const rangeConditions = [
    where("day", ">=", Timestamp.fromDate(firstDay)),
    where("day", "<=", Timestamp.fromDate(lastDay)),
  ];
  console.log("First Day", firstDay, "Last day", lastDay);
  const currentMonthQuery = query(collectionRef, ...rangeConditions);
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
  const collectionRef = collection(db, `users/${userId}/days`);

  await addDoc(collectionRef, {
    value,
    day,
  });
};

export { getCalendarData, valueDay };
