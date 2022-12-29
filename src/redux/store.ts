import { configureStore } from "@reduxjs/toolkit";

import { UserListReducer } from "./reducers/UserReducer";

const store = configureStore({
  reducer: UserListReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
