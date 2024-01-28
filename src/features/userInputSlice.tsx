import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import { UserInputState } from "@/types/userInput.types";
// Define a type for the slice state

// Define the initial state using that type
const initialState: UserInputState = {
  userInput: null,
  userArrayInput: [],
  userObjectInput: null,
};

export const userInputSlice = createSlice({
  name: "userInput",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setSingleInput: (
      state,
      action: PayloadAction<UserInputState["userInput"]>
    ) => {
      state.userInput = action.payload;
    },
    setArrayInput: (
      state,
      action: PayloadAction<UserInputState["userArrayInput"]>
    ) => {
      state.userArrayInput = action.payload;
    },
    setObjectInput: (
      state,
      action: PayloadAction<UserInputState["userObjectInput"]>
    ) => {
      state.userObjectInput = action.payload;
    },

    clearUserInput: (state) => initialState,
  },
});

export const {
  setSingleInput,
  clearUserInput,
  setArrayInput,
  setObjectInput,
} = userInputSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserInput = (state: RootState) =>
  state.userInputReduxState;

export default userInputSlice.reducer;
