import classNames from "@/helpers/classNames"
import { motion } from "framer-motion"
import { useState } from "react"
import { v4 as uuid } from "uuid"
import StrippedBg from "../StrippedBackground"
import { Icon } from "../Icons/Icon"
import { AccentedLetterButtonProps, AccentedLettersProps } from "@/types/accented-letters.types"
export default function AccentedLetters({ insertAccentedVowel, activeExercise, languageCode }: AccentedLettersProps) {
  const [isUppercase, setIsUppercase] = useState(false)
  const vowels = ["à", "è", "é", "ì", "ò", "ù"]
  const toggleLettersCase = () => setIsUppercase(!isUppercase)

  return languageCode === "it-en" ? (
    <div className="w-full">
      <div className="flex items-center gap-1.5 mt-4">
        <AccentedLetterButton onClick={toggleLettersCase}>
          <Icon name="AccentedLettersArrow" className={classNames("w-5", isUppercase ? "rotate-180 " : "")} />
        </AccentedLetterButton>
        {vowels.map(vowel => (
          <AccentedLetterButton
            onClick={activeExercise?.isComplete || activeExercise?.hasFailed ? undefined : insertAccentedVowel}
            key={uuid()}
            className={isUppercase ? "uppercase" : ""}
          >
            {vowel}
          </AccentedLetterButton>
        ))}
      </div>
    </div>
  ) : null
}

function AccentedLetterButton({ children, onClick, className = "", ...rest }: AccentedLetterButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      key={uuid()}
      {...rest}
      className={classNames(
        "cursor-pointer border border-gray_reorder_border smooth-animation h-9 w-9  bg-white flex items-center justify-center text-base font-bold text-gray-400 rounded-primary relative",
        className
      )}
    >
      {children}
      <StrippedBg className="translate-y-1 translate-x-1 !rounded-primary !border-gray_reorder_border " />
    </motion.button>
  )
}
