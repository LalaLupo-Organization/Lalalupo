import classNames from "@/helpers/classNames"
import React, { ReactNode } from "react"

const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return <div className={classNames("w-full max-w-[1536px] mx-auto", className)}>{children}</div>
}

export default Container
