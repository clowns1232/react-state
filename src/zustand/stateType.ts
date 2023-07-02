export interface TaskType {
  id: string;
  label: string;
  complete: boolean;
}
export interface UseTasksType {
  tasks: TaskType[];
  addTask: (label: string) => void;
  changeComplete: (id: string) => void;
}
