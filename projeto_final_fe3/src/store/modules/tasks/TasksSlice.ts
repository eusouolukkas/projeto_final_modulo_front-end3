import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export interface LerTask {
  description: string;
  detail: string;
  token?: string;
}

export interface CriarTask {
  description: string;
  detail: string;
  token?: string;
}

export const lerTask = createAsyncThunk(
  "task/readTasksByUserId",
  async (user: LerTask, thunkAPI) => {
    const response = await axios.get(
      "https://api-tasks-list.herokuapp.com/task/readTasksByUserId"
    );
    return response.data;
  }
);

export const criarTask = createAsyncThunk(
  "task/",
  async (user: LerTask, thunkAPI) => {
    const response = await axios.post(
      "https://api-tasks-list.herokuapp.com/task/"
    );
    return response.data;
  }
);

const adapter = createEntityAdapter<LerTask>({
  selectId: (item) => item.description,
});

export const { selectAll, selectById } = adapter.getSelectors(
  (state: any) => state.tasks
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState: adapter.getInitialState({
    loading: false,
  }),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
  },
  extraReducers: (builder) => {
    builder.addCase(lerTask.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(criarTask.fulfilled, (state, action) => {
      adapter.setAll(state, action.payload);
      state.loading = false;
    });
  },
});

export const { addOne, addMany, updateOne } = tasksSlice.actions;
export default tasksSlice.reducer;
