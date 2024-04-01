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
        onClick={lessonButtonClick ? () => lessonButtonClick() : undefined}
        className={`${shadowColor} flex-1 rounded-primary pb-1`}
      >
        <div
          className={`tracking-wide items-center py-3 2xl:py-6 justify-center sm:text-base md:text-lg 2xl:text-2xl px-12 lg:px-16 2xl:px-20 rounded-primary font-medium text-center ${background} `}
        >
          {lottie ? lottie : buttonDisplayText}
        </div>
      </div>
    </div>
  );
}
