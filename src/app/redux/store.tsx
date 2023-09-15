import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import { languageCourseApi } from "@/app/services/data";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [languageCourseApi.reducerPath]: languageCourseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(languageCourseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
