import { BaseExercise } from "./lesson.types"

export type MatchPairsExercise = BaseExercise & {
  type: "matchPairs"
  availableWords: {
    pairs: [string, string][] //just make sure this is and array of arrays
    column1: { column: string; read: boolean }
    column2: { column: string; read: boolean }
  }
  englishAnswers?: string[]
  successPairAudioURL?: string
  successPairAudioScript?: string // the text for audio file
}

export interface IRandomizedData {
  column1: string[]
  column2: string[]
}

export interface ISelected {
  pair: string[]
  successfulPairs: [string, string][]
}

export interface IReduxUserObjectInput {
  userObjectInput: ISelected
}

export interface IAvailableAnswerProps {
  word: string
  activeExercise: MatchPairsExercise
  handleMatchPair: (e: React.SyntheticEvent, userAnswer: string) => void
  userInput: ISelected
  index: number
  checkIfInSuccessful: (word: string) => boolean
}

//?This is the matchpairs data structure - I am going to recreate the matchpairs interactive component as the current one is not how I want it.
// {
//   _id: "12345",
//   instructions: "Match the corresponding words.",
//   isComplete: false,
//   hasFailed: false,
//   solution: "Some solution here",
//   type: "matchPairs",
//   availableWords: {
//     pairs: [
//       ["attenzione", "attention"],
//       ["stazione", "station"],
//       ["possibile", "possible"],
//     ],
//     column1: {
//       column: "1",
//       read: true,
//     },
//     column2: {
//       column: "2",
//       read: false,
//     },
//   },
// },
