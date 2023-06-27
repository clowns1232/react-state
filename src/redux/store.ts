import {
  combineReducers,
  configureStore,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TaskType } from "./sliceTypes";

// tasks 초기 상태 값

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

export default configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export const { addTodo, checkTodo } = tasksSlice.actions;
