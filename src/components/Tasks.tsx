import React from "react";
import { Task } from "./Task";
import useSWR from "swr";
import { getServerTasks } from "../api/api";
import { TaskType } from "../tpye/taskType";

export const Tasks: React.FC = () => {
  const { data: tasks } = useSWR<TaskType[]>("/tasks", getServerTasks);

  return (
    <div>
      {tasks?.map((task) => {
        return <Task task={task} key={task.id} />;
      })}
    </div>
  );
};
