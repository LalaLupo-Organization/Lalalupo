import { BaseExercise, LessonState } from "@/types/lesson.types";
import React, { useState, useEffect, useRef } from "react";
// import '../style.css';
import { ConjugationExercise } from "@/types/conjunction.types";
import { setArrayInput, clearUserInput } from "@/features/userInputSlice";
import { useAppDispatch } from "@/hooks/useRedux";
import { ProgressBar } from "@/components/ProgressBars/ProgressBar";
import { v4 as uuid } from "uuid";
import Instruction from "@/components/Headings/Instruction";
import ImageOfProfessor from "@/components/layouts/ImageOfProfessor";
import { InteractiveLayout } from "@/components/layouts/InteractiveLayout";
import classNames from "@/helpers/classNames";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import parse from "html-react-parser";

type Input = {
  [name: string]: string;
};

export default function Conjunction({ data }: { data: LessonState }) {
  const {
    activeExercise,
    totalExercises,
    lives,
    numberComplete,
    interactiveExercises,
    numberFailed,
    remainingExercises,
  } = data;
  function getType(exercise: BaseExercise): exercise is ConjugationExercise {
    return exercise.type === "conjugation";
  }
  const [autoFocus, setAutoFocus] = useState<any>({});

  //hooks

  const [inputFields, setInputFields] = useState<Input>({});
  const dispatch = useAppDispatch();
  const [activeExerciseId, setActiveExerciseId] = useState(
    () => activeExercise?._id
  );

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputFields({ ...inputFields, [target.name]: target.value });
    setAutoFocus({ [target.name]: true });
  };
  const handleOnClick = (e: any) => {
    setAutoFocus({ [e.target.name]: true });
  };

  useEffect(() => {
    if (activeExercise && activeExercise._id !== activeExerciseId) {
      setActiveExerciseId(() => activeExercise?._id);
      dispatch(clearUserInput());
      setInputFields({});
      setInputFields({});
    }

    function checkItemLength(element: string, index: number, array: string[]) {
      if (array.length === 6) {
        return element.length > 0;
      }
      return false;
    }
    if (Object.values(inputFields).every(checkItemLength)) {
      dispatch(setArrayInput(Object.values(inputFields)));
    } else {
      dispatch(clearUserInput());
    }

    //eslint-disable-next-line
  }, [activeExercise, inputFields]);
  useEffect(() => {
    setAutoFocus({ accendo: "" });

    //eslint-disable-next-line
  }, []);

  if (activeExercise?.hasFailed) {
    let results = Object.values(inputFields);
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
          <Instruction instruction={"Lesson review"} />

          <div className='flex flex-col'>
            <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='align-middle inline-block  sm:px-6 lg:px-8'>
                <div className=' overflow-hidden'>
                  <table className=' border border-t-1'>
                    <thead className=''>
                      <tr>
                        <th
                          scope='col'
                          className='px-3 sm:px-6 font-fredoka py-1 sm:py-3 text-left  sm:text-xl font-medium  uppercase tracking-wider'
                        >
                          YOU TYPED:
                        </th>

                        <th
                          scope='col'
                          className='px-3 sm:px-6 py-1 sm:py-3 font-fredoka  text-left   sm:text-xl font-medium uppercase tracking-wider'
                        >
                          ANSWER
                        </th>
                        <th
                          scope='col'
                          className='px-3 sm:px-6 py-1 sm:py-3 font-fredoka  text-left   sm:text-xl font-medium uppercase tracking-wider'
                        >
                          MARK
                        </th>
                      </tr>
                    </thead>
                    <tbody className='bg-white'>
                      {getType(activeExercise) &&
                        activeExercise.availableWords.pairs.map(
                          (item, index) => {
                            return (
                              <tr key={uuid()} className=''>
                                <td className='px-3 py-1 sm:px-6  sm:py-3  font-medium  sm:text-lg text-gray-900'>
                                  {results[index]}
                                </td>
                                <td className='px-3 py-1 sm:px-6  sm:py-4  font-medium  sm:text-lg text-gray-900'>
                                  {item[1]}
                                </td>
                                <td className='px-3 sm:px-6  py-1 text-left sm:py-4 flex justify-center   sm:text-lg text-gray-500'>
                                  {item[1] === results[index] ? (
                                    <CheckCircleIcon className='h-7 text-green-500' />
                                  ) : (
                                    <XCircleIcon className='h-7 text-red-500' />
                                  )}
                                </td>
                              </tr>
                            );
                          }
                        )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </InteractiveLayout>
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
      />
      <InteractiveLayout id={activeExercise && activeExercise._id}>
        <Instruction
          instruction={activeExercise && activeExercise.instructions}
        />
        <ImageOfProfessor />
        <div className='grid-cols-6 pb-6 px-4  items-center gap-1 text-sm  border-t-2 p-1  grid   sm:text-base sm:w-96'>
          <h3 className='text-xl font-bold mt-3 w-full col-start-1 -ml-3 col-end-6 mb-3 bg-yellow-50 rounded-lg text-yellow-700 pl-4 py-2'>
            {activeExercise?.type === "conjugation" &&
              parse(activeExercise.display)}
          </h3>
          <div className='col-start-1  col-end-1'>
            {activeExercise?.type === "conjugation" &&
              activeExercise.availableWords.pairs.map((item: any) => {
                return (
                  <div key={uuid()} className='mb-2'>
                    <p className='text-gray-700 font-semibold px-1 border-2 border-white text-lg tracking-wider'>
                      {item[0]}
                    </p>
                  </div>
                );
              })}
          </div>
          <div className='col-start-2'>
            {activeExercise?.type === "conjugation" &&
              activeExercise.availableWords.pairs.map(
                (item: any, index: number) => {
                  return (
                    <div key={uuid()} className='mb-2'>
                      <input
                        autoFocus={autoFocus[item[1]] ? true : false}
                        name={item[1]}
                        disabled={
                          activeExercise?.isComplete ||
                          activeExercise?.hasFailed
                            ? true
                            : false
                        }
                        className={classNames(
                          !index
                            ? "bg-white border-2 border-black"
                            : "border-2 border-black",
                          "ml-4 caret-black rounded-lg outline-none px-2 text-lg"
                        )}
                        value={inputFields[item[1]]}
                        onChange={(e) => handleChange(e)}
                        onClick={(e) => handleOnClick(e)}
                      />
                    </div>
                  );
                }
              )}
          </div>
        </div>
      </InteractiveLayout>
    </div>
  );
}
