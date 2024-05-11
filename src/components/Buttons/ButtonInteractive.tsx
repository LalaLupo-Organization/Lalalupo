import classNames from "@/helpers/classNames"
import { Status } from "@/types/lesson.types"

export default function ButtonInteractiveLesson({
  background,
  lessonButtonClick,
  buttonDisplayText,
  shadowColor,
  lottie,
  status,
  className,
}: {
  background?: string
  className?: string
  lessonButtonClick: () => void | null
  buttonDisplayText: string
  shadowColor?: string
  lottie?: any
  status?: Status
}) {
  const generateStripedBackground = () =>
    status === "success" || status === "active"
      ? "success-striped-bg border-color_green_default"
      : status == "failure"
        ? "failure-striped-bg border-error"
        : status === "warning"
          ? "warning-striped-bg border-warning"
          : "striped-bg"

  return (
    <div className="flex w-full relative">
      <div
        className={classNames(generateStripedBackground(), "inset-0 translate-x-1 translate-y-1 absolute rounded-primary  z-0 border")}
      ></div>
      <button
        onClick={lessonButtonClick ? () => lessonButtonClick() : undefined}
        className={`${shadowColor} flex-1 rounded-primary relative z-1 active:translate-x-0.5 active:translate-y-0.5 smooth-animation`}
      >
        <div
          className={`tracking-wider uppercase items-center py-2 2xl:py-3 justify-center sm:text-base md:text-lg 2xl:text-xl rounded-primary font-medium text-center ${background} ${className} `}
        >
          {lottie ? lottie : buttonDisplayText}
        </div>
      </button>
    </div>
  )
}
