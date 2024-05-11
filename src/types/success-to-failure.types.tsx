import React from "react"
import { Status } from "./lesson.types"

export interface SuccessToFailureProps {
  children: React.ReactNode
  status: Exclude<Status, "active" | "disabled">
  solution?: string
  meaning?: any
  audioOutput?: any
}
