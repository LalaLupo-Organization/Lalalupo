import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./useRedux";
import {
  selectToSeeIfAllInteractiveExercisesAreComplete,
  selectActiveExercise,
  setCorrectAnswer,
  putActiveExerciseIntoState,
  setIncorrectAnswer,
  clearActiveExercise,
  selectAssessment,
} from "@/features/lessonSlice";
import {
  selectUser,
  setScore,
  setSuccessMessage,
  setLoading,
  setFailedMessage,
  setActivityComplete,
  setAlertsBackToFalse,
  selectMessage,
} from "@/features/userSlice";
import RegexParser from "regex-parser";

import { selectUserInput, clearUserInput } from "@/features/userInputSlice";
// import { toast } from "react-toastify";

export default function useAssessment() {
  const dispatch = useAppDispatch();
  const interactiveExercisesComplete = useAppSelector((state) =>
    selectToSeeIfAllInteractiveExercisesAreComplete(state)
  );
  const activeExercise = useAppSelector((state) => selectActiveExercise(state));
  const { userInput, userArrayInput, userObjectInput } = useAppSelector(
    (state) => selectUserInput(state)
  );
  const messages = useAppSelector((state) => selectMessage(state));
  const currentUnitForAssessment = useAppSelector((state) =>
    selectAssessment(state)
  );
  const { numberComplete, totalExercises } = currentUnitForAssessment;

  const user = useAppSelector((state) => selectUser(state));
  useEffect(() => {
    if (!activeExercise) {
      dispatch(putActiveExerciseIntoState());
    }
    // eslint-disable-next-line
  }, [activeExercise]);
  function setSuccess() {
    dispatch(setCorrectAnswer());
    dispatch(setSuccessMessage(true));
  }
  function setFailed() {
    dispatch(setIncorrectAnswer());
    dispatch(setFailedMessage(true));
    dispatch(clearUserInput());
  }

  function lessonButtonClick(input?: string) {
    //If the user hasn't made choice then I avoid dispatching to reducer and instead send a prompt
    // This conditional checks to see if there is at least one activity not complete, if all activities are complete we return a flasy value, hence that's why I'm looking for a false return.
    if (!interactiveExercisesComplete) {
      dispatch(setScore({ numberComplete, totalExercises }));
      dispatch(setLoading(true));
      setTimeout(() => {
        dispatch(setLoading(false));
        dispatch(setActivityComplete(true));
      }, 3000);

      return;
    }

    if (activeExercise?.isComplete || activeExercise?.hasFailed) {
      dispatch(putActiveExerciseIntoState());
      dispatch(setAlertsBackToFalse());
      dispatch(clearUserInput());
      return;
    }
    if (messages.activeExerciseWrongAnswer) {
      dispatch(setAlertsBackToFalse());
      dispatch(clearActiveExercise());

      return;
    }
    if (!activeExercise?.isComplete) {
      if (activeExercise?.type === "chooseTheRightSolution") {
        if (userInput === activeExercise?.solution) {
          setSuccess();
          return;
        } else {
          setFailed();
          return;
        }
      }

      if (activeExercise.type === "conjugation") {
        let result = userArrayInput.every(
          (element, index) =>
            element
              .toLowerCase()
              .trim()
              .replace(/[^\w\sÀ-ú’']|_/g, "") ===
            activeExercise.availableWords.pairs[index][1]
              .toLowerCase()
              .trim()
              .replace(/[^\w\sÀ-ú’']|_/g, "")
        );
        if (result) {
          setSuccess();
          return;
        } else {
          setFailed();
          return;
        }
      }

      if (activeExercise?.type === "fillInTheBlank") {
        if (activeExercise?.doubleSolution) {
          let regex = RegexParser(activeExercise.regex);

          if (userInput && regex.test(userInput)) {
            // console.log("TRANSCRIPT FROM GOOGLE API: " + input)
            // console.log("REGEX: " + regex)
            setSuccess();
            return;
          } else {
            // console.log("TRANSCRIPT FROM GOOGLE API: " + input)
            // console.log("REGEX: " + regex)
            setFailed();
            return;
          }
        }

        if (
          userInput?.trim().toLowerCase() ===
            activeExercise.missingWord.toLowerCase() ||
          (activeExercise.couldBeEmpty && userInput === null)
        ) {
          setSuccess();
        } else {
          setFailed();
          return;
        }
      }
      if (activeExercise?.type === "fillInWhatYouHear") {
        if (
          userInput
            ?.trim()
            .toLowerCase()
            .replace(/[^\w\s\À-ú']|_/g, "") ===
          activeExercise.missingWord
            .toLowerCase()
            .replace(/[^\w\s\À-ú']|_/g, "")
        ) {
          setSuccess();
          return;
        } else {
          setFailed();
          return;
        }
      }
      if (activeExercise.type === "listenAndSelect") {
        if (userInput && userInput[0] === activeExercise.solution) {
          setSuccess();
          return;
        }
        if (userInput !== activeExercise.solution) {
        }
        setFailed();
        return;
      }
    }
    // if (activeExercise.type === "matchPairs" && userObjectInput) {
    //   let allCorrect = Object.entries(userObjectInput).some(
    //     (item: [string, any]) => !item[1].correct
    //   );
    //   //Has the user matched all the pairs correctly
    //   if (!allCorrect) {
    //     setSuccess();
    //     return;
    //   } else {
    //     setFailed();
    //     return;
    //   }
    // }
    if (activeExercise.type === "missingSyllable") {
      if (userInput === activeExercise.solution) {
        setSuccess();
        return;
      } else {
        setFailed();
        return;
      }
    }
    if (activeExercise.type === "multipleAnswers" && userObjectInput) {
      let correctAnswers = activeExercise.availableWords.filter(
        (word) =>
          word.italian === userObjectInput[word.italian] && word.correct && word
      );

      if (
        correctAnswers &&
        activeExercise.type === "multipleAnswers" &&
        activeExercise.targetNumber &&
        correctAnswers.length === activeExercise.targetNumber
      ) {
        setSuccess();
        return;
      }
      if (
        correctAnswers &&
        activeExercise.type === "multipleAnswers" &&
        activeExercise.targetNumber &&
        correctAnswers.length < activeExercise.targetNumber
      ) {
        setFailed();
        return;
      }
    }
    console.log(activeExercise.type);
    if (activeExercise.type === "partOfAWord") {
      console.log("step4");
      if (
        userInput?.trim().toLowerCase() ===
        activeExercise.missing[0].trim().toLowerCase()
      ) {
        console.log("step5");
        setSuccess();
        return;
      } else {
        setFailed();
        return;
      }
    }

    if (activeExercise.type === "reorder" && activeExercise.solution) {
      if (
        userInput &&
        userInput.toLowerCase().replace(/\s+/g, "") ===
          activeExercise.solution.toString().toLowerCase().replace(/\s+/g, "")
      ) {
        setSuccess();
        return;
      } else {
        setFailed();
        return;
      }
    }
    if (
      activeExercise.type === "reorderWhatYouHear" &&
      activeExercise.solution
    ) {
      if (
        userInput &&
        userInput.toLowerCase().replace(/\s+/g, "") ===
          activeExercise.solution.toString().toLowerCase().replace(/\s+/g, "")
      ) {
        setSuccess();
        return;
      } else {
        setFailed();
        return;
      }
    }
    if (activeExercise.type === "selectTheMissingWord") {
      if (userInput === activeExercise.solution) {
        setSuccess();
        return;
      } else {
        setFailed();
        return;
      }
    }
    if (activeExercise.type === "speakingAndPronunciation") {
      if (activeExercise.doubleSolution) {
        let regex = RegexParser(activeExercise.regex);
        input = input && input.toLowerCase();
        if (input && regex.test(input)) {
          // console.log("TRANSCRIPT FROM GOOGLE API: " + input)
          // console.log("REGEX: " + regex)
          setSuccess();
          return;
        } else {
          // console.log("TRANSCRIPT FROM GOOGLE API: " + input)
          // console.log("REGEX: " + regex)
          setFailed();
          return;
        }
      }
      let solution =
        activeExercise?.solution &&
        activeExercise.type === "speakingAndPronunciation" &&
        activeExercise?.solution.toString().toLowerCase();
      solution =
        solution &&
        solution
          .replace(/[^\w\s\À-ú']|_/g, "")
          .replace(/\s+/g, " ")
          .replace(/[?]/, "");
      input = input && input.toLowerCase();
      if (input && input.toLowerCase() === solution) {
        //  console.log("TRANSCRIPT FROM GOOGLE API: " + input.toLowerCase())
        //  console.log("MANIPULATED IN CODE1: " + solution)
        setSuccess();
        return;
      } else {
        // console.log("TRANSCRIPT FROM GOOGLE API: " + input.toLowerCase())
        // console.log("MANIPULATED IN CODE2: " + solution)
        setFailed();

        return;
      }
    }
    if (activeExercise.type === "twoBlanks") {
      if (
        userArrayInput.join(" ").trim().toLowerCase() ===
          activeExercise?.solution &&
        Array.isArray(activeExercise.solution) &&
        activeExercise?.solution.join(" ").trim().toLowerCase()
      ) {
        setSuccess();
        return;
      } else {
        setFailed();
        return;
      }
    }
    if (
      activeExercise.type === "typeInWhatYouHear" &&
      activeExercise.solution
    ) {
      if (
        userInput
          ?.trim()
          .toLowerCase()
          .replace(/[^\w\s\À-ú']|_/g, "") ===
        activeExercise?.solution
          .toString()
          .toLowerCase()
          .replace(/[^\w\s\À-ú']|_/g, "")
      ) {
        setSuccess();
        return;
      } else {
        setFailed();
        return;
      }
    }
    if (activeExercise.type === "writeTheSentence") {
      if (activeExercise.doubleSolution) {
        let regex = RegexParser(activeExercise.regex);

        if (userInput && regex.test(userInput)) {
          console.log("REGEX: " + regex);

          setSuccess();
          return;
        } else {
          console.log("REGEX: " + regex);
          setFailed();
          return;
        }
      }
      if (
        activeExercise.solution &&
        userInput
          ?.trim()
          .toLowerCase()
          .replace(/[^\w\s\À-ú']|_/g, "") ===
          activeExercise.solution
            .toString()
            .toLowerCase()
            .replace(/[^\w\s\À-ú']|_/g, "")
      ) {
        setSuccess();
        return;
      } else {
        setFailed();
        return;
      }
    }
    return;
  }

  return { lessonButtonClick };
}
