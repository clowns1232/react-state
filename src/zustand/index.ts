import { create } from "zustand";
import { UseTasksType } from "./stateType";
import { v4 as uuidv4 } from "uuid";

export const useTasks = create<UseTasksType>((set) => {
  return {
    tasks: [],
    addTask: (label: string) =>
      set((state) => {
        const task = { label: label, id: uuidv4(), complete: false };
        return { tasks: [...state.tasks, task] };
      }),
    changeComplete: (id: string) =>
      set((state) => {
        const changeTask = state.tasks.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              complete: !task.complete,
            };
          } else {
            return task;
          }
        });

        return { tasks: changeTask };
      }),
  };
});
