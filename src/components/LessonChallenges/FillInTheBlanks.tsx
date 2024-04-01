import { BaseExercise, LessonState } from "@/types/lesson.types";
import React, { useState, useEffect, useRef } from "react";

import { FillInTheBlankExercise } from "@/types/fill-in-the-blanks.types";
import { setSingleInput, clearUserInput } from "@/features/userInputSlice";
// import useSpeechSynthesis from "@/hooks/useSpeechSynthesis";
import { useAppDispatch } from "@/hooks/useRedux";
import { ProgressBar } from "@/components/ProgressBars/ProgressBar";
import { v4 as uuid } from "uuid";
import { InteractiveLayout } from "@/components/Layouts/InteractiveLayout";
import Instruction from "@/components/Headings/Instruction";
import SpeechBubble from "@/components/SpeechBubble1/SpeechBubble";
import AccentedLetters from "@/components/AccentedLetters1/AccentedLetters";
import VocabularyHelper from "@/components/VocabularyHelper/VocabularyHelper";
import parse from "html-react-parser";

export default function FillInTheBlanks({ data }: { data: LessonState }) {
  const {
    activeExercise,
    totalExercises,
    lives,
    numberComplete,
    interactiveExercises,
    numberFailed,
    remainingExercises,
  } = data;
  function getType(exercise: BaseExercise): exercise is FillInTheBlankExercise {
    return exercise.type === "fillInTheBlank";
  }
  const [input, setInput] = useState("");
  const insertAccentedVowel = (e: any) => {
    setInput(input + e.target.innerText);
    dispatch(setSingleInput(input + e.target.innerText));
  };

  const dispatch = useAppDispatch();
  // const speak = useSpeechSynthesis();
  const [activeExerciseId, setActiveExerciseId] = useState(
    () => activeExercise?._id
  );

  const handleChange = (e: any) => {
    dispatch(setSingleInput(e.target.value));
    setInput(e.target.value);
  };

  useEffect(() => {
    if (activeExercise?.isComplete) {
      // speak(activeExercise.fillInTheBlank.solution.join().replace(/^\*\*\*,/gm, ""))
    }

    if (activeExercise && activeExercise._id !== activeExerciseId) {
      setActiveExerciseId(() => activeExercise?._id);
      dispatch(clearUserInput());
      setInput("");
    }
    //eslint-disable-next-line
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
          instruction={activeExercise && activeExercise.instructions}
        />

        <SpeechBubble
          dialogue={
            getType(activeExercise) ? activeExercise.displayText : undefined
          }
        />
        <div className='flex outline-none p-2 text-base w-full font-bold text-gray-600  tracking-wider border border-2 bg-gray-100 rounded-lg h-32'>
          {getType(activeExercise) &&
            Array.isArray(activeExercise.solution) &&
            activeExercise.solution.map((word) => {
              return word !== activeExercise?.missingWord ? (
                <div key={uuid()}>{parse(word)}</div>
              ) : (
                <input
                  autoComplete='off'
                  name='text'
                  disabled={
                    activeExercise?.isComplete || activeExercise?.hasFailed
                      ? true
                      : false
                  }
                  defaultValue={
                    activeExercise?._id !== activeExerciseId ? "" : input
                  }
                  onChange={(e) => handleChange(e)}
                  key={uuid()}
                  autoFocus
                  className='cursor-blink mx-1 border-b-2 border-t-transparent border-x-transparent   appearance-none border-b  focus:border-x-transparent  bg-gray-100  border-blue-500  h-6 font-bold tracking-wider'
                  style={{ width: `${word.length * 14}px` }}
                />
              );
            })}
        </div>
        <AccentedLetters
          insertAccentedVowel={insertAccentedVowel}
          activeExercise={activeExercise}
        />
        {getType(activeExercise) &&
          activeExercise?.vocabularyHelper &&
          activeExercise?.vocabularyHelper.length > 0 && (
            <VocabularyHelper
              data={
                getType(activeExercise) ? activeExercise.vocabularyHelper : []
              }
            />
          )}
      </InteractiveLayout>
    </div>
  );
}
