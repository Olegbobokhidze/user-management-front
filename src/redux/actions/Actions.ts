import { createAction } from "@reduxjs/toolkit";
import { User } from "../types";

export const addUser = createAction("ADD_USER", (user: User) => ({
  payload: user,
}));
export const updateUser = createAction("UPDATE_USER", (user: User) => ({
  payload: user,
}));
export const removeUser = createAction("REMOVE_USER", (id: string) => ({
  payload: id,
}));
