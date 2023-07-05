import { atom } from "jotai";

const isDarkMode = atom<boolean>(true);
export const readWriteIsDarkModeAtom = atom(
  (get) => get(isDarkMode),
  (_get, set) => set(isDarkMode, !_get(isDarkMode))
);
