"use client"
import Image from "next/image"
import Teacher1 from "../../../public/assets/ExercisesImages/MatchPairsImage.png"
import Teacher2 from "../../../public/assets/ExercisesImages/Teacher2.png"
import classNames from "@/helpers/classNames"
import { Icon } from "../Icons/Icon"
import { useEffect, useState } from "react"
import useWindowSize from "@/hooks/useWindowSize"
import { BubbleProps, MicrophoneProps, PlayAudioProps } from "@/types/speech-bubble.types"
import useAssessment from "@/hooks/useAssessment"
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux"
import { setSingleInput } from "@/features/userInputSlice"
import AudioWave from "../AudioWave/AudioWave"
import StrippedBg from "../StrippedBackground"
import { selectMessage } from "@/features/userSlice"

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
  hasMic,
}: BubbleProps) {
  const { width } = useWindowSize()
  const [isPlaying, setIsPlaying] = useState(false)

  const audioElement = new Audio(audio ? solution! : displayTextAudioURL!)
  const images = {
    teacherOne: Teacher1,
    teacherTwo: Teacher2,
  }

  // Audio Handlers
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
    <div className="flex flex-col w-full ">
      <div className={classNames("flex flex-col-reverse sm:gap-x-3 items-center sm:flex-row w-full ", className)}>
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
            {solution && audio && <AudioIcon name={hasMic ? "PlayAudio" : "AudioIcon"} playAudio={playAudio} />}
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
      {hasMic && <Microphone lang={hasMic} />}
    </div>
  )
}

function AudioIcon({ playAudio, className = "", name }: PlayAudioProps) {
  return <Icon onClick={playAudio} role="button" name={name} className={classNames("w-5 sm:w-6 cursor-pointer", className)} />
}

function Microphone({ lang }: MicrophoneProps) {
  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
  const mic: any = new SpeechRecognition()
  mic.continuous = true
  mic.lang = lang

  const [isListening, setIsListening] = useState(false)
  const [tryCount, setTryCount] = useState(0)
  const { lessonButtonClick, setWarning } = useAssessment()
  const dispatch = useAppDispatch()

  const messages = useAppSelector(state => selectMessage(state))
  const { activeExerciseComplete, activeExerciseWrongAnswer, warning } = messages
  const disabled = activeExerciseComplete || activeExerciseWrongAnswer || warning
  const handleWarning = () => {
    setIsListening(false)

    // After 3 attemplts of warning
    if (tryCount === 3) {
      mic.abort()
      return lessonButtonClick("")
    }

    setTryCount(tryCount + 1)
    setWarning()
  }

  const handleClick = () => {
    if (disabled) return
    try {
      if (isListening) {
        mic.stop()
        setIsListening(false)
      } else {
        mic.start()
        setIsListening(true)
        mic.onerror = (event: any) => {
          if (event.error === "no-speech") return handleWarning()
          mic.abort()
        }
        mic.onnomatch = () => {
          return handleWarning()
        }
        mic.onresult = (event: any) => {
          if (!event.results || event.results.length === 0) {
            handleWarning()
          }

          const transcript = Array.from(event.results)
            .map((result: any) => result[0])
            .map(result => result.transcript)
            .join("")

          dispatch(setSingleInput(transcript))
          lessonButtonClick(transcript)
          setIsListening(false)
          mic.stop()
          return
        }
      }
    } catch (error) {
      mic.abort()
      // Maybe error notification ??
    }
  }
  return (
    <button
      role="button"
      onClick={handleClick}
      disabled={disabled}
      className="bg-white disabled:bg-disabled disabled:cursor-not-allowed w-full rounded-primary flex justify-center items-center gap-3 h-14 relative border border-gray_reorder_border"
    >
      <StrippedBg className="translate-x-1.5 translate-y-1.5 border-gray_reorder_border" />
      <Icon name="Mic" className="w-6" />
      <span className="w-[138px]">{isListening ? <AudioWave /> : <p className="font-semibold text-blue_primary">CLICK TO SPEAK</p>}</span>
    </button>
  )
}
