"use client"
import Image from "next/image"
import Teacher1 from "../../../public/assets/ExercisesImages/MatchPairsImage.png"
import Teacher2 from "../../../public/assets/ExercisesImages/Teacher2.png"
import classNames from "@/helpers/classNames"
import { Icon } from "../Icons/Icon"
import { useEffect, useState } from "react"
import useWindowSize from "@/hooks/useWindowSize"
import { BubbleProps, PlayAudioProps } from "@/types/speech-bubble.types"

export default function SpeechBubble({
  className = "",
  imageClassName = "",
  displayText,
  audio = false,
  solution,
  displayTextAudioURL,
  teacher = "teacherOne",
  underlined = false,
  color = "text-gray_reorder_text",
  font = "bold",
}: BubbleProps) {
  const { width } = useWindowSize()
  const [isPlaying, setIsPlaying] = useState(false)
  const audioElement = new Audio(audio ? solution! : displayTextAudioURL!)
  const images = {
    teacherOne: Teacher1,
    teacherTwo: Teacher2,
  }

  const playAudio = () => {
    audioElement.addEventListener("ended", () => {
      setIsPlaying(false) // Set isPlaying to false once audio finishes playing
    })

    if (audioElement) {
      if (isPlaying) {
        audioElement.pause()
        setIsPlaying(false)
      } else {
        audioElement.play()
        setIsPlaying(true)
      }
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
  }

  useEffect(() => {
    return () => {
      audioElement.removeEventListener("ended", handleEnded)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!displayText) return <div></div>

  return (
    <div className={classNames("flex flex-col-reverse sm:gap-x-3 items-center sm:flex-row w-full", className)}>
      <Image
        height={12}
        width={12}
        src={images[teacher]}
        alt=""
        className={classNames("w-28 sm:w-40 h-full translate-y-2.5 sm:translate-y-4", imageClassName)}
      />
      <div
        className={classNames(
          "relative sm:mb-6 text-sm mt-8 rounded-lg underline underline-offset-2 flex items-center gap-2 h-[80px]",
          `font-${font}`,
          color,
          displayText.length <= 24 ? "w-[256px]" : displayText.length <= 35 ? "w-[275px]" : "w-[300px]"
        )}
      >
        <Icon name={width >= 640 ? "DesktopTextBubble" : "MobileTextBubble"} square={false} className="w-full" />
        <div className={classNames("absolute w-full px-4  flex items-center justify-center gap-2", width >= 640 ? "pl-8" : "")}>
          {solution && audio && <AudioIcon playAudio={playAudio} />}
          <p
            className={classNames("text-center", underlined ? "underline underline-offset-1" : "")}
            title={displayText}
            {...(!audio && { onClick: () => playAudio() })}
          >
            {displayText}
          </p>
        </div>
      </div>
    </div>
  )
}

function AudioIcon({ playAudio }: PlayAudioProps) {
  return <Icon onClick={playAudio} role="button" name="AudioIcon" className="w-5 sm:w-6 cursor-pointer" />
}
