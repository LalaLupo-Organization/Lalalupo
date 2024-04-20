export interface BubbleProps {
  dialogue?: string
  english?: string
  displayText?: string
  solution?: string | null // audio
  displayTextAudioURL?: string
  imageClassName?: string
  audio?: boolean
}

export interface PlayAudioProps {
  playAudio: () => void
}
