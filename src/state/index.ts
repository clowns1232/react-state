import { atom } from "jotai";
import { v4 as uuidv4 } from "uuid";

const isDarkMode = atom<boolean>(true);
export const readWriteIsDarkModeAtom = atom(
  (get) => get(isDarkMode),
  (_get, set) => set(isDarkMode, !_get(isDarkMode))
);

export interface taskType {
  id: string;
  label: string;
  complete: boolean;
}
const tasks = atom<taskType[]>([]);
export const getTasks = atom((get) => get(tasks));
export const addTasks = atom(null, (get, set, label: string) => {
  const addTask = {
    id: uuidv4(),
    label: label,
    complete: false,
  };
  set(tasks, [...get(tasks), addTask]);
});
export const completeChangeTask = atom(null, (get, set, update: string) => {
  const changeTasks = get(tasks).map((task) => {
    if (task.id === update) {
      return {
        ...task,
        complete: !task.complete,
      };
    } else {
      return task;
    }
  });
  set(tasks, [...changeTasks]);
});
