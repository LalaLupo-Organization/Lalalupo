"use client";
import { BaseExercise, LessonState } from "@/types/lesson.types";
import { ReorderExercise } from "@/types/reorder.types";
import { setSingleInput, clearUserInput } from "@/features/userInputSlice";
import { useAppDispatch } from "@/hooks/useRedux";
import { ProgressBar } from "@/components/ProgressBars/ProgressBar";
import { InteractiveLayout } from "@/components/Layouts/InteractiveLayout";
// import useSpeechSynthesis from "@/hooks/useSpeechSynthesis";
import Instruction from "@/components/Headings/Instruction";
import classNames from "@/helpers/classNames";
import SpeechBubble from "@/components/SpeechBubble/SpeechBubble";

import React, { useState, useRef, useEffect } from "react";

interface Ordinator {
  top: number;
  left: number;
}
interface Settings {
  first: Ordinator;
  last: Ordinator;
}
export default function Reorder({ data }: { data: LessonState }) {
  const {
    activeExercise,
    totalExercises,
    lives,
    numberComplete,
    interactiveExercises,
    numberFailed,
    remainingExercises,
  } = data;
  function getType(exercise: BaseExercise): exercise is ReorderExercise {
    return exercise.type === "reorder";
  }
  //hooks
  const [isAnimating, setIsAnimating] = useState(false);
  const dispatch = useAppDispatch();
  const [activeExerciseId, setActiveExerciseId] = useState(
    () => activeExercise?._id
  );
  // const speak = useSpeechSynthesis();

  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [randomizedWords, setRandomizedWords] = useState(
    () =>
      getType(activeExercise) &&
      activeExercise?.availableWords
        .map((word) => word)
        .sort(() => Math.random() - 0.5)
  );

  // Refs
  const destinationRef = useRef<HTMLDivElement>(null);
  const originRef = useRef<HTMLDivElement>(null);

  const flip = (node: HTMLElement, settings: Settings) => {
    const invert = {
      x: settings.first.left - settings.last.left,
      y: settings.first.top - settings.last.top,
    };

    let animation = node.animate(
      [
        {
          transform: `scale(1,1) translate(${invert.x}px, ${invert.y}px)`,
        },
        { transform: `scale(1,1) translate(0, 0)` },
      ],
      {
        duration: 300,
        easing: "ease",
      }
    );

    animation.onfinish = () => setIsAnimating(false);
  };

  const move = (node: HTMLElement) => {
    const id = Math.random();
    const container = node.closest("#container") as HTMLElement;
    let rect = node.getBoundingClientRect();
    let first, last;

    setIsAnimating(true);
    setSelectedWords((word) => [...word, node.innerText]);

    node.dataset.id = `${id}`;
    container.dataset.id = `${id}`;

    container.style.height = `${node.offsetHeight}px`;
    container.style.width = `${node.offsetWidth}px`;

    first = { top: rect.top, left: rect.left };
    destinationRef?.current?.insertAdjacentElement("beforeend", node);
    rect = node.getBoundingClientRect();
    last = { top: rect.top, left: rect.left };

    // Animation flip function
    flip(node, { first, last });
  };

  const putback = (node: HTMLElement) => {
    const id = node.dataset.id;
    const container = originRef.current?.querySelector(
      `[data-id="${id}"]`
    ) as HTMLElement;

    let rect = node.getBoundingClientRect();
    let first, last;

    setIsAnimating(true);
    let filtered = selectedWords.filter(
      (word) => word !== node.innerText && word
    );
    setSelectedWords(filtered);

    first = { top: rect.top, left: rect.left };
    container.insertAdjacentElement("beforeend", node);
    rect = node.getBoundingClientRect();
    last = { top: rect.top, left: rect.left };

    flip(node, { first, last });

    container.style.height = "";
    container.style.width = "";
    container.removeAttribute("data-id");
    node.removeAttribute("data-id");
  };

  const handleMove = (
    event: React.MouseEvent<HTMLButtonElement>,
    userAnswer: string
  ) => {
    const node = event.target as HTMLElement;
    // speak(userAnswer);
    if (isAnimating) return;
    node.closest("#container") ? move(node) : putback(node);
  };

  useEffect(() => {
    dispatch(setSingleInput(selectedWords.join(" ")));

    if (activeExercise && activeExercise._id !== activeExerciseId) {
      setRandomizedWords(
        () =>
          getType(activeExercise) &&
          activeExercise.availableWords
            .map((word) => word)
            .sort(() => Math.random() - 0.5)
      );
      setSelectedWords([]);
      setActiveExerciseId(() => activeExercise?._id);
      dispatch(clearUserInput());
      let nodes = destinationRef.current?.querySelectorAll(".word");
      if (nodes) {
        for (let i = 0; i < nodes.length; i++) {
          nodes[i].remove();
        }
      }
    }
    //eslint-disable-next-line
  }, [selectedWords, activeExercise]);

  const english = getType(activeExercise) && activeExercise?.displayText;

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
        <div className='flex flex-col w-full'>
          {english && <SpeechBubble dialogue={english} />}

          <div
            className='destination border-t-2 border-b-2  pt-1 sm:pt-2 h-14 sm:h-16'
            ref={destinationRef}
          ></div>
          <div className='border-b-2 mb-8 sm:mb-8 pt-1 h-14 sm:h-16'></div>

          <div
            className='origin flex flex-wrap justify-center items-center w-full mx-auto border-gray-600 '
            ref={originRef}
          >
            {randomizedWords &&
              randomizedWords.map((word: string, index: number) => (
                <div
                  id='container'
                  className='sm:mb-2  m-px box-content rounded-lg sm:mx-1 justify-start text-center flex flex-col duration-300 ease-in text-gray-800'
                  key={word + "_" + index}
                >
                  <button
                    className={classNames(
                      activeExercise?.isComplete || activeExercise?.hasFailed
                        ? "cursor-not-allowed"
                        : "cursor-pointer",
                      "text-gray-800 word bg-white  box-border p-2 sm:p-2 border border-2 rounded-lg cursor-pointer font-bold active:duration-300 active:ease-in outline-none"
                    )}
                    onClick={
                      activeExercise?.isComplete || activeExercise?.hasFailed
                        ? undefined
                        : (e) => handleMove(e, word)
                    }
                    name={word}
                  >
                    {word}
                  </button>
                </div>
              ))}
          </div>
        </div>
      </InteractiveLayout>
    </div>
  );
}
