import React from "react";
import { Task } from "./Task";
import { useAtom } from "jotai";
import { getTasks } from "../state/taskState";

export const Tasks: React.FC = () => {
  const [tasks] = useAtom(getTasks);
  return (
    <div>
      {tasks.map((task) => {
        return <Task task={task} key={task.id} />;
      })}
    </div>
  );
};
