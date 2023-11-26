import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/counterSlice"; //exampleCounter
import lessonReducer from "../../features/lessonSlice"; //exampleCounter
import { languageCourseApi } from "@/app/services/data";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    lessonReduxState: lessonReducer,
    [languageCourseApi.reducerPath]: languageCourseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(languageCourseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
setupListeners(store.dispatch);
