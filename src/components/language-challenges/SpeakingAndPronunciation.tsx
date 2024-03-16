import { BaseExercise, LessonState } from "@/types/lesson.types";
import { Box, Heading, Container } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { SpeakingAndPronunciationExercise } from "@/types/speaking-and-pronunciation.types";
import {
  clearUserInput,
  selectUserInput,
  setSingleInput,
} from "@/features/userInputSlice";
import { MicrophoneIcon } from "@heroicons/react/24/solid";
// import useSpeechSynthesis from "@/hooks/useSpeechSynthesis";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import ProgressBar from "@/components/progress-bar/ProgressBar";
import { motion } from "framer-motion";
import audiowave from "@/public/audiowave.json";
import Lottie from "lottie-react";
import useAssessment from "@/hooks/useAssessment";
import VocabularyHelper from "@/components/vocabulary-helper/VocabularyHelper";
import InteractiveLayout from "@/components/layouts/InteractiveLayout";
import Instruction from "@/components/instruction/Instruction";
import SpeechBubble from "@/components/speechbubble/SpeechBubble";
const SpeechRecognition =
  (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
const mic: any = new SpeechRecognition();
mic.continuous = true;
mic.lang = "it-IT";
export default function SpeakingAndPronunciation({
  data,
}: {
  data: LessonState;
}) {
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
  ): exercise is SpeakingAndPronunciationExercise {
    return exercise.type === "speakingAndPronunciation";
  }
  const userInput = useAppSelector((state) => selectUserInput(state));
  const [isListening, setIsListening] = useState(false);
  const { lessonButtonClick } = useAssessment();
  const [userSpeech, setUserSpeech] = useState("");
  const [savedSpeech, setSavedSpeech] = useState([]);
  const dispatch = useAppDispatch();
  // const speak = useSpeechSynthesis();
  const [activeExerciseId, setActiveExerciseId] = useState(
    () => activeExercise?._id
  );

  const handleClick = () => {
    if (isListening) {
      mic.stop();
      setIsListening(false);
    } else {
      mic.start();
      setIsListening(true);
      mic.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result) => result.transcript)
          .join("");
        lessonButtonClick(transcript);
        dispatch(setSingleInput(transcript));
        setIsListening(false);
      };
    }
  };

  useEffect(() => {
    if (activeExercise?.isComplete || activeExercise?.hasFailed) {
      mic.abort();
    }

    if (activeExercise && activeExercise._id !== activeExerciseId) {
      setActiveExerciseId(() => activeExercise?._id);
      dispatch(clearUserInput());
    }

    //eslint-disable-next-line
  }, [activeExercise, isListening, userSpeech]);
  if (!navigator.userAgent.includes("Mozilla")) {
    return (
      <div>
        <h1>Firefox does not support speech recognition</h1>
      </div>
    );
  }

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
          instruction={
            getType(activeExercise) ? activeExercise.instructions : null
          }
        />

        <div className='flex flex-col w-full'>
          <SpeechBubble
            dialogue={
              getType(activeExercise) ? activeExercise.display : undefined
            }
          />
        </div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          onClick={
            activeExercise?.isComplete || activeExercise?.hasFailed
              ? undefined
              : handleClick
          }
          className='flex justify-center cursor-pointer items-center text-sm rounded-2xl pb-1 sm:text-lg bg-gray-300 font-bold  tracking-wider '
        >
          <div className='bg-white w-full h-full  px-2 py-4 border border-t-2 border-r-2 border-l-2 rounded-2xl'>
            <div className='flex justify-center cursor-pointer items-center  text-gray-900 h-12'>
              <MicrophoneIcon className='h-6 sm:h-8 mr-1 text-cyan-400' />
              {isListening ? (
                <Lottie
                  animationData={audiowave}
                  loop={true}
                  style={{ height: "100px" }}
                />
              ) : (
                "CLICK TO SPEAK"
              )}
            </div>
          </div>
        </motion.div>
      </InteractiveLayout>
      {getType(activeExercise) &&
        activeExercise?.vocabularyHelper &&
        activeExercise?.vocabularyHelper.length > 0 && (
          <VocabularyHelper data={activeExercise.vocabularyHelper} />
        )}
    </div>
  );
}
