import {
  createAsyncThunk,
  createReducer,
  PayloadAction,
} from "@reduxjs/toolkit";
import { User } from "../types";
import { addUser, removeUser, updateUser } from "../actions/Actions";
import axios from "axios";
export type UserListState = {
  users: User[];
};

export const initialState: UserListState = {
  users: [],
};
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  return await axios
    .get("http://localhost:3001/getUsers")
    .then((res) => res.data);
});
export const UserListReducer = createReducer(initialState, (builder) => {
  builder.addCase(addUser, (state, action) => {
    state.users.push(action.payload);
  });
  builder.addCase(removeUser, (state, action) => {
    state.users = state.users.filter((user) => user._id !== action.payload);
  });
  builder.addCase(updateUser, (state, action) => {
    const List = state.users;
    List.map((user: User) => {
      if (user._id === action.payload._id) {
        user.name = action.payload.name;
        user.age = action.payload.age;
        user.gender = action.payload.gender;
        user.mail = action.payload.mail;
        state.users = [...List];
      }
    });
  });
  builder.addCase(
    fetchUsers.fulfilled,
    (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    }
  );
});
