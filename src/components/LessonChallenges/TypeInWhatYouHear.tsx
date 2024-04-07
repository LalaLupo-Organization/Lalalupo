import { BaseExercise, LessonState } from "@/types/lesson.types";
import React, { useState, useEffect } from "react";
import { TypeInWhatYouHearExercise } from "@/types/type-in-what-you-hear.types";
import { setSingleInput, clearUserInput } from "@/features/userInputSlice";
import { useAppDispatch } from "@/hooks/useRedux";
import { ProgressBar } from "@/components/ProgressBars/ProgressBar";
import { InteractiveLayout } from "@/components/Layouts/InteractiveLayout";
import AccentedLetters from "@/components/AccentedLetters1/AccentedLetters1";

import Instruction from "@/components/Headings/Instruction";
import AudioBubble from "@/components/AudioBubble/AudioBubble";
export default function TypeInWhatYouHear({ data }: { data: LessonState }) {
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
  ): exercise is TypeInWhatYouHearExercise {
    return exercise.type === "typeInWhatYouHear";
  }

  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();

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
      {/* <ProgressBar
        remainingExercises={remainingExercises}
        totalNumberOfExercises={totalExercises}
        numberOfExercisesComplete={numberComplete}
        interactiveExercises={interactiveExercises}
        numberOfExercisesFailed={numberFailed}
        lives={lives && lives}
      /> */}
      <InteractiveLayout id={activeExercise && activeExercise._id}>
        <Instruction
          instruction={activeExercise && activeExercise.instructions}
        />
        <AudioBubble
          solution={getType(activeExercise) && activeExercise.audio}
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
      </InteractiveLayout>
    </div>
  );
}
