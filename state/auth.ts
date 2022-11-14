import { atom } from "jotai";
import { User } from "firebase/auth";

const getInitialValue = () => {
  if (typeof window !== "undefined") {
    const localItem = localStorage.getItem("user") ?? "{}";
    // Perform localStorage action
    const item = JSON.parse(localItem);
    return item == "" ? null : item;
  }
};

const initialAtom = atom(getInitialValue());

const authAtom = atom(
  (get) => get(initialAtom),
  (_get, set, newState: User | null) => {
    set(initialAtom, newState);
    localStorage.setItem("user", JSON.stringify(newState));
  }
);

export { authAtom };
