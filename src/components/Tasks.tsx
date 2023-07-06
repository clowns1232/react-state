import React from "react";
import { Task } from "./Task";
import useSWR from "swr";
import { getServerTasks } from "../api/api";

export const Tasks: React.FC = () => {
  const { data } = useSWR("/tasks", getServerTasks);
  console.log(data);

  return (
    <div>
      <Task id={0} />
      <Task id={1} />
      <Task id={2} />
      <Task id={3} />
    </div>
  );
};
