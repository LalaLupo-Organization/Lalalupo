import React from "react";

export default function ButtonInteractiveLesson({
  background,
  lessonButtonClick,
  buttonDisplayText,
  shadowColor,
  lottie,
}: {
  background: string;
  lessonButtonClick: Function | null;
  buttonDisplayText: string;
  shadowColor: string;
  lottie?: any;
}) {
  return (
    <div className="flex w-full">
      <div
        onClick={
          lessonButtonClick ? () => lessonButtonClick() : undefined
        }
        className={`${shadowColor} flex-1 rounded-2xl pb-1`}>
        <div
          className={`${background} tracking-widest  items-center py-3 justify-center sm:text-base px-8 rounded-2xl font-bold text-center`}
          style={{ height: "52px" }}>
          {lottie ? lottie : buttonDisplayText}
        </div>
      </div>
    </div>
  );
}
