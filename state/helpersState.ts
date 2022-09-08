import { atom } from "jotai";

const initialAtom = atom<boolean>(true);

const helpersStateAtom = atom(
  (get) => get(initialAtom),
  (_get, set, newState: boolean) => {
    set(initialAtom, newState);
  }
);

export { helpersStateAtom };
