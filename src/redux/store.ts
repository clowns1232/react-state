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
  },
});

export default configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export const { addTodo } = tasksSlice.actions;
