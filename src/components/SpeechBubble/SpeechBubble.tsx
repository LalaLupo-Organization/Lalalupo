"use client"
import Image from "next/image"
import MatchPairsImage from "../../../public/assets/ExercisesImages/MatchPairsImage.png"
import classNames from "@/helpers/classNames"
import { Icon } from "../Icons/Icon"
import { useEffect, useState } from "react"
import useWindowSize from "@/hooks/useWindowSize"
type BubbleProps = {
  dialogue?: string
  english?: string
  displayText?: string
  solution?: string | null // audio
  displayTextAudioURL?: string
  imageClassName?: string
  audio?: boolean
}

export default function SpeechBubble({ imageClassName = "", displayText, audio = false, solution, displayTextAudioURL }: BubbleProps) {
  const { width } = useWindowSize()
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

  if (!displayText) return <div></div>

  return (
    <div className="w-full">
      <div className="flex flex-col-reverse sm:gap-x-3 items-center sm:flex-row">
        <Image height={12} width={12} src={MatchPairsImage} alt="" className={classNames("w-32 sm:w-40 h-full", imageClassName)} />
        <div
          className={classNames(
            "relative mb-6 text-sm mt-8 rounded-lg font-bold text-gray_reorder_text underline underline-offset-2 flex items-center gap-2 h-[80px]",
            displayText.length <= 24 ? "w-[256px]" : displayText.length <= 35 ? "w-[275px]" : "w-[300px]"
          )}
        >
          <Icon name={width >= 640 ? "DesktopTextBubble" : "MobileTextBubble"} square={false} className="w-full" />
          <div className={classNames("absolute w-full px-4  flex items-center justify-center gap-2", width >= 640 ? "pl-8" : "")}>
            {solution && audio && <AudioIcon playAudio={playAudio} />}
            <p className="underline underline-offset-1 text-center" title={displayText} {...(!audio && { onClick: () => playAudio() })}>
              {displayText}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function AudioIcon({ playAudio }: { playAudio: () => void }) {
  return <Icon onClick={playAudio} role="button" name="AudioIcon" className="w-5 sm:w-6 cursor-pointer" />
}
