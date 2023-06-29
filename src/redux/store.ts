import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TaskType } from "./sliceTypes";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [] as TaskType[],
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<TaskType>) => {
        state.push(action.payload);
      },
      prepare: (label: string) => {
        const id = nanoid();
        return { payload: { id, label, complete: false } };
      },
    },
    checkTodo: (state, action) => {
      const checkItem = state.filter((task) => task.id === action.payload);
      checkItem[0].complete = !checkItem[0].complete;
    },
  },
});

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: true as boolean,
  reducers: {
    changeDarkMode: (state) => {
      return !state;
    },
  },
});

export default configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    darkMode: darkModeSlice.reducer,
  },
});

export const { addTodo, checkTodo } = tasksSlice.actions;
export const { changeDarkMode } = darkModeSlice.actions;
