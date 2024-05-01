import { InputProps } from "@/types/inputs.types"
import React, { FC } from "react"
import parse from "html-react-parser"

const Input: FC<InputProps> = ({ activeExercise, activeExerciseId, input, handleChange, word }) => {
  const { type } = activeExercise
  const isFillInExercise = type === "fillInTheBlank" || type === "fillInWhatYouHear"

  if (!isFillInExercise) {
    return null
    //Other exercises will ba handled if it need this component
  }

  return word !== activeExercise?.missingWord ? (
    <p>{parse(word)}</p>
  ) : (
    <input
      autoComplete="off"
      name="text"
      disabled={activeExercise?.isComplete || activeExercise?.hasFailed ? true : false}
      defaultValue={activeExercise?._id !== activeExerciseId ? "" : input}
      onChange={handleChange}
      autoFocus
      className="cursor-blink mx-1 border-b-2 border-t-transparent border-x-transparent   appearance-none  focus:border-x-transparent  outline-none bg-gray-100  border-blue-500  h-6 font-bold tracking-wider"
      style={{ width: `${word.length * 14}px` }}
    />
  )
}

export default Input
