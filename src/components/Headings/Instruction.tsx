import React from "react";
import localFont from "next/font/local";
import classNames from "@/helpers/classNames";

const myFont = localFont({
  src: "../../../public/MoreSugarRegular.ttf",
});

interface Props {
  instruction: string | null;
  position?: "left" | "center" | "right";
}

export default function Instruction({ instruction, position }: Props) {
  return (
    <h1
      className={classNames(
        position ? `text-${position}` : "text-center  sm:text-left",
        `${myFont.className} text-xl w-[90%] mb-0 sm:mb-12 sm:text-2xl 2xl:text-3xl px-10 2xl:px-6`
      )}
    >
      {instruction}
    </h1>
  );
}
