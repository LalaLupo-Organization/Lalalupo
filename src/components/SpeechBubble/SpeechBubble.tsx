"use client"
import Image from "next/image"
import MatchPairsImage from "../../../public/assets/ExercisesImages/MatchPairsImage.png"
import classNames from "@/helpers/classNames"
import { Icon } from "../Icons/Icon"
import { useEffect, useState } from "react"

type BubbleProps = {
  displayText: string
  solution?: string | null // audio
  displayTextAudioURL?: string
  imageClassName?: string
  audio?: boolean
}

export default function SpeechBubble({ imageClassName = "", displayText, audio = false, solution, displayTextAudioURL }: BubbleProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioElement = new Audio(audio ? solution! : displayTextAudioURL!)

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

  return (
    <div className="w-full">
      <div className="flex flex-col-reverse items-center sm:flex-row">
        <Image height={12} width={12} src={MatchPairsImage} alt="" className={classNames("w-32 sm:w-40 h-full", imageClassName)} />
        <div className="relative mb-6 text-sm  border-r-2 border-l-2 border-t-2 border-b-2 mt-8 sm:mt-8 py-4 ml-2 px-4 rounded-lg font-bold text-gray_reorder_text underline underline-offset-2 flex items-center gap-2">
          {solution && audio && <AudioIcon playAudio={playAudio} />}
          <p {...(!audio && { onClick: () => playAudio() })}>{displayText}</p>
        </div>
      </div>
    </div>
  )
}

function AudioIcon({ playAudio }: { playAudio: () => void }) {
  return <Icon onClick={playAudio} role="button" name="AudioIcon" className="w-4 sm:w-5 cursor-pointer" />
}
