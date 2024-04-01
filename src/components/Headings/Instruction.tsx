import React from "react";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../../public/MoreSugarRegular.ttf",
});
export default function Instruction({
  instruction,
}: {
  instruction: string | null;
}) {
  return (
    <h1
      className={`${myFont.className} text-xl text-center sm:text-left w-[90%] sm:text-2xl 2xl:text-3xl px-10 2xl:px-6`}
    >
      {instruction}
    </h1>
  );
}
