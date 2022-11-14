import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  User,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { app } from ".";

const auth = getAuth(app);
const db = getFirestore(app);
const usersRef = collection(db, "users");

const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const registerWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      displayName: user.displayName,
      authProvider: "google",
      email: user.email,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

const registerWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    const user = result.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      displayName: user.displayName,
      authProvider: "facebook",
      email: user.email,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user;
  } catch (error) {
    throw error;
  }
};

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
    const resultPromise = createUserWithEmailAndPassword(auth, email, password);
    const foundUserPromise = getUserByEmail(email);
    const result = await resultPromise;
    const user = result.user;
    const foundUser = await foundUserPromise;
    if (foundUser) {
      return user;
    }
    // custom doc id for better querying
    await setDoc(doc(db, `users`, user.uid), {
      uid: user.uid,
      displayName: fullName,
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

export {
  registerWithEmail,
  loginWithEmail,
  sendPasswordReset,
  logout,
  loginWithGoogle,
  registerWithGoogle,
  registerWithFacebook,
};
