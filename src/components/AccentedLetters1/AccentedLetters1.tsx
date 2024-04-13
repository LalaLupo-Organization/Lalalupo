import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { v4 as uuid } from "uuid"
export default function AccentedLetters({ insertAccentedVowel, activeExercise }: { insertAccentedVowel: any; activeExercise: any }) {
  const [vowelCase, setVowelCase] = useState("lowercase")
  const [littleVowels] = useState(["à", "è", "é", "ì", "ò", "ù"])
  const [bigVowels] = useState(["À", "È", "Ì", "Ò", "Ù"])
  const setCase = () => {
    vowelCase === "capitalize" ? setVowelCase("lowercase") : setVowelCase("capitalize")
  }
  useEffect(() => {}, [activeExercise])

  return (
    <div className="w-full">
      <div className="flex  mt-4">
        <motion.button onClick={setCase} key={uuid()} whileHover={{ scale: 1.1 }} className="bg-gray-200  rounded-full cursor-pointer">
          <div className="border  bg-white flex items-center h-9 mr-1 px-2 py-1 text-base font-bold text-gray-400 rounded-full shadow-sm">
            {vowelCase === "capitalize" ? <ArrowDownIcon className="h-4" /> : <ArrowUpIcon className="h-4" />}
          </div>
        </motion.button>
        {vowelCase === "lowercase"
          ? littleVowels.map(vowel => (
              <motion.button
                onClick={activeExercise?.isComplete || activeExercise?.hasFailed ? undefined : e => insertAccentedVowel(e)}
                key={uuid()}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-200   rounded-full cursor-pointer"
              >
                <div className="border flex items-center bg-white mr-1 px-2 py-1 text-base font-bold text-gray-400 rounded-full shadow-sm">
                  {vowel}
                </div>
              </motion.button>
            ))
          : vowelCase === "capitalize" &&
            bigVowels.map(vowel => (
              <motion.button
                onClick={activeExercise?.isComplete || activeExercise?.hasFailed ? undefined : e => insertAccentedVowel(e)}
                key={uuid()}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-200 rounded-full cursor-pointer"
              >
                <div className="border  flex items-center  bg-white mr-1 px-2 py-1 text-base font-bold text-gray-400 rounded-full shadow-sm">
                  {vowel}
                </div>
              </motion.button>
            ))}
      </div>
    </div>
  )
}
