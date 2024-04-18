import React, { useState, useRef, useEffect } from "react"
import { BaseExercise, LessonState } from "@/types/lesson.types"
import { ReorderWhatYouHearExercise } from "@/types/reorder-what-you-hear.types"
import { setSingleInput, clearUserInput } from "@/features/userInputSlice"
import { useAppDispatch } from "@/hooks/useRedux"
import { InteractiveLayout } from "@/components/Layouts/InteractiveLayout"
import classNames from "@/helpers/classNames"
import { ProgressBar } from "@/components/ProgressBars/ProgressBar"
import Instruction from "@/components/Headings/Instruction"
import AudioBubble from "@/components/SpeechBubble/SpeechBubble"
import { Settings } from "@/types/settings.types"
import { ReorderProps } from "./Reorder"
import useWindowSize from "@/hooks/useWindowSize"

export default function ReorderWhatYouHear({ data }: { data: LessonState }) {
  const { width } = useWindowSize()
  const { activeExercise, totalExercises, lives, numberComplete, interactiveExercises, numberFailed, remainingExercises } = data
  const dispatch = useAppDispatch()

  const [isAnimating, setIsAnimating] = useState(false)
  const [activeExerciseId, setActiveExerciseId] = useState(activeExercise?._id)
  const [selectedWords, setSelectedWords] = useState<string[]>([])
  const [activeAudioURL, setActiveAudioURL] = useState<string | null>()
  const [randomizedWords, setRandomizedWords] = useState(
    getType(activeExercise) ? activeExercise?.availableWords?.map(word => word).sort(() => Math.random() - 0.5) : []
  )

  const addNewLine =
    getType(activeExercise) && ((activeExercise.availableWords.length > 5 && width < 640) || activeExercise.availableWords.length >= 8)

  const adjustPaddingTop = addNewLine && ((selectedWords.length >= 5 && width < 640) || selectedWords.length >= 8)

  const destinationRef = useRef<HTMLDivElement>(null)
  const originRef = useRef<HTMLDivElement>(null)

  function getType(exercise: BaseExercise): exercise is ReorderWhatYouHearExercise {
    return exercise.type === "reorderWhatYouHear"
  }

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
    let rect = node.getBoundingClientRect()

    setIsAnimating(true)
    setSelectedWords(word => [...word, node.innerText])

    if (getType(activeExercise)) {
      setActiveAudioURL(activeExercise.availableWords.find(word => word.word === node.innerText)?.wordAudioURL)
    }

    node.dataset.id = `${id}`
    container.dataset.id = `${id}`

    container.style.height = `${node.offsetHeight}px`
    container.style.width = `${node.offsetWidth}px`

    const first = { top: rect.top, left: rect.left }
    destinationRef?.current?.insertAdjacentElement("beforeend", node)
    rect = node.getBoundingClientRect()
    const last = { top: rect.top, left: rect.left }

    flip(node, { first, last })
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
  //eslint-disable-next-line
  const handleMove = (event: React.MouseEvent<HTMLButtonElement>, userAnswer: string) => {
    const node = event.target as HTMLElement

    if (isAnimating) return
    node.closest("#container") ? move(node) : putback(node)
  }

  useEffect(() => {
    dispatch(setSingleInput(selectedWords.join(" ")))

    if (activeExercise && activeExercise._id !== activeExerciseId) {
      setRandomizedWords(getType(activeExercise) ? activeExercise?.availableWords?.map(word => word).sort(() => Math.random() - 0.5) : [])
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

  return (
    <div className="flex flex-col justify-center w-full items-center">
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
        <div className="flex flex-col w-full mt-14 sm:mt-0 max-w-[640px] mx-auto">
          <AudioBubble
            solution={getType(activeExercise) ? activeExercise.solutionAudioURL : null}
            audio
            displayText={getType(activeExercise) ? activeExercise.displayText : ""}
            imageClassName="translate-y-3"
          />
          <div
            className={classNames(
              "destination px-3 sm:px-10 flex gap-x-3 flex-wrap items-center border-t-2  border-b-2 pt-1.5 sm:pt-2  h-16",
              adjustPaddingTop ? "" : ""
            )}
            ref={destinationRef}
          ></div>
          {addNewLine && <div className="border-b-2 mb-8 sm:mb-8 pt-1 h-16 px-3 sm:px-10"></div>}
          <div className="origin flex flex-wrap gap-3 justify-center items-center w-full mt-10 mx-auto border-gray-600" ref={originRef}>
            {randomizedWords &&
              randomizedWords.map((word, index) => (
                <ReorderWhatYouHearWord
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

export function ReorderWhatYouHearWord({ activeExercise, word, handleMove, picked }: ReorderProps) {
  return (
    <div
      id="container"
      className={classNames(
        activeExercise?.isComplete || activeExercise?.hasFailed ? "cursor-not-allowed" : "cursor-pointer",
        " word rounded-lg justify-start text-center box-content flex flex-col border  ease-in bg-gray_reorder_bg",
        picked ? "border-gray_reorder_border" : "border-transparent"
      )}
    >
      <button
        className={classNames(
          activeExercise?.isComplete || activeExercise?.hasFailed ? "cursor-not-allowed" : "cursor-pointer",
          "text-gray_reorder_text word bg-white border border-gray_reorder_border  rounded-lg cursor-pointer font-bold active:duration-300 active:ease-in outline-none p-2 sm:px-4 relative",
          picked ? "mb-6" : ""
        )}
        onClick={activeExercise?.isComplete || activeExercise?.hasFailed ? undefined : e => handleMove(e, word)}
        name={word}
      >
        {word}
        <span
          className={classNames(
            "inset-0  absolute translate-x-0.5 translate-y-1 rounded-lg -z-10 border border-gray_reorder_border duration-300 ease-in  striped-bg-darker"
          )}
        ></span>
      </button>
    </div>
  )
}
