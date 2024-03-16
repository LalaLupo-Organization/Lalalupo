import React from "react";
import classNames from "@/helpers/classNames";
//classes

type Props = {
  color: string;

  gridColsNumber: number;
  children: React.ReactNode;
};

export default function BottomNavigation({
  color,
  gridColsNumber,
  children,
}: Props) {
  return (
    <div
      className={`${color} fixed left-0 bottom-0 w-full  px-4 border-t-1`}>
      <div className="container  mx-auto w-full sm:my-10 my-4">
        <div className={`grid-cols-${gridColsNumber} grid`}>
          {children}
        </div>
      </div>
    </div>
  );
}
