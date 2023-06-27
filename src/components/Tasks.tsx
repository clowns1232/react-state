import React from "react";
import { Task } from "./Task";
import { useSelector } from "react-redux";
import { reduxStoreType } from "../redux/sliceTypes";

export const Tasks: React.FC = () => {
  const tasks = useSelector((state: reduxStoreType) => {
    return state.tasks;
  });

  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task
            id={task.id}
            label={task.label}
            complete={task.complete}
            key={task.id}
          />
        );
      })}
    </div>
  );
};
