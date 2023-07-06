import { configureStore } from "@reduxjs/toolkit";
import repositoriesSlice from "../slices/repositories-slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    repositories: repositoriesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types

export type RootState = ReturnType<typeof store.getState>;
