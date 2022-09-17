import {
  getDocs,
  getFirestore,
  collection,
  query,
  where,
  addDoc,
  Timestamp,
  limit,
  getDoc,
} from "firebase/firestore";
import { app } from ".";
import { Calendar, ValueDay } from "../types";

// John Test userId
const userId = "Hm0VkQCeq4hArDGCM88X42YZ3Ai2";

const db = getFirestore(app);
const collectionRef = collection(db, `users/${userId}/friends`);

const usersRef = collection(db, "users");

// Question: store only userids and get their value data by querryng users?
const getFriendsData = async (userId: string) => {
  // Get ids from user friends collection
  const friendsIds: any = [];
  // Get names and values from users collection
  const friends: any = [];

  // TODO make dynamic for dashboard and whole list
  // Limit to 6 friends for dashboard
  const conditions = [limit(6)];
  const friendIdsQuery = query(collectionRef, ...conditions);
  const result = await getDocs(friendIdsQuery);
  result.docs.forEach((doc) => {
    friendsIds.push(doc.data().friendId);
  });

  console.log("Friend Ids", friendsIds);
  // Get actual friends data
  const usersConditions = [where("uid", "in", friendsIds)];

  const dataQuery = query(usersRef, ...usersConditions, limit(6));
  const usersResult = await getDocs(dataQuery);
  usersResult.docs.forEach((doc) => {
    const docData = doc.data();
    console.log("Found", doc);
    friends.push({
      displayName: docData.displayName,
      value: docData.value ?? 0,
      email: docData.email,
    });
  });
  return friends;
};

const getUserByEmail = async (email: string) => {
  let user: any = null;
  const dataQuery = query(usersRef, where("email", "==", email));
  const result = await getDocs(dataQuery);
  if (result.docs.length === 0) {
    return null;
  }
  result.docs.forEach((doc) => {
    const docData = doc.data();
    user = docData;
  });
  return user;
};

const addFriend = async (friendId: string) => {
  const result = await addDoc(collectionRef, {
    friendId,
  });
};

export { getFriendsData, addFriend, getUserByEmail };