import type { RootState } from "@/redux/store"
import { LessonState } from "@/types/lesson.types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// Define the initial state using that type
const initialState: LessonState = {
  _id: "kdsmfndskfnk4ner0frfiw4mof",
  __v: 0,
  languageCode: "it-en",
  isComplete: false,
  hasFailed: false,
  attempts: 0,
  totalExercises: 15,
  remainingExercises: 15,
  lives: null,
  numberComplete: 0,
  numberFailed: 0,
  correctLetters: [],
  activeExercise: {
    type: "speakingAndPronunciation",
    _id: "2343423",
    solution: "Vado Da Marco.",
    micLang: "it-IT",
    doubleSolution: false,
    regex: "",
    instructions: "Say this in Italian. Omit the subject pronoun (if present).",
    helper: [{ type: "Vocabulary", values: ["to go = andare", "Mark = Marco"] }],
    displayText: "I am going to Mark's.",
    displayMeaning: false,
    solutionAudioURL: "https://ispeakitalian.herokuapp.com/correct.mp3",
    isComplete: false,
    hasFailed: false,
  },
  // activeExercise: {
  //   type: "fillInTheBlank",
  //   _id: "12345",
  //   instructions: "Fill in the blank with the correct conjugation of the verb.",
  //   displayText: "We are looking for a job.",
  //   couldBeEmpty: "",
  //   regex: "",
  //   doubleSolution: false,
  //   availableWords: ["here"],
  //   isComplete: false,
  //   hasFailed: false,
  //   missingWord: "cerchiamo",
  //   solution: ["Noi", "cerchiamo", "un lavoro."],
  //   helper: [
  //     { type: "Vocabulary", values: ["to look for = cercare"] },
  //     { type: "Tip", values: ["Tip 1", "Tip 2"] },
  //   ],
  // },
  interactiveExercises: [
    //FillInTheBlankExercise
    {
      type: "fillInTheBlank",
      _id: "12345",
      instructions: "Fill in the blank with the correct conjugation of the verb.",
      displayText: "We are looking for a job.",
      couldBeEmpty: "",
      regex: "",
      doubleSolution: false,
      availableWords: ["here"],
      isComplete: false,
      hasFailed: false,
      missingWord: "cerchiamo",
      solution: ["Noi", "cerchiamo", "un lavoro."],
      helper: [{ type: "Vocabulary", values: ["to look for = cercare"] }],
    },
    //FillInWhatYouHear
    {
      _id: "122345",
      type: "fillInWhatYouHear",
      solution: ["Abbiamo deciso", "che fare."],
      instructions: "Type the missing word(s).",
      displayMeaning: true,
      originLanguage: "We decided what to do.",
      missingWord: "Abbiamo deciso",
      solutionAudioURL: "TEST",
      isComplete: false,
      hasFailed: false,
    },
    //typeInWhatYouHear
    {
      type: "typeInWhatYouHear",
      _id: "123434",
      solution: "Sai chi mi ha scritto?",
      instructions: "Type what you hear.",
      originLanguage: "Do you<sup>(s)</sup> know who wrote to me?",
      doubleSolution: false,
      displayMeaning: true,
      solutionAudioURL: "Sai chi mi ha scritto?",

      isComplete: false,
      hasFailed: false,
    },
    //writeTheSentence
    {
      type: "writeTheSentence",
      _id: "1223423",
      solution: "L'esercizio è semplice.",
      instructions: "Translate this into Italian. Include the subject pronoun (if present).",
      displayMeaning: false,
      regex: "",
      displayText: "The exercise is simple.",
      doubleSolution: false,
      helper: [{ type: "Vocabulary", values: ["exercise = esercizio", "simple = semplice"] }],
      originLanguage: "",
      isComplete: false,
      hasFailed: false,
    },
    {
      type: "reorder",
      _id: "12345",
      solution: "Non giocare con il fuoco!",
      instructions: "Reorder the words.",
      displayText: "Do not play with fire!",
      displayTextAudioURL: "https://ispeakitalian.herokuapp.com/correct.mp3",
      availableWords: [
        { word: "Non", wordAudioURL: "https://example.com/Non.mp3" },
        { word: "giocare", wordAudioURL: "https://example.com/giocare.mp3" },
        { word: "con", wordAudioURL: "https://ispeakitalian.herokuapp.com/correct.mp3" },
        { word: "il", wordAudioURL: "https://ispeakitalian.herokuapp.com/incorrect.mp3" },
        { word: "fuoco!", wordAudioURL: "https://example.com/fuoco!.mp3" },
        { word: "gioco", wordAudioURL: "https://example.com/gioco.mp3" },
        { word: "lo", wordAudioURL: "https://example.com/lo.mp3" },
        { word: "fuochi!", wordAudioURL: "https://example.com/fuochi!.mp3" },
        { word: "suonare", wordAudioURL: "https://example.com/suonare.mp3" },
      ],
      isComplete: false,
      hasFailed: false,
    },
    //ChooseTheRightSolution
    {
      type: "chooseTheRightSolution",
      _id: "635f9a0fefff76c1f466c9be",
      solution: "Latte",
      // availableWords: ["panino", "ravioli", "espresso"],
      availableWords: [
        {
          label: "Zucchero",
          hasImage: true,
          imageSrc: "/assets/ExercisesImages/Zucchero.png",
        },
        {
          label: "Gelato",
          hasImage: true,
          imageSrc: "/assets/ExercisesImages/Gelato.png",
        },
        {
          label: "Latte",
          hasImage: true,
          imageSrc: "/assets/ExercisesImages/Milk.png",
        },
      ],
      instructions: 'Which one is "Milk"?',
      displayImage: true,
      displayImageSrc: "https://imagedelivery.net/_Fh-Z9aj1rlSxXMDl1yqsg/b753daa9-b6c7-4773-a681-e1f881c9f600/character",
      isComplete: false,
      hasFailed: false,
    },
    {
      _id: "1234567",
      successPairAudioURL: "https://ispeakitalian.herokuapp.com/correct.mp3",
      instructions: "Match the corresponding words.",
      isComplete: false,
      hasFailed: false,
      solution: "Some solution here",
      type: "matchPairs",
      availableWords: {
        pairs: [
          ["attenzione", "attention"],
          ["stazione", "station"],
          ["possibile", "possible"],
        ],
        column1: {
          column: "1",
          read: true,
        },
        column2: {
          column: "2",
          read: false,
        },
      },
    },
    {
      type: "reorderWhatYouHear",
      _id: "123456",
      solution: "Mia figlia sta imparando a camminare.",
      instructions: "Reorder the words to replicate the sentence.",
      displayText: "My daughter is learning to walk.", // This language is the foreign language
      solutionAudioURL: "", // spoken language
      // Here words will be the spoken language
      availableWords: [
        { word: "Mia", wordAudioURL: "https://example.com/Mia.mp3" },
        { word: "figlia", wordAudioURL: "https://example.com/figlia.mp3" },
        { word: "sta", wordAudioURL: "https://example.com/sta.mp3" },
        { word: "imparando", wordAudioURL: "https://example.com/imparando.mp3" },
        { word: "a", wordAudioURL: "https://example.com/a.mp3" },
        { word: "camminare.", wordAudioURL: "https://example.com/camminare..mp3" },
        { word: "impara", wordAudioURL: "https://example.com/impara.mp3" },
        { word: "stai", wordAudioURL: "https://example.com/stai.mp3" },
        { word: "Mie", wordAudioURL: "https://example.com/Mie.mp3" },
        { word: "cammina", wordAudioURL: "https://example.com/cammina.mp3" },
        { word: "le.", wordAudioURL: "https://example.com/le..mp3" },
      ],
      isComplete: false,
      hasFailed: false,
    },
    //Reorder
    // {
    //   type: "reorder",
    //   _id: "12345",
    //   solution: "Non giocare con il fuoco!",
    //   instructions: "Reorder the words to translate the sentence.",
    //   displayText: "Do not play with fire!",
    //   displayTextAudioURL: "https://ispeakitalian.herokuapp.com/correct.mp3",
    //   availableWords: [
    //     { word: "Non", wordAudioURL: "https://example.com/Non.mp3" },
    //     { word: "giocare", wordAudioURL: "https://example.com/giocare.mp3" },
    //     { word: "con", wordAudioURL: "https://example.com/con.mp3" },
    //     { word: "il", wordAudioURL: "https://example.com/il.mp3" },
    //     { word: "fuoco!", wordAudioURL: "https://example.com/fuoco!.mp3" },
    //     { word: "gioco", wordAudioURL: "https://example.com/gioco.mp3" },
    //     { word: "lo", wordAudioURL: "https://example.com/lo.mp3" },
    //     { word: "fuochi!", wordAudioURL: "https://example.com/fuochi!.mp3" },
    //     { word: "suonare", wordAudioURL: "https://example.com/suonare.mp3" },
    //   ],
    //   isComplete: false,
    //   hasFailed: false,
    // },
    // //ConjugationExercise
    // {
    //   _id: "12345",
    //   instructions: "Match the corresponding words.",
    //   isComplete: false,
    //   hasFailed: false,
    //   solution: "Some solution here",
    //   display: "ANDARE (TO GO)",
    //   type: "conjugation",

    //   availableWords: {
    //     pairs: [
    //       ["io", "andrei"],
    //       ["tu", "andresti"],
    //       ["lui/lei", "andrebbe"],
    //       ["noi", "andremmo"],
    //       ["voi", "andreste"],
    //       ["loro", "andrebbero"],
    //     ],
    //   },
    // },

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
    // //missingSyllable
    // {
    //   type: "missingSyllable",
    //   _id: "1234455",
    //   solution: "gni",
    //   instructions: "Select the missing part of the word.",
    //   display: ["ra", "gni"],
    //   italian: "ragni",
    //   english: "spiders",
    //   availableWords: ["ni", "gni"],

    //   isComplete: false,
    //   hasFailed: false,
    // },
    //multipleAnswers
    {
      type: "multipleAnswers",
      _id: "12345",

      instructions: "Select all verbs conjugated with 'avere' in the present perfect.",
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
      displayText: "My daughter is learning to walk.", // This language is the foreign language
      solutionAudioURL: "", // spoken language
      // Here words will be the spoken language
      availableWords: [
        { word: "Mia", wordAudioURL: "https://example.com/Mia.mp3" },
        { word: "figlia", wordAudioURL: "https://example.com/figlia.mp3" },
        { word: "sta", wordAudioURL: "https://example.com/sta.mp3" },
        { word: "imparando", wordAudioURL: "https://example.com/imparando.mp3" },
        { word: "a", wordAudioURL: "https://example.com/a.mp3" },
        { word: "camminare.", wordAudioURL: "https://example.com/camminare..mp3" },
        { word: "impara", wordAudioURL: "https://example.com/impara.mp3" },
        { word: "stai", wordAudioURL: "https://example.com/stai.mp3" },
        { word: "Mie", wordAudioURL: "https://example.com/Mie.mp3" },
        { word: "cammina", wordAudioURL: "https://example.com/cammina.mp3" },
        { word: "le.", wordAudioURL: "https://example.com/le..mp3" },
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
      solution: "Hello world.",
      doubleSolution: false,
      regex: "",
      micLang: "en-US",
      instructions: "Say this in Italian. Omit the subject pronoun (if present).",
      helper: [{ type: "Vocabulary", values: ["to go = andare", "Mark = Marco"] }],
      displayText: "I am going to Mark's.",
      displayMeaning: false,
      solutionAudioURL: "https://ispeakitalian.herokuapp.com/correct.mp3",
      isComplete: false,
      hasFailed: false,
    },
    // //twoBlanks
    // {
    //   type: "twoBlanks",
    //   _id: "123454",
    //   solution: ["sei uscito", "Sono uscito"],
    //   instructions: "Fill in the blanks with the correct conjugation of the verb.",
    //   vocabularyHelper: ["to go out = uscire"],
    //   italian: ["Paolo, quando", "sei uscito", "?", "Sono uscito", "questo pomeriggio."],
    //   english: ["Paul, when did you go out? I went out this afternoon."],

    //   isComplete: false,
    //   hasFailed: false,
    // },
  ],
}

export const lessonSlice = createSlice({
  name: "lessonReduxState",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    putInteractiveExerciseDataIntoState: (state: LessonState, action: PayloadAction<LessonState>) => {
      state = action.payload
    },
    putActiveExerciseIntoState: (state: LessonState) => {
      let found = state.interactiveExercises.find(item => !item.isComplete && !item.hasFailed && !item?.isSkiped)

      // Check for skipped exercises ??
      if (!found) {
        found = state.interactiveExercises.find(item => !item.isComplete && !item.hasFailed && item?.isSkiped)
      }

      if (found) {
        state.activeExercise = found
      }
    },
    clearCurrentUnit: () => initialState,
    setInteractiveExerciseLength: (state: LessonState) => {
      state.totalExercises = state.interactiveExercises.length
      state.remainingExercises = state.interactiveExercises.length
    },

    setCorrectAnswer: (state: LessonState) => {
      if (state.activeExercise) {
        state.activeExercise.isComplete = true
        state.numberComplete += 1
        state.remainingExercises -= 1
      }
      // set the interactiveExercise to isComplete
      const found = state.interactiveExercises.find(item => item._id === state.activeExercise?._id)
      if (found) {
        Object.assign(found, state.activeExercise)
      }
    },

    setSkippedExercise: (state: LessonState) => {
      if (state.activeExercise) {
        // if (state.activeExercise.type === "speakingAndPronunciation") {
        //   state.interactiveExercises = state.interactiveExercises.filter(({ _id }) => _id !== state.activeExercise._id)
        // }
        state.activeExercise.isSkiped = true
      }
      // set the interactiveExercise to isComplete
      const found = state.interactiveExercises.find(item => item._id === state.activeExercise?._id)
      if (found) {
        Object.assign(found, state.activeExercise)
      }
    },

    clearActiveExercise: (state: LessonState) => {
      state.activeExercise = initialState.activeExercise
    },

    setLives: (state: LessonState, action: PayloadAction<number>) => {
      state.lives = action.payload
    },

    setIncorrectAnswer: (state: LessonState) => {
      if (state.activeExercise) {
        state.activeExercise.hasFailed = true
        state.numberFailed += 1
      }
      if (state.lives) {
        state.lives -= 1
      }
      //set the interactiveExercise to isComplete
      const found = state.interactiveExercises.find(item => item._id === state.activeExercise?._id)
      if (found) {
        Object.assign(found, state.activeExercise)
      }

      const filtered = state.interactiveExercises.map(item => {
        if (item._id === state.activeExercise?._id) {
          item.hasFailed = true
        }
        return item
      })

      state.interactiveExercises = filtered
      state.remainingExercises -= 1
    },
  },
})

