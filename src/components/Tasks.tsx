import React from "react";
import { Task } from "./Task";
import { getServerTasks } from "../api/api";
import { useQuery } from "react-query";
import { taskType } from "../type/tasksType";

export const Tasks: React.FC = () => {
  const { data } = useQuery<taskType[]>(
    "tasks",
    () => {
      return getServerTasks();
    },
    {
      refetchOnWindowFocus: false,
      retry: 0, // 실패시 재호출 몇번 할지
    }
  );

  return (
    <div>
      {data?.map((task) => {
        return <Task task={task} key={task.id} />;
      })}
    </div>
  );
};
