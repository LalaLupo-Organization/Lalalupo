"use client"
import React, { useState, useRef, useEffect } from "react"
import { BaseExercise, LessonState } from "@/types/lesson.types"
import { ReorderExercise } from "@/types/reorder.types"
import { setSingleInput, clearUserInput } from "@/features/userInputSlice"
import { useAppDispatch } from "@/hooks/useRedux"
import { ProgressBar } from "@/components/ProgressBars/ProgressBar"
import { InteractiveLayout } from "@/components/Layouts/InteractiveLayout"
import Instruction from "@/components/Headings/Instruction"
import classNames from "@/helpers/classNames"
import SpeechBubble from "@/components/SpeechBubble/SpeechBubble"
import useWindowSize from "@/hooks/useWindowSize"
import { ReorderWord } from "./ReorderWord"
import { Settings } from "@/types/settings.types"

export default function Reorder({ data }: { data: LessonState }) {
  const { activeExercise, totalExercises, lives, numberComplete, interactiveExercises, numberFailed, remainingExercises } = data
  const { width } = useWindowSize()
  const dispatch = useAppDispatch()
  const [isAnimating, setIsAnimating] = useState(false)
  const [activeExerciseId, setActiveExerciseId] = useState(activeExercise?._id)
  const [selectedWords, setSelectedWords] = useState<string[]>([])
  const [activeAudioURL, setActiveAudioURL] = useState<string | null>()
  const getType = (exercise: BaseExercise): exercise is ReorderExercise => exercise.type === "reorder"
  const [randomizedWords, setRandomizedWords] = useState(
    getType(activeExercise) ? activeExercise.availableWords.map(word => word).sort(() => Math.random() - 0.5) : []
  )

  const addNewLine =
    getType(activeExercise) && ((activeExercise.availableWords.length > 5 && width < 640) || activeExercise.availableWords.length >= 8)

  const destinationRef = useRef<HTMLDivElement>(null)
  const originRef = useRef<HTMLDivElement>(null)

  const flip = (node: HTMLElement, settings: Settings) => {
    const invert = {
      x: settings.first.left - settings.last.left,
      y: settings.first.top - settings.last.top,
    }

    const animation = node.animate(
      [
        {
          transform: `scale(1,1) translate(${invert.x}px, ${invert.y}px)`,
        },
        { transform: `scale(1,1) translate(0, 0)` },
      ],
      {
        duration: 300,
        easing: "ease",
      }
    )

    animation.onfinish = () => setIsAnimating(false)
  }

  const move = (node: HTMLElement) => {
    const id = Math.random()
    const container = node.closest("#container") as HTMLElement
    const bounding = node.getBoundingClientRect()
    setIsAnimating(true)
    setSelectedWords(word => [...word, node.innerText])

    if (getType(activeExercise)) {
      setActiveAudioURL(activeExercise.availableWords.find(word => word.word === node.innerText)?.wordAudioURL)
    }

    node.dataset.id = `${id}`
    container.dataset.id = `${id}`

    container.style.height = `${node.offsetHeight}px`
    container.style.width = `${node.offsetWidth}px`
    const first = { top: bounding.top, left: bounding.left }
    const rect = destinationRef?.current?.getBoundingClientRect()
    if (rect) {
      const last = { top: rect.top, left: rect.left }
      destinationRef?.current?.insertAdjacentElement("beforeend", node)
      flip(node, { first, last })
    }
  }

  const putback = (node: HTMLElement) => {
    const id = node.dataset.id
    const container = originRef.current?.querySelector(`[data-id="${id}"]`) as HTMLElement

    let rect = node.getBoundingClientRect()

    setIsAnimating(true)
    const filtered = selectedWords.filter(word => word !== node.innerText && word)
    setSelectedWords(filtered)

    const first = { top: rect.top, left: rect.left }
    container.insertAdjacentElement("beforeend", node)
    rect = node.getBoundingClientRect()
    const last = { top: rect.top, left: rect.left }

    flip(node, { first, last })

    container.style.height = ""
    container.style.width = ""
    container.removeAttribute("data-id")
    node.removeAttribute("data-id")
    return clearCurrentAudioState()
  }

  function clearCurrentAudioState() {
    setActiveAudioURL(null)
  }

  // eslint-disable-next-line
  const handleMove = (event: React.MouseEvent<HTMLButtonElement>, userAnswer: any) => {
    const node = event.target as HTMLElement
    if (isAnimating) return
    if (node.closest("#container")) {
      move(node)
    } else putback(node)
  }

  useEffect(() => {
    dispatch(setSingleInput(selectedWords.join(" ")))

    if (activeExercise && activeExercise._id !== activeExerciseId) {
      setRandomizedWords(getType(activeExercise) ? activeExercise.availableWords.map(word => word).sort(() => Math.random() - 0.5) : [])
      setSelectedWords([])
      setActiveExerciseId(activeExercise?._id)
      dispatch(clearUserInput())
      const nodes = destinationRef.current?.querySelectorAll(".word")
      if (nodes) {
        nodes.forEach(node => node.remove())
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedWords, activeExercise])

  // const english = getType(activeExercise) && activeExercise?.displayText

  return (
    <div className="flex flex-col justify-center w-full items-center overflow-x-hidden">
      {activeAudioURL && <audio autoPlay src={activeAudioURL}></audio>}
      <ProgressBar
        activeExercise={activeExercise}
        remainingExercises={remainingExercises}
        totalNumberOfExercises={totalExercises}
        numberOfExercisesComplete={numberComplete}
        interactiveExercises={interactiveExercises}
        numberOfExercisesFailed={numberFailed}
        lives={lives && lives}
        id={activeExercise && activeExercise._id}
      />
      <InteractiveLayout id={activeExercise && activeExercise._id}>
        <Instruction className="w-full" instruction={activeExercise && activeExercise.instructions} />
        <div className="flex flex-col w-full mt-14 sm:mt-0 max-w-[640px]">
          {true && (
            <SpeechBubble
              displayTextAudioURL={getType(activeExercise) ? activeExercise.displayTextAudioURL : ""}
              // imageClassName="translate-y-2 sm:translate-y-4"
              displayText={getType(activeExercise) ? activeExercise.displayText : ""}
            />
          )}
          <div
            className={classNames(
              "destination px-3 sm:px-10 flex gap-x-3 flex-wrap items-center border-t-2  border-b-2 pt-1.5 sm:pt-2  h-14 sm:h-16"
            )}
            ref={destinationRef}
          ></div>
          {addNewLine && <div className="border-b-2 mb-4 sm:mb-8 pt-1 h-14 sm:h-16 px-3 sm:px-10"></div>}
          <div className="origin flex flex-wrap gap-3 justify-center items-center w-full mx-auto border-gray-600" ref={originRef}>
            {randomizedWords &&
              randomizedWords.map((word, index) => (
                <ReorderWord
                  picked={selectedWords.includes(word.word)}
                  handleMove={handleMove}
                  activeExercise={activeExercise}
                  word={word.word}
                  key={index}
                />
              ))}
          </div>
        </div>
      </InteractiveLayout>
    </div>
  )
}
