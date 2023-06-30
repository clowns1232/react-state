import { create } from "zustand";
import { TaskType, UseTasksType } from "./stateType";

// export const useTasks = create<UseTasksType>((set) => {
//   return {
//     tasks: [],
//     addTask: (tasks: [TaskType]) =>
//       set((state: TaskType) => ({ tasks: [...tasks, state] })),
//   };
// });
