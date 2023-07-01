import { create } from "zustand";
import { TaskType, UseTasksType } from "./stateType";

export const useTasks = create<UseTasksType>((set) => {
  return {
    tasks: Array<TaskType>,
    addTask: (label) =>
      set((state) => {
        const task = { label: label };
        return { tasks: [...state.tasks, task] };
      }),
  };
});
