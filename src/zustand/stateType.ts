export interface TaskType {
  id: string;
  label: string;
  complete: boolean;
}

export interface UseDrakModeType {
  isDarkMode: boolean;
  changeDarkMode: () => void;
}

export interface UseTasksType {
  tasks: TaskType[];
  addTask: (label: string) => void;
  changeComplete: (id: string) => void;
}
