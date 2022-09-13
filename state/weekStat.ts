import { atom } from "jotai";

export interface WeekState {
  day: string;
  value: number;
}

const initialAtom = atom<WeekState[] | null>(null);

const weekStateAtom = atom(
  (get) => get(initialAtom),
  (_get, set, newState: WeekState[] | null) => {
    set(initialAtom, newState);
  }
);

export { weekStateAtom };
