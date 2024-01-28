import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/counterSlice";
import lessonReducer from "../../features/lessonSlice";
import userInputReducer from "../../features/userInputSlice";
import { api } from "@/services/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    lessonReduxState: lessonReducer,
    userInputReduxState: userInputReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
setupListeners(store.dispatch);
