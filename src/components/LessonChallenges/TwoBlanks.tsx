import { BaseExercise, LessonState } from "@/types/lesson.types";
import React, { useState, useEffect, useMemo } from "react";
import { TwoBlanksExercise } from "@/types/two-blanks.types";
import { setArrayInput, clearUserInput } from "@/features/userInputSlice";
import { ProgressBar } from "@/components/ProgressBars/ProgressBar";
// import useSpeechSynthesis from "@/hooks/useSpeechSynthesis";
import VocabularyHelper from "@/components/VocabularyHelper1/VocabularyHelper1";
import { useAppDispatch } from "@/hooks/useRedux";
import { v4 as uuid } from "uuid";
import AccentedLetters from "@/components/AccentedLetters1/AccentedLetters";
import { InteractiveLayout } from "@/components/Layouts1/InteractiveLayout1";
import Instruction from "@/components/Headings/Instruction";
import SpeechBubble from "@/components/SpeechBubble1/SpeechBubble1";
import parse from "html-react-parser";
export default function TwoBlanks({ data }: { data: LessonState }) {
  const {
    activeExercise,
    totalExercises,
    lives,
    numberComplete,
    interactiveExercises,
    numberFailed,
    remainingExercises,
  } = data;
  function getType(exercise: BaseExercise): exercise is TwoBlanksExercise {
    return exercise.type === "twoBlanks";
  }
  // const speak = useSpeechSynthesis();

  const [input, setInput] = useState("");
  const [autoFocus, setAutoFocus] = useState<any>({});

  const [blanks, setBlanks] = useState<any>({
    first: "",
    second: "",
    third: "",
    forth: "",
    fifth: "",
    sixth: "",
  });

  const dispatch = useAppDispatch();
  const [activeExerciseId, setActiveExerciseId] = useState(
    () => activeExercise?._id
  );
  const dialogue =
    getType(activeExercise) &&
    activeExercise?.english.map((phrase) => phrase + " ");
  const handleChange = (e: any) => {
    setInput(e.target.value);
    setBlanks({ ...blanks, [e.target.name]: e.target.value });
    setAutoFocus({ [e.target.name]: true });
  };
  const handleOnClick = (e: any) => {
    setAutoFocus({ [e.target.name]: true });
  };

  const insertAccentedVowel = (e: any) => {
    if (autoFocus.first)
      setBlanks({
        ...blanks,
        first: blanks.first + e.target.innerText,
      });
    if (autoFocus.second)
      setBlanks({
        ...blanks,
        second: blanks.second + e.target.innerText,
      });
    if (autoFocus.third)
      setBlanks({
        ...blanks,
        third: blanks.third + e.target.innerText,
      });
    if (autoFocus.forth)
      setBlanks({
        ...blanks,
        forth: blanks.forth + e.target.innerText,
      });
    if (autoFocus.fifth)
      setBlanks({
        ...blanks,
        fifth: blanks.fifth + e.target.innerText,
      });
    if (autoFocus.sixth)
      setBlanks({
        ...blanks,
        sixth: blanks.sixth + e.target.innerText,
      });
  };
  useEffect(() => {
    // if (activeExercise?.isComplete) {
    //   speak(activeExercise.twoBlanks.italian.join(""));
    // }

    if (activeExercise && activeExercise._id !== activeExerciseId) {
      setActiveExerciseId(() => activeExercise?._id);
      dispatch(clearUserInput());
      setInput("");
      setAutoFocus({});
      setBlanks({
        first: "",
        second: "",
        third: "",
        forth: "",
        fifth: "",
        sixth: "",
      });
    }
    dispatch(
      setArrayInput(
        (Object.values(blanks) as any).filter(
          (item: string) => item !== "" && item
        )
      )
    );

    //eslint-disable-next-line
  }, [activeExercise, blanks]);

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
      /> */}
      <InteractiveLayout id={activeExercise && activeExercise._id}>
        <Instruction
          instruction={activeExercise && activeExercise.instructions}
        />
        <SpeechBubble dialogue={dialogue ? dialogue?.join(" ") : undefined} />
        {/* <div className='flex flex-wrap  outline-none p-2 text-base font-bold text-gray-600  tracking-wider border-2 bg-gray-100 rounded-lg h-32'>
          {getType(activeExercise) && activeExercise?.italian[0]?.isSolution ? (
            <input
              name='first'
              maxLength={15}
              key={uuid()}
              autoFocus={autoFocus["first"] ? true : false}
              onClick={handleOnClick}
              disabled={
                (activeExercise?.isComplete || activeExercise?.hasFailed) &&
                true
              }
              defaultValue={blanks["first"]}
              onChange={
                activeExercise?.isComplete || activeExercise?.hasFailed
                  ? undefined
                  : (e) => handleChange(e)
              }
              autoComplete='off'
              className='cursor-blink mx-1  outline-none border-b-2 bg-gray-100  border-blue-500 border h-6 font-bold tracking-wider'
              style={{
                width: `${
                  activeExercise && activeExercise.italian[0].word.length * 12
                }px`,
                marginTop: "1px",
              }}
            />
          ) : (
            <p>
              {" "}
              {getType(activeExercise) &&
                activeExercise?.italian[0].word &&
                parse(activeExercise?.italian[0].word)}{" "}
            </p>
          )}

          {getType(activeExercise) && activeExercise?.italian[1]?.isSolution ? (
            <input
              name='second'
              maxLength={15}
              key={uuid()}
              disabled={
                (activeExercise?.isComplete || activeExercise?.hasFailed) &&
                true
              }
              onClick={handleOnClick}
              autoFocus={autoFocus["second"] ? true : false}
              defaultValue={blanks["second"]}
              onChange={
                activeExercise?.isComplete || activeExercise?.hasFailed
                  ? undefined
                  : (e) => handleChange(e)
              }
              autoComplete='off'
              className='cursor-blink mx-1  outline-none border-b-2 bg-gray-100  border-blue-500 border h-6 font-bold tracking-wider'
              style={{
                width: `${
                  getType(activeExercise) &&
                  activeExercise.italian[1].word.length * 12
                }px`,
                marginTop: "1px",
              }}
            />
          ) : (
            <p>
              {" "}
              {getType(activeExercise) &&
                activeExercise?.italian[1].word &&
                parse(activeExercise?.italian[1].word)}{" "}
            </p>
          )}

          {getType(activeExercise) && activeExercise?.italian[2]?.isSolution ? (
            <input
              name='third'
              maxLength={15}
              defaultValue={blanks["third"]}
              disabled={
                (activeExercise?.isComplete || activeExercise?.hasFailed) &&
                true
              }
              autoFocus={autoFocus["third"] ? true : false}
              key={uuid()}
              onClick={handleOnClick}
              onChange={
                activeExercise?.isComplete || activeExercise?.hasFailed
                  ? undefined
                  : (e) => handleChange(e)
              }
              autoComplete='off'
              className='cursor-blink mx-1  outline-none border-b-2 bg-gray-100  border-blue-500 border h-6 font-bold tracking-wider'
              style={{
                width: `${
                  getType(activeExercise) &&
                  activeExercise.italian[2].word.length * 12
                }px`,
                marginTop: "1px",
              }}
            />
          ) : (
            <p>
              {getType(activeExercise) &&
                activeExercise.italian[2] &&
                parse(activeExercise.italian[2].word)}
            </p>
          )}

          {getType(activeExercise) && activeExercise?.italian[3]?.isSolution ? (
            <input
              name='forth'
              maxLength={15}
              value={blanks["forth"]}
              disabled={
                (activeExercise?.isComplete || activeExercise?.hasFailed) &&
                true
              }
              autoFocus={autoFocus["forth"] ? true : false}
              key={uuid()}
              onClick={handleOnClick}
              onChange={
                activeExercise?.isComplete || activeExercise?.hasFailed
                  ? undefined
                  : (e) => handleChange(e)
              }
              autoComplete='off'
              className='cursor-blink  mx-1   outline-none border-b-2 bg-gray-100  border-blue-500 border h-6 font-bold tracking-wider'
              style={{
                width: `${
                  activeExercise && activeExercise.italian[3].word.length * 12
                }px`,
                marginTop: "1px",
              }}
            />
          ) : (
            <p>
              {" "}
              {getType(activeExercise) &&
                activeExercise?.italian[3] &&
                parse(activeExercise?.italian[3].word)}{" "}
            </p>
          )}

          {getType(activeExercise) && activeExercise?.italian[4]?.isSolution ? (
            <input
              name='fifth'
              maxLength={15}
              value={blanks["fifth"]}
              disabled={
                (activeExercise?.isComplete || activeExercise?.hasFailed) &&
                true
              }
              autoFocus={autoFocus["fifth"] ? true : false}
              key={uuid()}
              onClick={handleOnClick}
              onChange={
                activeExercise?.isComplete || activeExercise?.hasFailed
                  ? undefined
                  : (e) => handleChange(e)
              }
              autoComplete='off'
              className='cursor-blink mx-1   text-center  outline-none border-b-2 bg-gray-100  border-blue-500 border h-6 font-bold tracking-wider'
              style={{
                width: `${
                  getType(activeExercise) &&
                  activeExercise.italian[4].word.length * 12
                }px`,
                marginTop: "1px",
              }}
            />
          ) : (
            <p>
              {" "}
              {getType(activeExercise) &&
                activeExercise?.italian[4] &&
                parse(activeExercise?.italian[4].word)}{" "}
            </p>
          )}

          {getType(activeExercise) && activeExercise?.italian[5]?.isSolution ? (
            <input
              name='sixth'
              maxLength={15}
              value={blanks["sixth"]}
              disabled={
                (activeExercise?.isComplete || activeExercise?.hasFailed) &&
                true
              }
              autoFocus={autoFocus["sixth"] ? true : false}
              key={uuid()}
              onClick={handleOnClick}
              onChange={
                activeExercise?.isComplete || activeExercise?.hasFailed
                  ? undefined
                  : (e) => handleChange(e)
              }
              autoComplete='off'
              className='cursor-blink   mx-1 outline-none border-b-2 bg-gray-100  border-blue-500 border h-6 font-bold tracking-wider'
              style={{
                width: `${
                  getType(activeExercise) &&
                  activeExercise.italian[5].word.length * 12
                }px`,
                marginTop: "1px",
              }}
            />
          ) : (
            <p>
              {getType(activeExercise) &&
                activeExercise?.italian[5] &&
                parse(activeExercise?.italian[5].word)}
            </p>
          )}
        </div> */}

        <AccentedLetters
          insertAccentedVowel={insertAccentedVowel}
          activeExercise={activeExercise}
        />

        {getType(activeExercise) &&
          activeExercise?.vocabularyHelper &&
          activeExercise?.vocabularyHelper.length > 0 && (
            <VocabularyHelper
              data={activeExercise && activeExercise.vocabularyHelper}
            />
          )}
      </InteractiveLayout>
    </div>
  );
}
