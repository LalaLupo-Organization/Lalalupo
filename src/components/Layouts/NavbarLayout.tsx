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
      className={classNames(
        message
          ? "sm:border-t-2 sm:p-4 sm:px-6"
          : "py-4 px-2 sm:px-6 border-t-2",
        "fixed left-0 bottom-0 w-full bg-white border-gray-100"
      )}
    >
      <div
        className={classNames(
          "p-2 py-4 sm:flex sm:items-center",
          color,
          dashed ? "sm:py-10 striped-bg-light" : "",
          message ? "pt-6 pb-3 sm:pb-6" : ""
        )}
      >
        <Container>
          <div className="flex flex-col gap-2 sm:w-3/4 mx-auto sm:flex-row justify-center sm:justify-between sm:items-center">
            {children}
          </div>
        </Container>
      </div>
    </motion.div>
  );
}
