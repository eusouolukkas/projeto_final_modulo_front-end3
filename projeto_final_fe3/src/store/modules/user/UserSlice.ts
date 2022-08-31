import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: string;
  name: string;
  token?: string;
}

export interface CreateUser {
  name: string;
  pass: string;
  Rpass: string;
}

export interface LoginUser {
  name: string;
  pass: string;
}

const initialState: User = {
  id: "",
  name: "",
};

export const createUser = createAsyncThunk(
  "users/create",
  async (user: CreateUser, thunkAPI) => {
    const response = await axios.post(
      "https://api-tasks-list.herokuapp.com/user/",
      user
    );
    return response.data.data;
  }
);

export const login = createAsyncThunk(
  "users/login",
  async (user: LoginUser, thunkAPI) => {
    const response = await axios.post(
      "https://api-tasks-list.herokuapp.com/user/login",
      user
    );
    return response.data.data;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createUser.fulfilled, (state, action) => {
      return {
        id: action.payload.id,
        name: action.payload.name,
        taskList: action.payload.taskList,
      };
    });
    builder.addCase(login.fulfilled, (state, action) => {
      return {
        id: action.payload.id,
        name: action.payload.userName,
        token: action.payload.token,
      };
    });
  },
});

export default loginSlice.reducer;
