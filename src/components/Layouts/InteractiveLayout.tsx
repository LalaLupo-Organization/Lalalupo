import { motion } from "framer-motion"
import React from "react"

export const InteractiveLayout = ({ id, children }: { id: string | null; children: React.ReactNode }) => {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col w-full pt-4 sm:py-6 justify-center items-center mb-52 sm:max-w-[670px]"
    >
      {children}
    </motion.div>
  )
}
