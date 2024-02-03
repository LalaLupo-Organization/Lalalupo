import { ActivityFields, UnitStructure } from "@/types/user-progress.types";
//This function assumes that the first array item is a readng without any activityScore
export function calculateLessonAverage(array: any) {
  let average = 0;
  array.forEach((item: ActivityFields) => {
    if (item.activityScore) {
      average += item.activityScore;
    }
  });
  return Math.floor(average / (array.length - 1));
}
export function calculateUnitAverage(array: UnitStructure) {
  let average = 0;
  array.forEach((item) => {
    if (item.lessonScore) {
      average += item.lessonScore;
    }
  });
  return Math.floor(average / (array.length - 1));
}

export function calculateCourseAverage(unitStats: any) {
  let finalUnitScore = 0;
  Object.entries(unitStats).forEach(
    (item: any) => (finalUnitScore += item[1].finalUnitScore),
  );
  return Math.floor(finalUnitScore / 15);
}

const averageCalculations = {
  calculateLessonAverage,
  calculateUnitAverage,
  calculateCourseAverage,
};

export default averageCalculations;
