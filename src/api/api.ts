import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const api = axios.create({
  baseURL: "/",
});

export const getServerTasks = () => api.get(`tasks`).then((res) => res.data);
export const postServerTasks = (label: string) =>
  api
    .post(`tasks`, {
      label: label,
      id: uuidv4(),
      complete: false,
    })
    .then((res) => res.data);
export const changeServerTasks = (id: string, complete: boolean) =>
  api.patch(`tasks/${id}`, {
    complete: !complete,
  });

export const getServerDarkMode = () =>
  api.get(`isDarkMode`).then((res) => res.data.isDarkMode);
export const putServerDarkMode = (thisDarkMode?: boolean) =>
  api.put("isDarkMode", {
    isDarkMode: !thisDarkMode,
  });
