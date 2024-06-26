import React, { useEffect } from "react"
import classNames from "@/helpers/classNames"
import "@fontsource/nunito"
import { motion, useAnimation } from "framer-motion"
import Container from "../Container"
//classes

type Props = {
  color: string
  dashed?: boolean
  gridColsNumber?: number //TODO
  children: React.ReactNode
  message?: boolean
}

export default function BottomNavigation({ color, children, message = false }: Props) {
  const controls = useAnimation()

  // useEffect(() => {
  //   // Initial animation when component mounts
  //   controls.start({
  //     opacity: 1,
  //     y: 0,
  //     transition: { ease: "easeInOut" },
  //   })
  // }, [])

  useEffect(() => {
    // Whenever the state of the navbar changes, it should be triggered
    controls
      .start({
        opacity: 0,
        y: 40,
        transition: { duration: 0, ease: "easeInOut" },
      })
      .then(() => {
        controls.start({
          opacity: 1,
          y: 0,
        })
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message])
  return (
    <motion.div
      style={{
        fontFamily: "Nunito",
      }}
      initial={{ opacity: 0, y: 40 }}
      // animate={{ opacity: 1, y: 0 }}
      animate={controls}
      className={classNames(message ? "sm:border-t-2" : "border-t-2", "fixed left-0 bottom-0 w-full bg-white border-gray-100")}
    >
      <div className={classNames("py-3 sm:py-10 px-4 sm:px-6 sm:flex sm:items-center", color)}>
        <Container>
          <div className="flex flex-col gap-3 sm:w-2/3 mx-auto sm:flex-row justify-center sm:justify-between sm:items-center">
            {children}
          </div>
        </Container>
      </div>
    </motion.div>
  )
}
