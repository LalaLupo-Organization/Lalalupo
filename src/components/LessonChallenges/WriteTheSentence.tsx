import { BaseExercise, LessonState } from "@/types/lesson.types";
import React, { useState, useEffect } from "react";
// import '../style.css';
import { WriteTheSentenceExercise } from "@/types/write-the-word.types";
import { setSingleInput, clearUserInput } from "@/features/userInputSlice";
// import useSpeechSynthesis from "@/hooks/useSpeechSynthesis";
import { useAppDispatch } from "@/hooks/useRedux";
import { ProgressBar } from "@/components/ProgressBars/ProgressBar";
import VocabularyHelper from "@/components/VocabularyHelper/VocabularyHelper";
import parse from "html-react-parser";

import InteractiveLayout from "@/components/Layouts/InteractiveLayout";
import Instruction from "@/components/Headings/Instruction";
import SpeechBubble from "@/components/SpeechBubble/SpeechBubble";
import AccentedLetters from "@/components/AccentedLetters/AccentedLetters";
export default function WriteTheSentence({ data }: { data: LessonState }) {
  const {
    activeExercise,
    totalExercises,
    lives,
    numberComplete,
    interactiveExercises,
    numberFailed,
    remainingExercises,
  } = data;
  function getType(
    exercise: BaseExercise
  ): exercise is WriteTheSentenceExercise {
    return exercise.type === "writeTheSentence";
  }
  const [input, setInput] = useState("");

  const dispatch = useAppDispatch();
  // const speak = useSpeechSynthesis();

  const [activeExerciseId, setActiveExerciseId] = useState(
    () => activeExercise?._id
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setSingleInput(e.currentTarget.value));
    setInput(e.currentTarget.value);
  };

  const insertAccentedVowel = (e: any) => {
    setInput(input + e.target.innerText);
    dispatch(setSingleInput(input + e.target.innerText));
  };

  useEffect(() => {
    if (activeExercise?.isComplete) {
      // speak(activeExercise?.writeInItalian.solution);
    }

    if (activeExercise && activeExercise._id !== activeExerciseId) {
      setActiveExerciseId(() => activeExercise?._id);
      dispatch(clearUserInput());
      setInput("");
    }
  }, [activeExercise]);

  return (
    <div
      className='flex flex-col

   justify-center w-full items-center'
    >
      <ProgressBar
        remainingExercises={remainingExercises}
        totalNumberOfExercises={totalExercises}
        numberOfExercisesComplete={numberComplete}
        interactiveExercises={interactiveExercises}
        numberOfExercisesFailed={numberFailed}
        lives={lives && lives}
      />
      <InteractiveLayout id={activeExercise && activeExercise._id}>
        <Instruction
          instruction={activeExercise && activeExercise?.instructions}
        />
        <SpeechBubble
          dialogue={
            getType(activeExercise) ? activeExercise.display : undefined
          }
          english={getType(activeExercise) ? activeExercise.english : undefined}
        />

        <input
          onChange={
            activeExercise?.isComplete || activeExercise?.hasFailed
              ? undefined
              : (e) => handleChange(e)
          }
          name='text'
          autoComplete='off'
          autoFocus={
            activeExercise?.isComplete || activeExercise?.hasFailed
              ? false
              : true
          }
          placeholder='Type in Italian'
          value={activeExercise?._id !== activeExerciseId ? "" : input}
          className='cursor-blink outline-none text-base font-bold text-gray-600  tracking-wider border border-2 bg-gray-100 rounded-lg px-2 pt-2 pb-24'
        />

        <AccentedLetters
          insertAccentedVowel={insertAccentedVowel}
          activeExercise={activeExercise}
        />
        {getType(activeExercise) &&
          activeExercise?.vocabularyHelper &&
          activeExercise?.vocabularyHelper.length > 0 && (
            <VocabularyHelper
              data={
                getType(activeExercise) ? activeExercise?.vocabularyHelper : []
              }
            />
          )}
      </InteractiveLayout>
    </div>
  );
}
