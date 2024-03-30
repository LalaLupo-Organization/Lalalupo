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
      className={`${myFont.className} text-xl  sm:text-2xl mb-2  sm:mb-2`}>
      {instruction}
    </h1>
  );
}
