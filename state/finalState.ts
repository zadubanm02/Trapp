import { atom } from "jotai";

export interface FinalState {
  value: number;
}

const initialAtom = atom<number>(0);

const finalStateAtom = atom(
  (get) => get(initialAtom),
  (_get, set, newState: number) => {
    set(initialAtom, newState);
  }
);

export { finalStateAtom };
