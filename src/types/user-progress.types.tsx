// Define a type for a user progress item
export type UserProgressItem = {
  _id: string
  lessonNumber: number
  unitTitle: number
  lessonLock: boolean
  hasAnimated: boolean
  isCompleted: boolean
  isAssessment?: boolean
}

export type User = {
  userId: string
  userProgress: UserProgressItem[]
}

// Define a type for the object data
export type UserProgressObject = Record<string, UserProgressItem>

export interface DictionaryProps {
  product: {
    cart: string
  }
}
export interface UserState {
  current: ActivityFields | null
  score: number
  onboardingAnswers: {
    learningPurpose: string
    lookingToAchieve: string
    doYouKnowItalian: string
    howDidYouHear: string
  }
  messages: {
    activeExerciseComplete: boolean
    lessonUnlock: boolean
    asessmentUnlock: boolean
    completedUnit: boolean
    exitDisplay: boolean
    courseComplete: boolean
    courseCompletedScore: boolean
    unitCompleteScore: boolean
    assessmentInstructionDisplay: boolean
    activityComplete: boolean
    activeExerciseWrongAnswer: boolean
    lessonComplete: boolean
    upgrade: boolean
    loading: boolean
  }

  user: {
    current: ActivityFields | null
    _id: string
    isSubscribed: boolean
    lifetimeAccess: boolean
    email: string | undefined
    customerId: string
    subscriptionId: string
    iSpeakItalian: {
      courseStats: CourseStats

      unitStats: {
        [unit: string]: UnitStats
      }
      units: {
        [lesson: string]: UnitStructure
      }
    }
  } | null
}

export interface ActivityFields {
  url: string
  reading?: string
  lesson: string
  type: string
  isAvailable?: boolean
  index: number
  isComplete?: boolean
  activityScore?: number
  unit: string
  _id: string
}
export interface CourseStats {
  totalCourseLessons: number
  totalCourseLessonsCompleted: number
  totalCourseAssessments: number
  totalCourseAssessmentsCompleted: number
  finalCourseScore: number
}
export type UnitStructure = {
  title: string
  unit: string
  colorClass: string
  totalActivities: number
  completedActivities: number
  lessonScore: number
  assessment?: boolean
  isAvailable: boolean
  isComplete: boolean
  activities: {
    url: string
    lesson: string
    index: number
    type: string
    activityScore: number
    isComplete: boolean
    isAvailable?: boolean
    unit: string
    _id: string
  }[]
}[]

export interface UnitStats {
  unit: string
  totalUnitLessons: number
  totalUnitLessonsCompleted: number
  finalUnitScore: number
}
