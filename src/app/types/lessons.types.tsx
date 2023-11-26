interface BaseExercise {
  _id: string;
  instructions: string;
  isComplete: boolean;
  hasFailed: boolean;
  solution: string;
  // Add other common properties here
}

export type ChooseTheRightSolution = BaseExercise & {
  type: "chooseTheRightSolution";
  availableWords: string[];
  displayImage: boolean;
  displayImageSrc: string;
};

export type MatchPairs = BaseExercise & {
  type: "matchPairs";
  availableWords: {
    pairs: [string, string][];
    column1: { column: string; read: boolean };
    column2: { column: string; read: boolean };
  };
  englishAnswers?: string[];

  // Add other properties specific to MatchPairs
};

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
  activeExercise: ChooseTheRightSolution | MatchPairs;
  interactiveExercises: (ChooseTheRightSolution | MatchPairs)[];
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
  ],
};
