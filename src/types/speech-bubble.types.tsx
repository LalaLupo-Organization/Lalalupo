import { MicSupportedLangs } from "./lesson.types"

export interface BubbleProps {
  dialogue?: string
  english?: string
  displayText?: string
  solution?: string | null // audio
  displayTextAudioURL?: string
  className?: string
  imageClassName?: string
  audio?: boolean
  teacher?: "teacherOne" | "teacherTwo"
  underlined?: boolean
  color?: string
  font?: "light" | "normal" | "medium" | "semibold" | "bold"
  hasMic?: MicSupportedLangs
}

export interface PlayAudioProps {
  playAudio: () => void
  className?: string
  name: "AudioIcon" | "PlayAudio"
}

export interface MicrophoneProps {
  lang: MicSupportedLangs
}
