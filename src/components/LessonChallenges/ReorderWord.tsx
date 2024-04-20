import classNames from "@/helpers/classNames"
import { ReorderProps } from "@/types/reorder.types"

export function ReorderWord({ activeExercise, word, handleMove, picked }: ReorderProps) {
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
          "text-gray_reorder_text word bg-white border border-gray_reorder_border text-sm sm:text-base  rounded-lg cursor-pointer active:duration-300 active:ease-in outline-none p-2 sm:px-4 relative",
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
