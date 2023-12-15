import { ChooseTheRightSolutionExercise } from "./choose-the-right-solution.types";
import { MatchPairsExercise } from "./match-pairs.types";
import { ConjugationExercise } from "./conjunction.types";
import { FillInTheBlankExercise } from "./fill-in-the-blanks.types";
import { FillInWhatYouHearExercise } from "./fill-in-what-you-hear.types";
import { ListenAndSelectExercise } from "./listen-and-select.types";
import { MissingSyllableExercise } from "./missing-syllables.types";
import { MultipleAnswersExercise } from "./multiple-answers.types";
import { PartOfAWordExercise } from "./part-of-a-word.types";
import { ReorderExercise } from "./reorder.types";
import { ReorderWhatYouHearExercise } from "./reorder-what-you-hear.types";
import { SelectTheMissingWordExercise } from "./select-the-missing-word.types";
import { SpeakingAndPronunciationExercise } from "./speaking-and-pronunciation.types";
import { TwoBlanksExercise } from "./two-blanks.types";
import { TypeInWhatYouHearExercise } from "./type-in-what-you-hear.types";
import { WriteInItalianExercise } from "./write-in-italian.types";
export interface BaseExercise {
  _id: string;
  instructions: string;
  isComplete: boolean;
  hasFailed: boolean;
  solution?: string | string[];
  
  // Add other common properties here
}

export type LessonState = {
  _id: string;
  __v: number;
  isComplete: boolean;
  hasFailed: boolean;
  attempts: number;
  totalExercises: number;
  remainingExercises: number;
  lives?: null | number;
  numberComplete: number;
  numberFailed: number;
  correctLetters: string[];
  activeExercise: ChooseTheRightSolutionExercise | MatchPairsExercise | ConjugationExercise | FillInTheBlankExercise | FillInWhatYouHearExercise | ListenAndSelectExercise | MissingSyllableExercise | MultipleAnswersExercise | PartOfAWordExercise | ReorderExercise | ReorderWhatYouHearExercise | SelectTheMissingWordExercise | SpeakingAndPronunciationExercise | TwoBlanksExercise | TypeInWhatYouHearExercise | WriteInItalianExercise;
  interactiveExercises: (ChooseTheRightSolutionExercise | MatchPairsExercise | ConjugationExercise | FillInTheBlankExercise |FillInWhatYouHearExercise | ListenAndSelectExercise | MissingSyllableExercise | MultipleAnswersExercise | PartOfAWordExercise | ReorderExercise | ReorderWhatYouHearExercise | SelectTheMissingWordExercise | SpeakingAndPronunciationExercise | TwoBlanksExercise | TypeInWhatYouHearExercise | WriteInItalianExercise)[];
};




const exercise: LessonState = {
  _id: "string",
  __v: 1,
  isComplete: false,
  hasFailed: false,
  attempts: 0,
  totalExercises: 0,
  remainingExercises: 0,
  lives: null,
  numberComplete: 0,
  numberFailed: 0,
  correctLetters: [],
  activeExercise: {
    type: "chooseTheRightSolution",
    _id: "string",
    solution: "string",
    availableWords: ["string"],
    instructions: "string",
    displayImage: true,
    displayImageSrc: "string",
    isComplete: false,
    hasFailed: false,
  },
  interactiveExercises: [
    {
      type: "chooseTheRightSolution",
      _id: "635f9a0fefff76c1f466c9be",
      solution: "panino",
      availableWords: ["panino", "ravioli", "espresso"],
      instructions: "What is this?",
      displayImage: true,
      displayImageSrc:
        "https://imagedelivery.net/_Fh-Z9aj1rlSxXMDl1yqsg/b753daa9-b6c7-4773-a681-e1f881c9f600/character",
      isComplete: false,
      hasFailed: false,
    },
    {
      _id: "12345",
  instructions: "Match the corresponding words.",
  isComplete: false,
  hasFailed: false,
  solution: "Some solution here",
  type: "matchPairs",
  availableWords: {
    pairs: [ 
      [ "attenzione","attention"],
      ["stazione","station"],
      ["possibile", "possible"],
    ],
    column1: {
      column: "1",
      read: true,
    },
    column2: {
      column: "2",
      read: false,
    },
  },

  // Add other specific properties here
    }
  ],
};
