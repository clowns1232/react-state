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
  };
});
