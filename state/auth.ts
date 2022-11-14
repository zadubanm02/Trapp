import { atom } from "jotai";
import { User } from "firebase/auth";

const getInitialValue = () => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const item = JSON.parse(localStorage.getItem("user") ?? "");
    return item == "" ? null : item;
  }
};

const initialAtom = atom<User | null>(getInitialValue());

const authAtom = atom(
  (get) => get(initialAtom),
  (_get, set, newState: User | null) => {
    //@ts-ignore
    set(initialAtom, newState);
    localStorage.setItem("user", JSON.stringify(newState));
  }
);

export { authAtom };
