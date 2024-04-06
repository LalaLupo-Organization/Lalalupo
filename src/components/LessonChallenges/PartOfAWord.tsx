"use client";
import { BaseExercise, LessonState } from "@/types/lesson.types";

import React, { useState, useEffect, useRef } from "react";
// import '../style.css';
import { PartOfAWordExercise } from "@/types/part-of-a-word.types";
import { setSingleInput, clearUserInput } from "@/features/userInputSlice";
// import useSpeechSynthesis from "@/hooks/useSpeechSynthesis";
import { useAppDispatch } from "@/hooks/useRedux";
import { ProgressBar } from "@/components/ProgressBars/ProgressBar";
import { v4 as uuid } from "uuid";
import Instruction from "@/components/Headings/Instruction";
import AudioBubble from "@/components/AudioBubble1/AudioBubble1";
import { InteractiveLayout } from "@/components/Layouts1/InteractiveLayout1";
export default function PartOfAWord({ data }: { data: LessonState }) {
  const {
    activeExercise,
    totalExercises,
    lives,
    numberComplete,
    interactiveExercises,
    numberFailed,
    remainingExercises,
  } = data;
  function getType(exercise: BaseExercise): exercise is PartOfAWordExercise {
    return exercise.type === "partOfAWord";
  }
  let currentOTPIndex: number = 0;
  //hooks
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<any>({});
  const [opt, setOpt] = useState<string[]>(new Array());
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);

  const dispatch = useAppDispatch();
  // const speak = useSpeechSynthesis();
  const [activeExerciseId, setActiveExerciseId] = useState(
    () => activeExercise?._id
  );

  const handleKeyDown = (
    { key, target }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOTPIndex = index;
    if (key === "Backspace") {
      const filter = opt.filter((item, i) => i !== index && item);
      setOpt(filter);
      if (currentOTPIndex === 0) return;
      setActiveOTPIndex(currentOTPIndex - 1);
    }
    if (key === "Tab") {
      setActiveOTPIndex(currentOTPIndex + 1);
    }
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const newOTP: string[] = [...opt];
    newOTP[currentOTPIndex] = value;
    setOpt(newOTP);
    if (!value) {
      setActiveOTPIndex(currentOTPIndex - 1);
    } else setActiveOTPIndex(currentOTPIndex + 1);
  };

  const matchMissing = (word: string) =>
    getType(activeExercise) &&
    activeExercise?.missing.some((item) => item === word);

  useEffect(() => {
    inputRef.current?.focus();
    if (activeExercise?.isComplete) {
      // speak(activeExercise?.word.join(""));
    }

    if (activeExercise && activeExercise._id !== activeExerciseId) {
      setActiveExerciseId(() => activeExercise?._id);
      dispatch(clearUserInput());

      setInput("");
      setOpt([]);
    }

    if (
      getType(activeExercise) &&
      opt.length === activeExercise?.missing[0].split("").length
    ) {
      dispatch(setSingleInput(Object.values(opt).join("")));
    }
    if (
      getType(activeExercise) &&
      opt.length !== activeExercise?.missing[0].split("").length
    ) {
      dispatch(clearUserInput());
    }
    //eslint-disable-next-line
  }, [activeExercise, opt, input, activeOTPIndex]);
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
          solution={getType(activeExercise) && activeExercise.word.join("")}
        />

        <div className='  items-center '>
          {getType(activeExercise) &&
            activeExercise?.word.map((item) => {
              return matchMissing(item)
                ? item.split("").map((char, index) => {
                    return (
                      <div key={uuid()} className=' inline-flex'>
                        <input
                          ref={index === activeOTPIndex ? inputRef : null}
                          className='sm:h-20 sm:w-10 h-20 w-7 cursor-blink focus:border-color_purple_default focus:border-2    border-1 text-color_purple_darker rounded lowercase outline-none text-center text-lg sm:text-xl font-fredoka '
                          maxLength={1}
                          size={1}
                          value={opt[index]}
                          onChange={handleChange}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                      </div>
                    );
                  })
                : item.split("").map((char) => {
                    return (
                      <div key={uuid()} className='inline-flex '>
                        <input
                          className='sm:h-20 sm:w-10 h-20 w-7 border-1 lowercase outline-none text-center rounded text-lg sm:text-xl font-fredoka placeholder-black'
                          maxLength={1}
                          readOnly
                          placeholder={char}
                          size={1}
                        />
                      </div>
                    );
                  });
            })}
        </div>
      </InteractiveLayout>
    </div>
  );
}
