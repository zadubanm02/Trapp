import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  User,
} from "firebase/auth";

import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from ".";

const auth = getAuth(app);
const db = getFirestore(app);

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData extends LoginData {
  fullName: string;
}

const registerWithEmail = async ({
  fullName,
  email,
  password,
}: RegisterData): Promise<User> => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      fullName,
      authProvider: "local",
      email,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

const loginWithEmail = async ({
  email,
  password,
}: LoginData): Promise<User> => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    throw error;
  }
};

const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    throw err;
  }
};

const logout = () => {
  signOut(auth);
};

export { registerWithEmail, loginWithEmail, sendPasswordReset, logout };
