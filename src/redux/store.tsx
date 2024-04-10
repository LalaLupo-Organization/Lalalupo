import { configureStore } from "@reduxjs/toolkit"
import lessonReducer from "@/features/lessonSlice"
import userInputReducer from "@/features/userInputSlice"
import userReducer from "@/features/userSlice"
import { api } from "@/services/api"
import { setupListeners } from "@reduxjs/toolkit/query"
import { useDispatch } from "react-redux"
// import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      lessonReduxState: lessonReducer,
      userInputReduxState: userInputReducer,
      userReduxState: userReducer,
      [api.reducerPath]: api.reducer,
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
  })
}
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
