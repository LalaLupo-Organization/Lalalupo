import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import { LessonState } from "@/types/lesson.types";
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
    //ChooseTheRightSolution
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
    //MatchPairsExercise
    {
      type: "reorder",
      _id: "12345",
      solution: "Non giocare con il fuoco!",
      instructions: "Reorder the words to translate the sentence.",
      displayText: "Do not play with fire!",
      availableWords: [
        "Non",
        "giocare",
        "con",
        "il",
        "fuoco!",
        "gioco",
        "lo",
        "fuochi!",
        "suonare",
      ],
      isComplete: false,
      hasFailed: false,
    },
    //ConjugationExercise
    {
      _id: "12345",
      instructions: "Match the corresponding words.",
      isComplete: false,
      hasFailed: false,
      solution: "Some solution here",
      display: "ANDARE (TO GO)",
      type: "conjugation",

      availableWords: {
        pairs: [
          ["io", "andrei"],
          ["tu", "andresti"],
          ["lui/lei", "andrebbe"],
          ["noi", "andremmo"],
          ["voi", "andreste"],
          ["loro", "andrebbero"],
        ],
      },
    },
    //FillInTheBlankExercise
    {
      type: "fillInTheBlank",
      _id: "12345",
      instructions:
        "Fill in the blank with the correct conjugation of the verb.",
      displayText: "We are looking for a job.",
      couldBeEmpty: "",
      regex: "",
      doubleSolution: false,
      isComplete: false,
      hasFailed: false,
      missingWord: "cerchiamo",
      solution: ["Noi", "cerchiamo", "un lavoro."],
      vocabularyHelper: ["to look for = cercare"],
    },
    //FillInWhatYouHear
    {
      _id: "12234",
      type: "fillInWhatYouHear",
      solution: ["Abbiamo deciso", "che fare."],
      instructions: "Type the missing word(s).",
      displayMeaning: true,
      english: "We decided what to do.",
      missingWord: "Abbiamo deciso",

      isComplete: false,
      hasFailed: false,
    },
    //ListenAndSelect
    {
      type: "listenAndSelect",
      _id: "12345",
      solution: "chiuso",
      instructions: "Select the correct spelling of the word.",
      english: "closed",
      audio: "chiuso",
      availableWords: [["ciuso"], ["chiuso"]],

      isComplete: false,
      hasFailed: false,
    },
    //missingSyllable
    {
      type: "missingSyllable",
      _id: "1234455",
      solution: "gni",
      instructions: "Select the missing part of the word.",
      display: ["ra", "gni"],
      italian: "ragni",
      english: "spiders",
      availableWords: ["ni", "gni"],

      isComplete: false,
      hasFailed: false,
    },
    //multipleAnswers
    {
      type: "multipleAnswers",
      _id: "12345",

      instructions:
        "Select all verbs conjugated with 'avere' in the present perfect.",
      availableWords: [
        {
          italian: "portare",
          correct: true,
          english: "(to bring)",
        },
        {
          italian: "dire",
          correct: true,
          english: "(to tell)",
        },
        {
          italian: "comprare",
          correct: true,
          english: "(to buy)",
        },
        {
          italian: "vendere",
          correct: true,
          english: "(to sell)",
        },
        {
          italian: "partire",
          correct: false,
          english: "(to leave)",
        },
        {
          italian: "tornare",
          correct: false,
          english: "(to return)",
        },
      ],
      targetNumber: 4,
      displayMeaning: true,

      isComplete: false,
      hasFailed: false,
    },
    //partOfAWord
    {
      type: "partOfAWord",
      _id: "12345",
      instructions: "Type the missing part of the word.",
      missing: ["chi"],
      word: ["fuo", "chi"],
      english: "fires",

      isComplete: false,
      hasFailed: false,
    },
    //reorder

    //reorderWhatYouHear
    {
      type: "reorderWhatYouHear",
      _id: "123456",
      solution: "Mia figlia sta imparando a camminare.",
      instructions: "Reorder the words to replicate the sentence.",
      english: "My daughter is learning to walk.",
      availableWords: [
        "Mia",
        "figlia",
        "sta",
        "imparando",
        "a",
        "camminare.",
        "impara",
        "stai",
        "Mie",
        "cammina",
        "le.",
      ],

      isComplete: false,
      hasFailed: false,
    },
    //selectTheMissingWords
    {
      type: "selectTheMissingWord",
      _id: "123555",
      solution: "stanno",
      instructions: "Choose the correct conjugation of the verb.",
      displayText: ["loro", "stanno", "(they stay)"],
      availableWords: ["sto", "stai", "sta", "stiamo", "state", "stanno"],

      isComplete: false,
      hasFailed: false,
    },
    //speakingAndPrononcing
    {
      type: "speakingAndPronunciation",
      _id: "2343423",
      solution: "Vado da Marco.",
      doubleSolution: false,
      regex: "",
      instructions:
        "Say this in Italian. Omit the subject pronoun (if present).",
      vocabularyHelper: ["to go = andare", "Mark = Marco"],
      display: "I am going to Mark's.",
      displayMeaning: false,

      isComplete: false,
      hasFailed: false,
    },
    //twoBlanks
    {
      type: "twoBlanks",
      _id: "123454",
      solution: ["sei uscito", "Sono uscito"],
      instructions:
        "Fill in the blanks with the correct conjugation of the verb.",
      vocabularyHelper: ["to go out = uscire"],
      italian: [
        "Paolo, quando",
        "sei uscito",
        "?",
        "Sono uscito",
        "questo pomeriggio.",
      ],
      english: ["Paul, when did you go out? I went out this afternoon."],

      isComplete: false,
      hasFailed: false,
    },
    //typeInWhatYouHear
    {
      type: "typeInWhatYouHear",
      _id: "123434",
      solution: "Sai chi mi ha scritto?",
      instructions: "Type what you hear.",
      english: "Do you<sup>(s)</sup> know who wrote to me?",
      doubleSolution: false,
      displayMeaning: true,
      audio: "Sai chi mi ha scritto?",

      isComplete: false,
      hasFailed: false,
    },
    //writeTheSentence
    {
      type: "writeTheSentence",
      _id: "1223423",
      solution: "L'esercizio è semplice.",
      instructions:
        "Translate this into Italian. Include the subject pronoun (if present).",
      displayMeaning: false,
      regex: "",
      display: "The exercise is simple.",
      doubleSolution: false,
      vocabularyHelper: ["exercise = esercizio", "simple = semplice"],

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
      action: PayloadAction<LessonState>,
    ) => {
      state = action.payload;
    },
    putActiveExerciseIntoState: (state) => {
      let found = state.interactiveExercises.find(
        (item) => !item.isComplete && !item.hasFailed && item,
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
        (item) => item._id === state.activeExercise?._id,
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
        (item) => item._id === state.activeExercise?._id,
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
export const selectLesson = (state: RootState) => state.lessonReduxState;
export const selectAssessment = (state: RootState) => state.lessonReduxState;
export const selectCurrentUnitIsComplete = (state: RootState) =>
  state.lessonReduxState.isComplete;
export const selectActiveExercise = (state: RootState) =>
  state.lessonReduxState.activeExercise;
export const selectToSeeIfAllInteractiveExercisesAreComplete = (
  state: RootState,
) => {
  const found = state.lessonReduxState.interactiveExercises?.some(
    (item) => !item.isComplete && !item.hasFailed && item,
  );
  return found;
};
export const selectTotalNumberOfExercises = (state: RootState) =>
  state.lessonReduxState.totalExercises;
export const selectRemainingLengthOfExercises = (state: RootState) =>
  state.lessonReduxState.remainingExercises;
export const selectNumberOfExercisesComplete = (state: RootState) =>
  state.lessonReduxState.numberComplete;
export const selectNumberOfExercisesFailed = (state: RootState) =>
  state.lessonReduxState.numberFailed;

export const selectInteractiveExercises = (state: RootState) =>
  state.lessonReduxState.interactiveExercises;

export default lessonSlice.reducer;
