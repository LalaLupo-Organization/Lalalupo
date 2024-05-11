import { BaseExercise, Helper, MicSupportedLangs } from "./lesson.types"

export type SpeakingAndPronunciationExercise = BaseExercise & {
  type: "speakingAndPronunciation"
  regex: string
  doubleSolution: boolean
  helper: Helper[]
  displayText: string
  solutionAudioURL: string
  displayMeaning: boolean
  micLang: MicSupportedLangs
}
