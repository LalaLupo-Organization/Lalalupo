import classNames from "@/helpers/classNames"
import React, { FC } from "react"

interface StrippedBgProps {
  className?: string
}

const StrippedBg: FC<StrippedBgProps> = ({ className = "translate-x-1.5 translate-y-1.5" }) => {
  return <span className={classNames("inset-0  absolute rounded-lg striped-bg-darker -z-10 border", className)}></span>
}

export default StrippedBg