export const {
  setIncorrectAnswer,
  setLives,
  setCorrectAnswer,
  putInteractiveExerciseDataIntoState,
  putActiveExerciseIntoState,
  clearCurrentUnit,
  setInteractiveExerciseLength,
  clearActiveExercise,
  setSkippedExercise,
} = lessonSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLesson = (state: RootState): LessonState => state.lessonReduxState
export const selectAssessment = (state: RootState) => state.lessonReduxState
export const selectCurrentUnitIsComplete = (state: RootState) => state.lessonReduxState.isComplete
export const selectActiveExercise = (state: RootState) => state.lessonReduxState.activeExercise
export const selectToSeeIfAllInteractiveExercisesAreComplete = (state: RootState) => {
  const found = state.lessonReduxState.interactiveExercises?.some((item: any) => !item.isComplete && !item.hasFailed && item)
  return found
}
export const selectTotalNumberOfExercises = (state: RootState) => state.lessonReduxState.totalExercises
export const selectRemainingLengthOfExercises = (state: RootState) => state.lessonReduxState.remainingExercises
export const selectNumberOfExercisesComplete = (state: RootState) => state.lessonReduxState.numberComplete
export const selectNumberOfExercisesFailed = (state: RootState) => state.lessonReduxState.numberFailed

export const selectInteractiveExercises = (state: RootState) => state.lessonReduxState.interactiveExercises

export default lessonSlice.reducer
