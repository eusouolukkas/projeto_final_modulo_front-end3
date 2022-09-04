import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export interface LerTask {
  id: string;
  description: string;
  detail: string;
  token?: string;
}

export interface CriarTask {
  description: string;
  detail: string;
  token?: string;
}

export interface EditarTask {
  id: string;
  description: string;
  detail: string;
  token?: string;
}

export interface DeletarTask {
  id: string;
  description: string;
  detail: string;
  token?: string;
}

export const lerTask = createAsyncThunk(
  "task/readTasksByUserId",
  async (token: string | undefined, thunkAPI) => {
    const response = await axios.get(
      `https://api-tasks-list.herokuapp.com/task/readTasksByUserId?token=${token}`
    );
    return response.data.data;
  }
);

export const criarTask = createAsyncThunk(
  "task/create",
  async (task: CriarTask, thunkAPI) => {
    const response = await axios.post(
      "https://api-tasks-list.herokuapp.com/task/"
    );
    return response.data.data;
  }
);

export const editarTask = createAsyncThunk(
  "task/",
  async (task: EditarTask, thunkAPI) => {
    const response = await axios.put(
      "https://api-tasks-list.herokuapp.com/task/"
    );
    return response.data.data;
  }
);

export const deletarTask = createAsyncThunk(
  "task/{id}",
  async (id: string, thunkAPI) => {
    const response = await axios.delete(
      `https://api-tasks-list.herokuapp.com/task/${id}`
    );
    return response.data.data;
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
    removeOne: adapter.removeOne,
  },
  extraReducers: (builder) => {
    builder.addCase(lerTask.fulfilled, (state, action) => {
      adapter.setAll(state, action.payload);
    });
    builder.addCase(criarTask.fulfilled, (state, action) => {
      adapter.updateOne(state, action.payload);
      state.loading = false;
    });
    builder.addCase(editarTask.fulfilled, (state, action) => {
      adapter.addOne(state, action.payload);
      state.loading = false;
    });
    builder.addCase(deletarTask.fulfilled, (state, action) => {
      adapter.removeOne(state, action.payload);
      state.loading = false;
    });
  },
});

export const { addOne, addMany, updateOne, removeOne } = tasksSlice.actions;
export default tasksSlice.reducer;
