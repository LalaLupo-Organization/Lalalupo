import classNames from "@/helpers/classNames"
import Image from "next/image"
import { Icon } from "../Icons/Icon"
import StrippedBg from "../StrippedBackground"
import Teacher2 from "../../../public/assets/ExercisesImages/Teacher2.png"
import { forwardRef, useEffect, useRef, useState } from "react"
import { AudioBubbleProps, ButtonProps } from "@/types/audio-bubble.types"

export default function AudioBubble({ imageClassName = "" }: AudioBubbleProps) {
  const [audio] = useState(new Audio("https://s5-10.ttsmaker-file.com/file/2024-05-01-191440_156327.mp3")) // Will be solutionAudioURL.
  const [isPlaying, setIsPlaying] = useState(false)
  const [isSlowed, setIsSlowed] = useState(false)
  const playBtnRef = useRef<HTMLButtonElement | null>(null)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      audio.play().catch(() => {
        // eslint-disable-next-line no-console
        // Showing error: An error occured while loading the audio, click the play button to play the audio??
        if (playBtnRef?.current) {
          playBtnRef.current?.click()
        }
      })
    }, 1000)
    const handleAudioPlay = () => {
      setIsPlaying(true)
    }

    const handleAudioPause = () => {
      setIsPlaying(false)
      clearTimeout(timeoutId)
    }

    audio.addEventListener("play", handleAudioPlay)
    audio.addEventListener("pause", handleAudioPause)

    return () => {
      audio.removeEventListener("play", handleAudioPlay)
      audio.removeEventListener("pause", handleAudioPause)
      clearTimeout(timeoutId)
    }
  }, [audio])

  const handlePlay = () => {
    audio.play()
  }

  const handlePause = () => {
    audio.pause()
  }

  const handlePlayPause = () => {
    if (isPlaying) {
      handlePause()
    } else {
      handlePlay()
    }
  }

  const handleSlowDown = () => {
    if (!isPlaying) {
      handlePlayPause()
    }

    if (isSlowed) {
      audio.playbackRate = 1
    } else {
      audio.playbackRate = 0.5
    }

    setIsSlowed(!isSlowed)
  }
  return (
    <div className="flex flex-col w-full mt-14 sm:mt-0">
      <div className="flex sm:gap-2 flex-col-reverse items-center sm:flex-row">
        <Image height={12} width={12} src={Teacher2} alt="" className={classNames("w-32 sm:w-40 h-full ml-6 sm:ml-0", imageClassName)} />

        <div className="flex gap-1.5 items-center">
          <Button ref={playBtnRef} onClick={handlePlayPause} icon="PlayAudio" />
          <Button onClick={handleSlowDown} icon="SlowAudio" />
        </div>
      </div>
    </div>
  )
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ icon, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      {...rest}
      className="w-14 h-14 bg-white border rounded-lg border-gray_reorder_border
          relative items-center justify-center flex"
    >
      <Icon name={icon} className="w-5" />
      <StrippedBg className="translate-x-1 translate-y-1 border-gray_reorder_border" />
    </button>
  )
})
