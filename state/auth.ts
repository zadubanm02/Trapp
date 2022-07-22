import { atom } from "jotai";
import { User } from "firebase/auth";

const initialAtom = atom<User | null>(null);

const authAtom = atom(
  (get) => get(initialAtom),
  (_get, set, newState: User | null) => {
    set(initialAtom, newState);
  }
);

export { authAtom };
