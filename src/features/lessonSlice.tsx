import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import { LessonState } from "@/types/lessons.types";
// import { AssessmentState } from "../models/test.model";

// Define a type for the slice state

// Define the initial state using that type
const initialState: LessonState = {
  _id: "",
  __v: 0,
  isComplete: false,
  hasFailed: false,
  attempts: 0,
  totalExercises: 0,
  remainingExercises: 0,
  lives: null,
  numberComplete: 0,
  numberFailed: 0,
  correctLetters: [],
  activeExercise: {
    type: "chooseTheRightSolution",
    _id: "635f9a0fefff76c1f466c9be",
    solution: "panino",
    availableWords: ["panino", "ravioli", "espresso"],
    instructions: "What is this?",
    displayImage: true,
    displayImageSrc:
      "https://imagedelivery.net/_Fh-Z9aj1rlSxXMDl1yqsg/b753daa9-b6c7-4773-a681-e1f881c9f600/character",
    isComplete: false,
    hasFailed: false,
  },
  interactiveExercises: [
    {
      type: "chooseTheRightSolution",
      _id: "635f9a0fefff76c1f466c9be",
      solution: "panino",
      availableWords: ["panino", "ravioli", "espresso"],
      instructions: "What is this?",
      displayImage: true,
      displayImageSrc:
        "https://imagedelivery.net/_Fh-Z9aj1rlSxXMDl1yqsg/b753daa9-b6c7-4773-a681-e1f881c9f600/character",
      isComplete: false,
      hasFailed: false,
    },
  ],
};

export const lessonSlice = createSlice({
  name: "lessonReduxState",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    putInteractiveExerciseDataIntoState: (
      state,
      action: PayloadAction<LessonState>
    ) => {
      state = action.payload;
    },
    putActiveExerciseIntoState: (state) => {
      let found = state.interactiveExercises.find(
        (item) => !item.isComplete && !item.hasFailed && item
      );

      if (found) {
        state.activeExercise = found;
      }
    },
    clearCurrentUnit: (state) => initialState,
    setInteractiveExerciseLength: (state) => {
      state.totalExercises = state.interactiveExercises.length;
      state.remainingExercises = state.interactiveExercises.length;
    },

    setCorrectAnswer: (state) => {
      if (state.activeExercise) {
        state.activeExercise.isComplete = true;
        state.numberComplete += 1;
        state.remainingExercises -= 1;
      }
      //set the interactiveExercise to isComplete
      const found = state.interactiveExercises.find(
        (item) => item._id === state.activeExercise?._id
      );
      if (found) {
        Object.assign(found, state.activeExercise);
      }
    },

    clearActiveExercise: (state) => {
      state.activeExercise = initialState.activeExercise;
    },

    setLives: (state, action: PayloadAction<number>) => {
      state.lives = action.payload;
    },

    setIncorrectAnswer: (state) => {
      if (state.activeExercise) {
        state.activeExercise.hasFailed = true;
        state.numberFailed += 1;
      }
      if (state.lives) {
        state.lives -= 1;
      }
      //set the interactiveExercise to isComplete
      const found = state.interactiveExercises.find(
        (item) => item._id === state.activeExercise?._id
      );
      if (found) {
        Object.assign(found, state.activeExercise);
      }

      let filtered = state.interactiveExercises.map((item) => {
        if (item._id === state.activeExercise?._id) {
          item.hasFailed = true;
        }
        return item;
      });

      state.interactiveExercises = filtered;
      state.remainingExercises -= 1;
    },
  },
});

export const {
  setIncorrectAnswer,
  setLives,
  setCorrectAnswer,
  putInteractiveExerciseDataIntoState,
  putActiveExerciseIntoState,
  clearCurrentUnit,
  setInteractiveExerciseLength,
  clearActiveExercise,
} = lessonSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLesson = (state: RootState) =>
  state.lessonReduxState;

// export const selectCurrentUnitIsComplete = (state: RootState) =>
//   state.isComplete;
// export const selectActiveExercise = (state: RootState) =>
//   state.activeExercise;
// export const selectToSeeIfAllInteractiveExercisesAreComplete = (
//   state: RootState
// ) => {
//   const found = state.interactiveExercises?.some(
//     (item) => !item.isComplete && !item.hasFailed && item
//   );
//   return found;
// };
// export const selectTotalNumberOfExercises = (state: RootState) =>
//   state.totalExercises;
// export const selectRemainingLengthOfExercises = (state: RootState) =>
//   state.remainingExercises;
// export const selectNumberOfExercisesComplete = (state: RootState) =>
//   state.numberComplete;
// export const selectNumberOfExercisesFailed = (state: RootState) =>
//   state.numberFailed;

// export const selectInteractiveExercises = (state: RootState) =>
//   state.interactiveExercises;

export default lessonSlice.reducer;
