import { TextAreaProps } from "@/types/inputs.types"
import React, { FC } from "react"

const TextArea: FC<TextAreaProps> = ({ activeExercise, activeExerciseId, input, handleChange }) => {
  return (
    <textarea
      onChange={activeExercise?.isComplete || activeExercise?.hasFailed ? undefined : handleChange}
      name="text"
      autoComplete="off"
      autoFocus={activeExercise?.isComplete || activeExercise?.hasFailed ? false : true}
      value={activeExercise?._id !== activeExerciseId ? "" : input}
      className="cursor-blink outline-none text-base font-bold text-black  tracking-wider w-full border-2 bg-gray-100 rounded-lg p-5 py-4 pb-16 resize-none relative z-1"
    />
  )
}

export default TextArea
