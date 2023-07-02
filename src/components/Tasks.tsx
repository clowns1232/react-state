import React from "react";
import { Task } from "./Task";
import { useTasks } from "../zustand";

export const Tasks: React.FC = () => {
  const { tasks } = useTasks((state) => state);

  return (
    <div>
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
};
