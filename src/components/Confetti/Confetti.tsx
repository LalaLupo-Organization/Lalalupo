import confetti from "@/public/confetti.json"
import { motion } from "framer-motion"
import Lottie from "lottie-react"
import { useState } from "react"
export const Confetti = () => {
  const [play, setPlay] = useState(true)
  return play ? (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}
      onAnimationComplete={() => setPlay(false)}
    >
      <Lottie
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square h-[65%] sm:h-[80%] z-[100]"
        animationData={confetti}
        loop={false}
        style={{
          position: "fixed",
        }}
      />
    </motion.div>
  ) : (
    <></>
  )
}
