// Define a type for a user progress item
export type UserProgressItem = {
  _id: string;
  lessonNumber: number;
  unitTitle: number;
  lessonLock: boolean;
  hasAnimated: boolean;
  isCompleted: boolean;
  isAssessment?: boolean;
};

export type User = {
  userId: string;
  userProgress: UserProgressItem[];
};

// Define a type for the object data
export type UserProgressObject = Record<string, UserProgressItem>;

export interface DictionaryProps {
  product: {
    cart: string;
  };
}
