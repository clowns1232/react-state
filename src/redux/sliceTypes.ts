export interface TaskType {
  id: string;
  label: string;
  complete: boolean;
}
export interface reduxStoreType {
  tasks: [TaskType];
  darkMode: boolean;
}
