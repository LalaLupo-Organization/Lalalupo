import React from "react";
import classNames from "@/helpers/classNames";
import "@fontsource/nunito";
import { motion } from "framer-motion";
import Container from "../Container";
//classes

type Props = {
  color: string;
  dashed?: boolean;
  gridColsNumber: number;
  children: React.ReactNode;
  message?: boolean;
};

export default function BottomNavigation({
  color,
  gridColsNumber,
  children,
  dashed = false,
  message = false,
}: Props) {
  return (
    <motion.div
      style={{
        fontFamily: "Nunito",
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={classNames(
        message
          ? "sm:border-t am:p-2 sm:p-4 sm:px-6"
          : "p-2 sm:p-4 sm:px-6 border-t",
        "fixed left-0 bottom-0 w-full bg-white"
      )}
    >
      <div
        className={classNames(
          "sm:px-10 md:px-16 lg:px-44",
          color,
          dashed ? "sm:py-10 striped-bg-light" : "",
          message ? "p-4" : "py-4 px-2"
        )}
      >
        {/* <div className={`grid-cols-${gridColsNumber} grid`}>{children}</div> */}
        <Container className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
          {children}
        </Container>
      </div>
    </motion.div>
  );
}
