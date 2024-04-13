import classNames from "@/helpers/classNames"
import localFont from "next/font/local"

const myFont = localFont({
  src: "../../../public/MoreSugarRegular.ttf",
})

interface Props {
  instruction: string | null
  position?: "left" | "center" | "right"
  className?: string
}

export default function Instruction({ instruction, position, className = "" }: Props) {
  return (
    <h1
      className={classNames(
        position ? `text-${position}` : "text-center  sm:text-left",
        `${myFont.className} text-xl mb-0 sm:mb-12 sm:text-2xl 2xl:text-3xl 2xl:px-6`,
        className
      )}
    >
      {instruction}
    </h1>
  )
}
