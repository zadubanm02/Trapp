import { EmailData, sendEmail } from "../apiCalls/sendEmail";
import { addFriend, getUserByEmail } from "../firebase/friends";

export const addOrSendEmail = async (emailData: EmailData, userId: string) => {
  const user = await getUserByEmail(emailData.to);
  console.log("Friend", user);
  if (user) {
    return await addFriend(user.uid, userId);
  }
  return await sendEmail(emailData);
};
