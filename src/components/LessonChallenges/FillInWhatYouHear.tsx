import { LessonState } from "@/types/lesson.types";
import React, { useState, useEffect } from "react";
import { setSingleInput, clearUserInput } from "@/features/userInputSlice";
import { useAppDispatch } from "@/hooks/useRedux";
import { ProgressBar } from "@/components/ProgressBars/ProgressBar";
import { v4 as uuid } from "uuid";
import { InteractiveLayout } from "@/components/Layouts/InteractiveLayout";
import Instruction from "@/components/Headings/Instruction";
import AccentedLetters from "@/components/AccentedLetters/AccentedLetters";
import AudioBubble from "@/components/AudioBubble1/AudioBubble";

export default function FillInWhatYouHear({ data }: { data: LessonState }) {
  const {
    activeExercise,
    totalExercises,
    lives,
    numberComplete,
    interactiveExercises,
    numberFailed,
    remainingExercises,
  } = data;

  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();

  const [activeExerciseId, setActiveExerciseId] = useState(activeExercise?._id);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSingleInput(e.target.value));
    setInput(e.target.value);
  };

  const insertAccentedVowel = (e: React.MouseEvent<HTMLButtonElement>) => {
    setInput(input + e.currentTarget.innerText);
    dispatch(setSingleInput(input + e.currentTarget.innerText));
  };

  useEffect(() => {
    if (activeExercise?.isComplete) {
      // speak(activeExercise?.fillInWhatYouHear.solution.join())
    }

    if (activeExercise && activeExercise._id !== activeExerciseId) {
      setActiveExerciseId(activeExercise?._id);
      dispatch(clearUserInput());
      setInput("");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeExercise]);

  return (
    <>
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
          instruction={activeExercise && activeExercise.instructions}
        />
        <AudioBubble
          solution={
            activeExercise &&
            (typeof activeExercise.solution === "string"
              ? activeExercise.solution.split("").join(" ")
              : activeExercise.solution)
          }
        />

        <div className='flex outline-none p-2 text-base font-bold text-gray-600 tracking-wider w-full border-2 bg-gray-100 rounded-lg h-32'>
          {activeExercise &&
            Array.isArray(activeExercise.solution) &&
            activeExercise.solution.map((word: string) => {
              return <div key={uuid()}>{word}</div>;
            })}
        </div>
        <AccentedLetters
          insertAccentedVowel={insertAccentedVowel}
          activeExercise={activeExercise}
        />
      </InteractiveLayout>
    </>
  );
}
