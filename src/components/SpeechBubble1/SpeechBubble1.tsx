"use client";
import React from "react";
import parse from "html-react-parser";
import Image from "next/image";

type BubbleProps = {
  dialogue?: string;
  english?: string;
  solution?: string | null; // Add this line
};

export default function SpeechBubble({
  dialogue,
  english,
  solution,
}: BubbleProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex">
        <Image
          height={12}
          width={12}
          src="https://imagedelivery.net/_Fh-Z9aj1rlSxXMDl1yqsg/0aa64a3d-0747-48a2-3ca3-f17ca2e77400/character"
          alt=""
          className="w-32 sm:w-40 h-full self-end"
        />
        <div className="relative mb-6 text-sm sm:text-base border-r-2 border-l-2 border-t-2 border-b-2 self-start mt-8 sm:mt-8 py-4 ml-2 px-4 rounded-lg font-bold text-gray-700">
          <p>{dialogue && parse(dialogue)}</p>
          <p className="text-gray-400 tracking-tight font-light">
            {english && parse(english)}
          </p>

          <div
            className="absolute flex self-center h-4 border-b-2 bg-white border-l-2 w-4 rotate-45 transform bottom-4 rounded-l"
            style={{ left: "-10px" }}></div>
        </div>
      </div>
    </div>
  );
}
