export interface TaskType {
  id: string;
  label: string;
  complete: boolean;
}
export interface UseTasksType {
  tasks: Array<TaskType>;
  addTask: (label: string) => void;
}
