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
}

export interface PlayAudioProps {
  playAudio: () => void
}
