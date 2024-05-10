import { calculateCourseAverage, calculateLessonAverage, calculateUnitAverage } from "@/helpers/calculateAverageLessonScore"
import type { RootState } from "@/redux/store"
import { api } from "@/services/api"
import { ActivityFields, UserState } from "@/types/user-progress.types"
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { event } from "react-fullstory"
export const updateUserDatabase = createAsyncThunk(
  //first arg is the action name:
  "auth/update",
  //second arg is a function called payload creator:
  async (updateUser: any, thunkAPI: any) => {
    try {
      const user = await thunkAPI.getState().user

      const data = {
        courseStats: user.user.iSpeakItalian.courseStats,
        unitStats: user.user.iSpeakItalian.unitStats[user.current.unit],
        unit: user.user.iSpeakItalian.units[user.current.unit],
        current: user.current,
      }

      return await updateUser(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// Define the initial state using that type
const initialState: UserState = {
  current: null,
  user: null,
  score: 0,
  onboardingAnswers: {
    learningPurpose: "",
    lookingToAchieve: "",
    doYouKnowItalian: "",
    howDidYouHear: "",
  },
  messages: {
    activeExerciseComplete: false,
    exitDisplay: false,
    activeExerciseWrongAnswer: false,
    assessmentInstructionDisplay: false,
    activityComplete: false,
    lessonUnlock: false,
    courseComplete: false,
    courseCompletedScore: false,
    unitCompleteScore: false,
    lessonComplete: false,
    asessmentUnlock: false,
    completedUnit: false,
    upgrade: false,
    loading: false,
    warning: false,
  },
}

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`

    setScore: (
      state: UserState,
      action: PayloadAction<{
        numberComplete: number
        totalExercises: number
      }>
    ) => {
      state.score = Math.round((action.payload.numberComplete / action.payload.totalExercises) * 100)
    },
    clearScore: () => initialState,

    setCurrentActivity: (state: UserState, action: PayloadAction<UserState["current"]>) => {
      state.current = action.payload
    },
    clearCurrentActivity: (state: UserState) => {
      state.current = null
    },
    updateOrSetUsersPercentageScoreAndQualityScore: (state: UserState, action: PayloadAction<{ activityScore: number }>) => {
      // Please note that for state.current to return a value you must access the activity from the dashboard
      if (state?.user?.iSpeakItalian && state.current) {
        const lesson = state.user?.iSpeakItalian.units[state.current.unit][state.current.index]
        const activity = lesson.activities.find((activity: ActivityFields) => activity._id === state.current?._id && activity)
        const unitStats = state.user?.iSpeakItalian.unitStats

        if (activity && state.user) {
          if (activity?.activityScore >= action.payload.activityScore) return
          activity.activityScore = Math.round(action.payload.activityScore)
          // state.user.iSpeakItalian.units[state.current.unit][state.current.index].completedActivities + 1;
        }
        if (lesson.completedActivities === lesson.totalActivities) {
          lesson.lessonScore = calculateLessonAverage(lesson.activities)
          event("Completed Lesson", { lesson: lesson.title })

          if (unitStats[state.current.unit].totalUnitLessonsCompleted === unitStats[state.current.unit].totalUnitLessons) {
            unitStats[state.current.unit].finalUnitScore = calculateUnitAverage(state.user.iSpeakItalian.units[state.current.unit])

            event("Completed Unit", { unit: lesson.unit })
          }
        }
      }
    },

    /*
     * Unlocks next Lesson
     */
    unlockNextLesson: (state: UserState) => {
      // Please note that for state.current to provide a value the user must access the activity from the dashboard - that is where the dispatch function is called in order to put the current unit into state.

      //If user has already completed the activity previously then we don't need to unlock any lessons and can simply return
      if (state.current?.isComplete) return
      //Otherwise, I will need to find that specific activity in the ispeakitalian object to update
      if (state?.user?.iSpeakItalian && state.current) {
        const courseStats = state.user?.iSpeakItalian.courseStats
        const unitStats = state.user?.iSpeakItalian.unitStats
        const lesson = state.user?.iSpeakItalian.units[state.current.unit][state.current.index]
        const activity = lesson.activities.find((activity: ActivityFields) => activity._id === state.current?._id && activity)
        // If the user score is below 60 than simply return
        if (state.score < 60) return
        if (activity && !activity?.isComplete) {
          activity.isComplete = true
          lesson.completedActivities += 1
        }
        //I then have to check if user has completed all activities in the lesson
        if (lesson.completedActivities === lesson.totalActivities) {
          if (state.user.iSpeakItalian.units[state.current.unit].length - 1 >= state.current.index + 1) {
            state.user.iSpeakItalian.units[state.current.unit][state.current.index + 1].isAvailable = true
            unitStats[state.current.unit].totalUnitLessonsCompleted += 1
            courseStats.totalCourseLessonsCompleted += 1
            lesson.lessonScore = calculateLessonAverage(lesson.activities)
            lesson.isComplete = true
            //I want to check if the lesson is the last lesson of the unit. If it is I want to display a screen priming the user for the assessment.
            //Show screen unlocking the next lesson or assessment
            state.messages.lessonComplete = true
            state.messages.lessonUnlock = true

            //calculate lesson average score
          }
        }
      }
    },
    unlockNextAssessment: (state: UserState) => {
      // Please note that for state.current to provide a value the user must access the activity from the dashboard - that is where the dispatch function is called in order to put the current unit into state.

      //1. If the user has completed an activity that was previously completed then we don't need to unlock any lessons and can simply return
      if (state.current?.isComplete) return

      //2. If the user completes the assessment than we must set that assessment to isComplete to true

      if (state?.user?.iSpeakItalian && state.current) {
        const lesson = state.user?.iSpeakItalian.units[state.current.unit][state.current.index]
        const activity = lesson.activities.find((activity: ActivityFields) => activity._id === state.current?._id && activity)
        const unitStats = state.user?.iSpeakItalian.unitStats
        const courseStats = state.user?.iSpeakItalian.courseStats

        if (activity && !activity.isComplete) {
          activity.isComplete = true
          lesson.completedActivities += 1
        }
        //Check if user has completed all assessments
        if (lesson.completedActivities === lesson.totalActivities) {
          unitStats[state.current.unit].totalUnitLessonsCompleted += 1
          state.messages.completedUnit = true
          courseStats.totalCourseAssessmentsCompleted += 1
          lesson.isComplete = true
          unitStats[state.current.unit].finalUnitScore = calculateUnitAverage(state.user.iSpeakItalian.units[state.current.unit])
          //Check if the user has completed all units
          if (
            courseStats.totalCourseLessons === courseStats.totalCourseLessonsCompleted &&
            courseStats.totalCourseAssessmentsCompleted === courseStats.totalCourseAssessments
          ) {
            state.messages.courseComplete = true
            courseStats.finalCourseScore = calculateCourseAverage(unitStats)
          }
        } else {
          //else make the next assessment available to the user
          const found = lesson.activities.find((item: any) => !item.isAvailable && item)
          if (found) {
            found.isAvailable = true
          }
        }
      }
    },
    setUserToNull: () => initialState,

    setLessonUnlock: (state: UserState, action: PayloadAction<boolean>) => {
      state.messages.lessonUnlock = action.payload
    },
    setUnitCompleteScore: (state: UserState, action: PayloadAction<boolean>) => {
      state.messages.unitCompleteScore = action.payload
    },
    setCompletedUnit: (state: UserState, action: PayloadAction<boolean>) => {
      state.messages.completedUnit = action.payload
    },
    setCourseComplete: (state: UserState, action: PayloadAction<boolean>) => {
      state.messages.courseComplete = action.payload
    },
    setCourseCompleteScore: (state: UserState, action: PayloadAction<boolean>) => {
      state.messages.courseCompletedScore = action.payload
    },
    setLessonComplete: (state: UserState, action: PayloadAction<boolean>) => {
      state.messages.lessonComplete = action.payload
    },
    setAssessmentUnlock: (state: UserState, action: PayloadAction<boolean>) => {
      state.messages.asessmentUnlock = action.payload
    },
    setSuccessMessage: (state: UserState, action: PayloadAction<boolean>) => {
      state.messages.activeExerciseComplete = action.payload
    },
    setFailedMessage: (state: UserState, action: PayloadAction<boolean>) => {
      state.messages.activeExerciseWrongAnswer = action.payload
    },
    setWarningMessage: (state: UserState, action: PayloadAction<boolean>) => {
      state.messages.warning = action.payload
    },
    setActivityComplete: (state: UserState, action: PayloadAction<boolean>) => {
      state.messages.activityComplete = action.payload
    },

    setUpgradeAccount: (state: UserState, action: PayloadAction<boolean>) => {
      state.messages.upgrade = action.payload
    },
    setLoading: (state: UserState, action: PayloadAction<boolean>) => {
      state.messages.loading = action.payload
    },
    setAssessmentInstructionDisplay: (state: UserState, action: PayloadAction<boolean>) => {
      state.messages.assessmentInstructionDisplay = action.payload
    },

    setAlertsBackToFalse: (state: UserState) => {
      state.messages.activeExerciseComplete = false
      state.messages.activeExerciseWrongAnswer = false
      state.messages.exitDisplay = false
      state.messages.activityComplete = false
      state.messages.completedUnit = false
      state.messages.upgrade = false
      state.messages.lessonComplete = false
      state.messages.assessmentInstructionDisplay = false
      state.messages.loading = false
      state.messages.asessmentUnlock = false
      state.messages.unitCompleteScore = false
      state.messages.completedUnit = false
      state.messages.warning = false
    },

    setExitDisplay: (state: UserState, action: PayloadAction<boolean>) => {
      state.messages.exitDisplay = action.payload
    },
    setOnboardingData: (
      state: UserState,
      action: PayloadAction<{
        learningPurpose: string
        lookingToAchieve: string
        doYouKnowItalian: string
        howDidYouHear: string
      }>
    ) => {
      state.onboardingAnswers = action.payload
    },
  },
  extraReducers: builder => {
    builder.addMatcher(api.endpoints.getUser.matchFulfilled, (state: RootState["userReduxState"], { payload }: { payload: any }) => {
      state = payload
    })
  },
})

export const {
  setCurrentActivity,
  setUserToNull,
  setOnboardingData,
  setCourseComplete,
  setCourseCompleteScore,
  setCompletedUnit,
  setUnitCompleteScore,
  setLessonComplete,
  clearCurrentActivity,
  setScore,
  clearScore,
  unlockNextAssessment,
  setLessonUnlock,
  setSuccessMessage,
  setLoading,
  setFailedMessage,
  setUpgradeAccount,
  setActivityComplete,
  setAlertsBackToFalse,
  setAssessmentInstructionDisplay,
  setExitDisplay,
  updateOrSetUsersPercentageScoreAndQualityScore,
  unlockNextLesson,
  setAssessmentUnlock,
  setWarningMessage,
} = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.userReduxState.user?.current
export const selectCurrent = (state: RootState) => state?.userReduxState?.current
export const selectUnit = (state: RootState) => state.userReduxState?.user?.iSpeakItalian
// Other code such as selectors can use the imported `RootState` type
export const selectMessage = (state: RootState) => state?.userReduxState?.messages
export const selectExitDisplay = (state: RootState) => state?.userReduxState?.messages?.exitDisplay
export default userSlice.reducer
