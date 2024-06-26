import { ChooseTheRightSolutionExercise } from "./choose-the-right-solution.types"
import { ConjugationExercise } from "./conjunction.types"
import { FillInTheBlankExercise } from "./fill-in-the-blanks.types"
import { FillInWhatYouHearExercise } from "./fill-in-what-you-hear.types"
import { ListenAndSelectExercise } from "./listen-and-select.types"
import { MatchPairsExercise } from "./match-pairs.types"
import { MissingSyllableExercise } from "./missing-syllables.types"
import { MultipleAnswersExercise } from "./multiple-answers.types"
import { PartOfAWordExercise } from "./part-of-a-word.types"
import { ReorderWhatYouHearExercise } from "./reorder-what-you-hear.types"
import { ReorderExercise } from "./reorder.types"
import { SelectTheMissingWordExercise } from "./select-the-missing-word.types"
import { SpeakingAndPronunciationExercise } from "./speaking-and-pronunciation.types"
import { TwoBlanksExercise } from "./two-blanks.types"
import { TypeInWhatYouHearExercise } from "./type-in-what-you-hear.types"
import { WriteTheSentenceExercise } from "./write-the-word.types"
export interface BaseExercise {
  _id: string
  instructions: string
  isComplete: boolean
  hasFailed: boolean
  isSkiped?: boolean
  solution?: string | string[]
  type: string // Add this line
  // ...add more base properties here
}

export interface Helper {
  type: "Vocabulary" | "Tip"
  values: string[]
}

export type Status = "success" | "failure" | "active" | "disabled" | "warning"
export type MicSupportedLangs =
  | "en-US"
  | "en-GB"
  | "fr-FR"
  | "de-DE"
  | "es-ES"
  | "it-IT"
  | "pt-BR"
  | "zh-CN"
  | "ja-JP"
  | "ko-KR"
  | "ru-RU"
  | "ar-SA"
export type LessonState = {
  _id: string
  __v: number
  languageCode: "en-it" | "it-en" // Other codes....
  isComplete: boolean
  hasFailed: boolean
  attempts: number
  totalExercises: number
  remainingExercises: number
  lives?: null | number
  numberComplete: number
  numberFailed: number
  correctLetters: string[]
  activeExercise:
    | ChooseTheRightSolutionExercise
    | MatchPairsExercise
    | ConjugationExercise
    | FillInTheBlankExercise
    | FillInWhatYouHearExercise
    | ListenAndSelectExercise
    | MissingSyllableExercise
    | MultipleAnswersExercise
    | PartOfAWordExercise
    | ReorderExercise
    | ReorderWhatYouHearExercise
    | SelectTheMissingWordExercise
    | SpeakingAndPronunciationExercise
    | TwoBlanksExercise
    | TypeInWhatYouHearExercise
    | WriteTheSentenceExercise
  interactiveExercises: (
    | ChooseTheRightSolutionExercise
    | MatchPairsExercise
    | ConjugationExercise
    | FillInTheBlankExercise
    | FillInWhatYouHearExercise
    | ListenAndSelectExercise
    | MissingSyllableExercise
    | MultipleAnswersExercise
    | PartOfAWordExercise
    | ReorderExercise
    | ReorderWhatYouHearExercise
    | SelectTheMissingWordExercise
    | SpeakingAndPronunciationExercise
    | TwoBlanksExercise
    | TypeInWhatYouHearExercise
    | WriteTheSentenceExercise
  )[]
}
