import React from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const InteractiveLayout = ({
  id,
  children,
}: {
  id: string | null;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col px-4 pt-4 sm:py-6 justify-center items-center mt-10 sm:mt-16 mb-52"
    >
      {id && (
        <Link
          href="/"
          // onClick={(e) => dispatch(setExitDisplay(true))}
          className="cursor-pointer fixed top-6 z-50 right-4"
        >
          <XMarkIcon className="h-7 sm:h-7 sm:mr-4 mr-2 text-black" />
        </Link>
      )}
      {children}
    </motion.div>
  );
};
